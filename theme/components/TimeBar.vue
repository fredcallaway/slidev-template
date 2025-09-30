<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAnimate, whenever } from '@vueuse/core'
import { onSlideLeave, useNav, useIsSlideActive } from '@slidev/client'

const { nextSlide } = useNav()
const isActive = useIsSlideActive()

const props = defineProps<{
  duration: number
}>()

const target = ref<HTMLElement>()
const isAnimating = ref(false)

const { play, cancel } = useAnimate(target,
  [
    { width: '12.5rem' },
    { width: '0rem' }
  ],
  {
    duration: props.duration,
    easing: 'linear',
    immediate: false,
    fill: 'forwards',
    onReady: (animation) => {
      animation.addEventListener('finish', () => {
        isAnimating.value = false
        if (isActive.value) {
          nextSlide()
        }
      })
    }
  }
)

watch(isActive, (val) => {
})

// onSlideEnter is BUGGY
whenever(isActive, () => {
  // Cancel any existing animation first
  cancel()
  play()
  return
})

onSlideLeave(() => {
  isAnimating.value = false
  cancel()
})
</script>

<template>
  <div
    ref="target"
    class="absolute left-0 h-5 bg-black"
  />
</template>
