<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  x: string
  y: string
  x2: string
  y2: string
  width?: string
}>()

// Calculate arrow coordinates based on props
const arrowCoords = computed(() => {
  const x = parseFloat(props.x) * 10
  const y = parseFloat(props.y) * 10
  const x2 = parseFloat(props.x2) * 10
  const y2 = parseFloat(props.y2) * 10
  const width = parseFloat(props.width || '3')
  
  return {
    x2,
    y2,
    x1: x,
    y1: y,
    width,
    color: 'black'
  }
})

</script>

<template>
  <Arrow v-bind="arrowCoords" />
</template>