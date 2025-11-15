<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})

const attrs = Object.keys(useAttrs())
console.log('point', attrs)
const [x, y] = attrs[0].split(',')
const [x2, y2] = attrs[1].split(',')
console.log('Pointer3', x, y, x2, y2)

const lwAttr = attrs.find(attr => attr.startsWith('lw'))
const width = lwAttr ? lwAttr.slice(2) : '3'


// Calculate arrow coordinates based on props
const arrowCoords = computed(() => {
  return {
    x2: parseFloat(x2) * 10,
    y2: parseFloat(y2) * 10,
    x1: parseFloat(x) * 10,
    y1: parseFloat(y) * 10,
    width,
    color: 'black'
  }
})

</script>

<template>
  <Arrow v-bind="arrowCoords" />
</template>