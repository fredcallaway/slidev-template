<script setup lang="js">
import { ref, computed } from 'vue'

import { onSlideEnter, onSlideLeave, useNav } from '@slidev/client'

const { nextSlide } = useNav()

const props = defineProps({
  x: {
    type: String,
    default: '500',
  },
  y: {
    type: String,
    default: '50',
  },
  length: {
    type: String,
    default: '400',
  },
  color: {
    type: String,
    default: 'black',
  },
  width: {
    type: String,
    default: '10',
  },
  duration: {
    type: String,
    default: '5000',
  },
})

const parsedProps = computed(() => {
  return {
    x: parseInt(props.x),
    y: parseInt(props.y),
    color: props.color,
    duration: parseInt(props.duration),
    width: parseInt(props.width),
  }
})

const progress = ref(0)
let timer = null

// Calculate the current endpoint of the line based on progress

const startTimer = () => {
  progress.value = 0
  const start = Date.now()
  const duration = parsedProps.value.duration

  timer = window.setInterval(() => {
    const elapsed = Date.now() - start
    progress.value = Math.min(elapsed / duration, 1)
    if (progress.value >= 1) {
      clearInterval(timer)
      nextSlide()
    }
  }, 16)
}

onSlideEnter(() => {
  startTimer()
})

onSlideLeave(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})
</script>

<template>
  <div 
    :style="{
      position: 'absolute',
      top: y - 10 + 'px',
      left: x - 50 + 'px'
    }"
  >Time:</div>
  <div 
    :style="{
      width: length * (1-progress) + 'px',
      height: width + 'px',
      backgroundColor: color,
      position: 'absolute',
      top: y + 'px',
      left: x + 'px'
    }"
  ></div>
</template>
