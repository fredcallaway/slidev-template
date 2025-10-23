<template>
  <div flex flex-col>
    <div
      v-show="showImmediately || !layoutRunning"
      ref="cytoContainer"
      :style="{ width: props.width, height: props.height }"
    ></div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import cytoscape from 'cytoscape'
// @ts-ignore - no types available for cytoscape-dagre
import dagre from 'cytoscape-dagre'

let isInitialized = false

const initializeCytoscape = () => {
  console.log('initializeCytoscape', isInitialized)
  if (isInitialized) {
    return cytoscape
  }

  console.log('registering cytoscape extensions')
  // Register the dagre layout extension
  cytoscape.use(dagre)
  
  isInitialized = true
  return cytoscape
}

export interface GraphSpec {
  adjacency: Record<string | number, (string | number)[]> | number[][]
  undirected?: boolean
  nodeClasses?: Record<string | number, string[] | string>
  classNodes?: Record<string, (string | number)[]>
  labels?: Record<string | number, string>
  positions?: Record<string | number, { x: number, y: number }>
  edgeClasses?: Record<string, string>
  edgeData?: (source: string, target: string) => Record<string, any>
}

interface Props {
  graphSpec: GraphSpec
  width?: string
  height?: string
  layout?: any
  style?: any[] | Record<string, any>
  showImmediately?: boolean // show graph before layout is ready
  onRender?: (ctx: CanvasRenderingContext2D) => void
}

const props = withDefaults(defineProps<Props>(), {
  width: '1500px',
  height: '700px',
  layout: () => ({ name: 'circle' }),
  style: () => ({}),
  onRender: () => {}
})

console.log('GraphViewer', props)


const cytoContainer = ref<HTMLElement>()
let cy: cytoscape.Core | null = null
const layoutRunning = ref(false)

// Deep merge two objects
const deepMerge = (target: any, source: any): any => {
  const result = { ...target }
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key])
    } else {
      result[key] = source[key]
    }
  }
  
  return result
}

// Default styles as object format
const defaultStyles = {
  'node': {
    'background-color': 'white',
    'border-color': 'black',
    borderWidth: 3,

    // 'label': 'data(id)',
    'color': 'black',
    'text-valign': 'center',
    'width': '30px',
    'height': '30px'
  },
  'edge': {
    'width': 3,
    'line-color': '#222',
    'target-arrow-color': '#222',
    'target-arrow-shape': 'triangle',
    'curve-style': 'bezier'
  }
}

const shorthands: Record<string, Record<string, string[]>> = {
  'edge': {
    'color': ['line-color', 'target-arrow-color']
  },
  'node': {
    'size': ['width', 'height']
  }
}

// Generate stylesheet from props
const cytoStyle = computed(() => {
  // Convert user styles to object format if needed
  const userStyles = Array.isArray(props.style) 
    ? props.style.reduce((acc, rule) => {
        acc[rule.selector] = rule.style
        return acc
      }, {} as Record<string, any>)
    : props.style

  // Process shorthand properties
  const processedStyles = { ...userStyles } as Record<string, any>
  Object.keys(processedStyles).forEach(selector => {
    const style = processedStyles[selector]
    if (!style) return
    
    // Find matching shorthand definition
    const shorthandDef = Object.keys(shorthands).find(key => 
      selector === key || selector.includes(key)
    )
    
    if (shorthandDef) {
      const shortcuts = shorthands[shorthandDef]
      
      // Process each shorthand property
      Object.keys(shortcuts).forEach(shorthandProp => {
        if (style[shorthandProp] !== undefined) {
          const fullProperties = shortcuts[shorthandProp]
          const shorthandValue = style[shorthandProp]
          
          // Expand shorthand to full properties
          fullProperties.forEach((fullProp: string) => {
            if (!style[fullProp]) {
              style[fullProp] = shorthandValue
            }
          })
          
          // Remove the shorthand property
          Reflect.deleteProperty(style, shorthandProp)
        }
      })
    }
  })
  // no arrows for undirected graphs
  if (props.graphSpec.undirected) {
    processedStyles.edge['target-arrow-shape'] = 'none'
  }

  const mergedStyles = deepMerge(defaultStyles, processedStyles)
  
  // Convert object format to array format expected by Cytoscape
  return Object.entries(mergedStyles).map(([selector, styleProps]) => ({
      selector,
      style: styleProps
    }))
})

