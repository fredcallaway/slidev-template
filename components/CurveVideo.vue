<script setup lang="ts">
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const props = defineProps({
  count: {
    default: 0,
  },
})

const nFrame = 49
const frameRate = 25

const frame = ref(0)
const direction = ref(1)

let timer: NodeJS.Timeout

const tick = () => {
  console.log('tick', frame.value)
  frame.value += direction.value
  if (frame.value <= 0) {
    direction.value = 1
  } else if (frame.value >= nFrame) {
    direction.value = -1
  }
  timer = setTimeout(tick, 1000 / frameRate)
}

onSlideEnter(() => {
  clearTimeout(timer)
  tick()
})

onSlideLeave(() => {
  clearTimeout(timer)
})

</script>

<template>
<SlidevVideo full autoreset="slide" :timestamp="frame / frameRate">
  <source src="/fig/curves.mp4" type="video/mp4"/>
</SlidevVideo> 
</template>
