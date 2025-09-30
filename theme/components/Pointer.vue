<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  x: string
  y: string
  length?: string
  rot?: string
  width?: string
}>()

// Calculate arrow coordinates based on props
const arrowCoords = computed(() => {
  const x = parseFloat(props.x) * 10
  const y = parseFloat(props.y) * 10
  const length = parseFloat(props.length || '10') * 10
  const rotationDegrees = parseFloat(props.rot || '3') - 3
  const rotationRadians = (30*rotationDegrees * Math.PI) / 180
  const width = parseFloat(props.width || '3')
  
  // Calculate the end point of the arrow
  const endX = x + length * Math.cos(rotationRadians)
  const endY = y + length * Math.sin(rotationRadians)
  
  return {
    x2: x,
    y2: y,
    x1: endX,
    y1: endY,
    width,
    color: 'black'
  }
})

</script>

<template>
  <Arrow v-bind="arrowCoords" />
</template>