// Convert graphSpec to cytoscape elements format
const cytoElements = computed(() => {
  const elements: any[] = []
  const spec = props.graphSpec
  
  // Collect all unique nodes (convert all to strings for consistency)
  const nodes = new Set<string>()
  Object.keys(spec.adjacency).forEach(source => {
    nodes.add(source) // source is already a string from Object.keys()
    // @ts-ignore: it works fine to treat an array as an object, keys are '0', '1', ...
    spec.adjacency[source].forEach(target => {
      nodes.add(String(target)) // convert target to string
    })
  })
  
  // Create node elements
  nodes.forEach(nodeId => {
    const nodeEl: any = {
      data: { 
        id: String(nodeId), 
        label: spec.labels?.[nodeId] || String(nodeId) 
      },
      classes: []
    }
    
    if (spec.positions?.[nodeId]) {
      nodeEl.position = spec.positions[nodeId]
    }
    if (spec.nodeClasses?.[nodeId]) {
      nodeEl.classes = spec.nodeClasses[nodeId]
    }
    if (spec.classNodes) {
      Object.entries(spec.classNodes).forEach(([className, nodeIds]) => {
        if (nodeIds.map(String).includes(String(nodeId))) {
          nodeEl.classes.push(className)
        }
      })
    }
    
    elements.push(nodeEl)
  })
  
  // Create edge elements
  const addedEdges = new Set<string>()
  Object.entries(spec.adjacency).forEach(([source, targets]) => {
    targets.forEach(target => {
      const sourceStr = String(source)
      const targetStr = String(target)
      
      // For undirected graphs, avoid duplicate edges by checking both directions
      if (spec.undirected) {
        const edgeKey1 = `${sourceStr}-${targetStr}`
        const edgeKey2 = `${targetStr}-${sourceStr}`
        
        if (addedEdges.has(edgeKey1) || addedEdges.has(edgeKey2)) {
          return
        }
        addedEdges.add(edgeKey1)
      }
      
      const edgeData = spec.edgeData ? spec.edgeData(sourceStr, targetStr) : {}
      elements.push({
        data: {
          id: `edge-${sourceStr}-${targetStr}`,
          source: sourceStr,
          target: targetStr,
          ...edgeData
        }
      })
    })
  })
  
  return elements
})

const applyEdgeClasses = () => {
  cy?.edges().forEach(edge => {
    const sourceNode = edge.source()
    const targetNode = edge.target()
    
    // Add "from-" classes based on source node classes
    sourceNode.classes().forEach((cls: string) => {
      edge.addClass(`from-${cls}`)
    })
    
    // Add "to-" classes based on target node classes
    targetNode.classes().forEach((cls: string) => {
      edge.addClass(`to-${cls}`)
    })
  })
}

const addRenderHandler = () => {
  if (!cy) return
  const myCy = cy  // for typing

  const overlay = document.createElement('canvas');
  overlay.style.position = 'absolute';
  overlay.style.inset = '0';
  overlay.style.pointerEvents = 'none';
  myCy.container()?.appendChild(overlay);

  const resize = () => {
    overlay.width = myCy.width();
    overlay.height = myCy.height();
  }
  resize();
  myCy.on('resize', resize);

  const ctx = overlay.getContext('2d')!;

  myCy.on('render', () => {
    ctx.clearRect(0, 0, 2*overlay.width, 2*overlay.height)

    // Get pan and zoom for coordinate transformation
    const { x: panX, y: panY } = myCy.pan()
    const zoom = myCy.zoom() / 2  // / 2 is a big wtf - maybe retina?

    // Set transform to match Cytoscape's coordinate system
    ctx.setTransform(zoom, 0, 0, zoom, panX, panY)

    props.onRender(ctx)
  });
}

const initCytoscape = () => {
  const cytoscapeInstance = initializeCytoscape()
  cy = cytoscapeInstance({
    container: cytoContainer.value,
    elements: cytoElements.value,
    style: cytoStyle.value as any,
    layout: props.layout,
    
    // minZoom: 1e-50,
    // maxZoom: 1e50,
    // zoomingEnabled: true,
    userZoomingEnabled: false,
    // panningEnabled: true,
    userPanningEnabled: false,
    boxSelectionEnabled: false,
    // selectionType: 'single',
    // touchTapThreshold: 8,
    // desktopTapThreshold: 4,
    // autolock: true,
    autoungrabify: true,
    autounselectify: true,
    // multiClickDebounceTime: 250,
  })

  // hide selection indicators
  cy.style()
    .selector('core').style('active-bg-opacity', 0)
    .selector(':selected, :active').style('overlay-opacity', 0)
    .update();
  
  // cy.resize()
  // cy.fit()
}

const runLayout = () => {
  if (!cy) return
  layoutRunning.value = true
  cy.layout(props.layout)
  .on('layoutstop', () => {
    layoutRunning.value = false
  })
  .run()
}

onMounted(() => {
  initCytoscape()
  addRenderHandler()
  applyEdgeClasses()
})

onUnmounted(() => {
  cy?.destroy()
})

watch(cytoElements, () => {
  if (!cy) return

  cy.elements().remove()
  cy.add(cytoElements.value)
  applyEdgeClasses()
  runLayout()
}, { deep: true })

watch(() => props.layout, () => {
  // runLayout()
}, { deep: true })

watch(cytoStyle, () => {
  cy?.style().fromJson(cytoStyle.value).update()
}, { deep: true })

// trigger resize and fit when visibility of container changes
useIntersectionObserver(cytoContainer, ([entry]) => {
  if (entry.isIntersecting) {
    nextTick(() => {
      // cy?.resize()
      // cy?.fit()
    })
  }
})

// Expose cy instance and export methods for external access
defineExpose({
  getCytoscape: () => cy,
})
</script>

 