<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label?: string
  // corners
  t?: string
  l?: string
  r?: string
  b?: string
  // size
  h?: string
  w?: string
  // center
  y?: string
  x?: string
}>()

const positionStyles = computed(() => {
  const styles: Record<string, string> = {
    position: 'absolute'
  }

  // Size props (multiply by 10 to convert to pixels, default to 10 if not provided)
  styles.height = `${parseFloat(props.h || '10') * 10}px`
  styles.width = `${parseFloat(props.w || '10') * 10}px`

  // Corner positioning takes precedence over center positioning
  // Earlier props (t, l, r, b) take precedence over later ones (x, y)
  if (props.t !== undefined) {
    styles.top = `${parseFloat(props.t) * 10}px`
  } else if (props.y !== undefined) {
    styles.top = `${parseFloat(props.y) * 10}px`
    styles.transform = styles.transform ? `${styles.transform} translateY(-50%)` : 'translateY(-50%)'
  }

  if (props.l !== undefined) {
    styles.left = `${parseFloat(props.l) * 10}px`
  } else if (props.x !== undefined) {
    styles.left = `${parseFloat(props.x) * 10}px`
    styles.transform = styles.transform ? `${styles.transform} translateX(-50%)` : 'translateX(-50%)'
  }

  if (props.r !== undefined) {
    styles.right = `${parseFloat(props.r) * 10}px`
  }

  if (props.b !== undefined) {
    styles.bottom = `${parseFloat(props.b) * 10}px`
  }

  return styles
})

</script>

<template>

  <div :style="positionStyles" px-2 flex-center bg-white border="~ black 6 solid" shadow-xl text-center font-500 >
    <div v-if="label" v-html="label" />
    <div v-else>
      <slot />
    </div>
  </div>
  

</template>
