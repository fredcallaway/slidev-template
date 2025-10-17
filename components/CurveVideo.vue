<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { onSlideLeave, useIsSlideActive } from '@slidev/client'
import { watchImmediate } from '@vueuse/core'

const props = defineProps<{
  play?: boolean
  name: string
  show0?: boolean
}>()

const nFrame = 99
const frameRate = 30

const isActive = useIsSlideActive()
const frame = ref(1)
const direction = ref(1)
const isSliderOverride = ref(false)
const sliderValue = ref(1)
const isPaused = ref(false)

const isPlaying = computed(() => !props.show0 && isActive.value && props.play && !isPaused.value)


let timer: NodeJS.Timeout

const tick = () => {
  clearTimeout(timer)
  if (!isPlaying.value || isSliderOverride.value) return
  // console.log('tick', frame.value)
  const fromZero = frame.value == 0
  frame.value += direction.value
  if (frame.value < 2) {
    direction.value = 1
    timer = setTimeout(tick, fromZero ? 1000 / frameRate : 500)
  } else if (frame.value >= nFrame) {
    direction.value = -1
    timer = setTimeout(tick, 500)
  } else {
    timer = setTimeout(tick, 1000 / frameRate)
  }
}

watchImmediate(isActive, (active) => {
  if (active) {
    // frame.value = props.show0 ? 0 : 1
    tick()
  } else {
    clearTimeout(timer)
  }
})

watchImmediate(() => props.play, (val) => {
  console.log('play is', props.play)
  if (val) {
    isPaused.value = false
    tick()
  } else {
    clearTimeout(timer)
  }
})

watchImmediate(() => props.show0, (val) => {
  if (val) {
    frame.value = 0
  } else {
    frame.value = 1
  }
})


const togglePause = () => {
  if (isPaused.value) {
    isPaused.value = false
    tick()
  } else {
    isPaused.value = true
    clearTimeout(timer)
  }
}


const handleSliderInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  sliderValue.value = parseInt(target.value)
  frame.value = sliderValue.value
}

const handleSliderMouseDown = () => {
  isSliderOverride.value = true
  clearTimeout(timer)
}

const handleSliderMouseUp = () => {
  isSliderOverride.value = false
  if (isActive.value && !isPaused.value) {
    tick()
  }
}


</script>

<template>
<div class="curve-video-container" w-full>
  <img :src="`/fig/curves/${name}/${frame}.svg`" flex-1 max-h-full w-full object-contain
    @click=togglePause()
  />
  <div class="slider-container">
    <input
      type="range"
      :min="1"
      :max="nFrame"
      :value="frame"
      @input="handleSliderInput"
      @mousedown="handleSliderMouseDown"
      @mouseup="handleSliderMouseUp"
      class="frame-slider"
    />
  </div>
</div>
</template>

<style scoped>
.curve-video-container {
  position: relative;
}

.slider-container {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.curve-video-container:hover .slider-container {
  opacity: 0.;
  pointer-events: auto;
  z-index: 100
}

.frame-slider {
  width: 100%;
  height: 20px;
  background: #ddd;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
}


</style>
