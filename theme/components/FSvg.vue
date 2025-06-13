<script setup>
import { computed, defineAsyncComponent, ref, onMounted, watch, onBeforeMount } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '150px', // Default width in pixels
  },
  custom: {
    // add a custom class if you want
    type: String,
    default: '',
  },
  // Layer visibility controls - paired properties
  hide: {
    type: String,
    default: '', // IDs of layers to hide (opposite of show)
  },
  show: {
    type: String,
    default: '', // IDs of layers to show (opposite of hide)
  },
  emph: {
    type: String,
    default: '', // IDs of layers to emphasize (opposite of fade)
  },
  fade: {
    type: String,
    default: '', // IDs of layers to fade (opposite of emph)
  }
})

// Generate a unique ID for this component instance to prevent marker ID conflicts
const uniqueId = ref(`svg-${Math.random().toString(36).substring(2, 11)}`)

// Import SVG content as raw text instead of as a component
const svgContent = ref('')
const svgLoaded = ref(false)

// Convert layer IDs to their full format
function preprocessId(id) {
  // Check if it's a number
  if (/^\d+$/.test(id)) {
    return `Layer_${id}`
  }
  return id
}

// Parse space-separated list of IDs
function parseIds(idsString) {
  if (!idsString || idsString.trim() === '') return []
  return idsString.trim().split(/\s+/).map(id => preprocessId(id))
}

// Validate props to ensure we're not using conflicting combinations
function validateProps() {
  // Check for errors in props
  if (props.hide && props.show) {
    console.error('Error: Cannot specify both hide and show props at the same time')
    return false
  }
  
  if (props.emph && props.fade) {
    console.error('Error: Cannot specify both emph and fade props at the same time')
    return false
  }
  
  return true
}

// Determine which class to apply to each layer
const layerClasses = computed(() => {
  if (!validateProps()) return {}
  
  // Parse layer IDs
  const hideIds = parseIds(props.hide)
  const showIds = parseIds(props.show)
  const emphIds = parseIds(props.emph)
  const fadeIds = parseIds(props.fade)
  
  // Determine the default class for unlisted layers
  const defaultClass = 
    props.show ? 'svg-hidden' : 
    props.emph ? 'svg-faded' : 
    'svg-visible'

  const layerClassMap = { default: defaultClass }
  
  // Add specific rules for individual layers
  if (props.show) {
    showIds.forEach(id => {
      layerClassMap[id] = 'svg-visible'
    })
  } else if (props.hide) {
    hideIds.forEach(id => {
      layerClassMap[id] = 'svg-hidden'
    })
  }
  
  if (props.emph) {
    emphIds.forEach(id => {
      if (layerClassMap[id] !== 'svg-hidden') {
        layerClassMap[id] = 'svg-emphasized'
      }
    })
  } else if (props.fade) {
    fadeIds.forEach(id => {
      if (layerClassMap[id] !== 'svg-hidden') {
        layerClassMap[id] = 'svg-faded'
      }
    })
  }
  return layerClassMap
})

// Apply classes to SVG layers
function applyLayerClasses(svgText, classMap) {
  // console.log(classMap)
  
  return svgText.replace(
    new RegExp(`<g\\s+id="SVGLAYER_([^"]+)"`, 'g'),
    (match, layerName) => {
      // console.log(match, layerName, classMap[layerName] ?? classMap.default)
      return `${match} class="${classMap[layerName] ?? classMap.default}"`
    }
  )
}

function replaceUrls(text) {

    // Make all marker IDs unique by adding our unique prefix
    const markersRegex = /id="([^"]+_Marker)"/g
    const markerRefs = new Set()
    let match
    
    // First, find all marker references
    const urlRegex = /url\(#([^)]+_Marker)\)/g
    while ((match = urlRegex.exec(text)) !== null) {
      markerRefs.add(match[1])
    }
    
    // Then, update both the marker IDs and references
    markerRefs.forEach(markerId => {
      const uniqueMarkerId = `${uniqueId.value}_${markerId}`
      text = text.replace(new RegExp(`id="${markerId}"`, 'g'), `id="${uniqueMarkerId}"`)
      text = text.replace(new RegExp(`url\\(#${markerId}\\)`, 'g'), `url(#${uniqueMarkerId})`)
    })

    return text
}

// Load the SVG content
async function loadSvg() {
  try {
    const response = await fetch(`/img/${props.src}.svg`)
    let text = await response.text()
    
    // Remove Canvas identifier from ids
    // Find canvas name from first <g> tag with an id
    const canvasMatch = text.match(/<g\s+id="([^"]+)"/);
    const canvasName = canvasMatch[1]
    text = text.replace(new RegExp(`${canvasName}_`, 'g'), 'SVGLAYER_')
    
    text = replaceUrls(text)
    text = applyLayerClasses(text, layerClasses.value)
    
    svgContent.value = text 
    svgLoaded.value = true
  } catch (error) {
    console.error('Error loading SVG:', error)
  }
}

// Watch for changes in props that affect layer styling
watch([() => props.hide, () => props.show, () => props.emph, () => props.fade], () => {
  if (svgLoaded.value) {
    // Re-apply classes when props change
    svgContent.value = applyLayerClasses(svgContent.value, layerClasses.value)
  }
})

// Load the SVG content when the component is created
onBeforeMount(() => {
  loadSvg()
})
</script>

<template>
  <div 
    class="svg-layers-container" 
    :class="custom" 
    :style="{ width: width }"
  >
    <div v-if="svgLoaded" v-html="svgContent" class="svg-content"></div>
  </div>
</template>

<style scoped>
.svg-layers-container {
  display: inline-block;
  line-height: 0;
}

.svg-content {
  width: 100%;
  height: auto;
  display: block;
}

.svg-content :deep(svg) {
  width: 100%;
  height: auto;
  display: block;
}

/* Layer styling with classes */
.svg-content :deep(.svg-visible) {
  opacity: 1;
}

.svg-content :deep(.svg-hidden) {
  opacity: 0;
}

.svg-content :deep(.svg-emphasized) {
  opacity: 1;
}

.svg-content :deep(.svg-faded) {
  opacity: 0.2;
}
</style> 