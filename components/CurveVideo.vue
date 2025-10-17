<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onSlideLeave, useIsSlideActive } from '@slidev/client'
import { whenever } from '@vueuse/core'

const isActive = useIsSlideActive()

const nFrame = 49
const frameRate = 25

const frame = ref(1)
const direction = ref(1)
const isSliderOverride = ref(false)
const sliderValue = ref(1)

let timer: NodeJS.Timeout

const tick = () => {
  if (!isActive.value || isSliderOverride.value) return
  console.log('tick', frame.value)
  frame.value += direction.value
  if (frame.value < 2) {
    direction.value = 1
    timer = setTimeout(tick, 500)
  } else if (frame.value >= nFrame) {
    direction.value = -1
    timer = setTimeout(tick, 500)
  } else {
    timer = setTimeout(tick, 1000 / frameRate)
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

const isPaused = ref(false)
const togglePause = () => {
  if (isPaused.value) {
    isPaused.value = false
    tick()
  } else {
    isPaused.value = true
    clearTimeout(timer)
  }
}

whenever(isActive, () => {
  console.log('start animation')
  frame.value = 1
  clearTimeout(timer)
  tick()
}, { immediate: true })

onSlideLeave(() => {
  clearTimeout(timer)
})

</script>

<template>
<div class="curve-video-container" w-full>
  <img :src="`/fig/curves/${frame}.svg`" flex-1 max-h-full w-full object-contain
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
  opacity: 1;
  pointer-events: auto;
}

.frame-slider {
  width: 80%;
  height: 4px;
  background: #ddd;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
}

.frame-slider::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: #007acc;
  border-radius: 50%;
  cursor: pointer;
}

.frame-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #007acc;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
</style>
