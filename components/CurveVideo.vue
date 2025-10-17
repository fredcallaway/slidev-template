<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onSlideLeave, useIsSlideActive } from '@slidev/client'
import { whenever } from '@vueuse/core'

const isActive = useIsSlideActive()

const nFrame = 49
const frameRate = 25

const frame = ref(1)
const direction = ref(1)

let timer: NodeJS.Timeout

const tick = () => {
  if (!isActive.value) return
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
<img :src="`/fig/curves/${frame}.svg`" />
</template>
