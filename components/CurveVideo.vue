<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { onSlideLeave, useIsSlideActive } from '@slidev/client'
import { watchImmediate } from '@vueuse/core'

const props = withDefaults(defineProps<{
  path: string
  play?: boolean
  show0?: boolean
  nFrame?: number
  frameRate?: number
  initDirection?: number | string
  initFrame?: number | string | undefined
  pauseAtBoundary?: boolean
}>(), {
  frameRate: 30,
  nFrame: 99,
  initDirection: 1,
})

const isActive = useIsSlideActive()
const frame = ref(Number(props.initFrame ?? 1))
const direction = ref(Number(props.initDirection))
const isSliderOverride = ref(false)
const sliderValue = ref(1)
const isPaused = ref(false)

const isPlaying = computed(() => !props.show0 && isActive.value && props.play && !isPaused.value)

watchImmediate(() => props.initFrame, (val) => {
  if (val !== undefined) {
    frame.value = Number(val)
    if (frame.value === undefined || isNaN(frame.value)) {
      frame.value = 1
    }
  }
})

watchImmediate(() => props.pauseAtBoundary, (val) => {
  if (!val) {
    isPaused.value = false
  }
})

let timer: NodeJS.Timeout

const tick = () => {
  clearTimeout(timer)
  if (!isPlaying.value || isSliderOverride.value) return
  // console.log('tick', frame.value)
  const fromZero = frame.value == 0
  frame.value += direction.value
  const pause = !fromZero && frame.value == 1 || direction.value == 1 && frame.value == props.nFrame
  const delay = pause ? 1000 : 1000 / props.frameRate
  if (props.pauseAtBoundary && pause) {
    isPaused.value = true
  }

  if (frame.value < 2) {
    direction.value = 1
    timer = setTimeout(tick, delay)
  } else if (frame.value >= props.nFrame) {
    direction.value = -1
    timer = setTimeout(tick, delay)
  } else {
    timer = setTimeout(tick, delay)
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
    frame.value = Number(props.initFrame ?? 1)
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

// watchImmediate(imgSrc, (val) => {
//   console.log('imgSrc', val)
// })


const frameIndices = computed(() => Array.from({length: props.nFrame + 1}, (_, i) => i))

</script>

<template>
<div class="curve-video-container" w-full>
  <img 
    v-for="i in frameIndices"
    :key="i"
    :src="`./${props.path}/${i}.svg`"
    v-show="frame === i"
    flex-1 max-h-full w-full object-contain
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
