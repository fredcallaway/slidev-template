<!-- adapted from https://github.com/Smile-SA/slidev-component-scroll -->
<script setup lang="ts">
import { useNav } from '@slidev/client'
import { useScrollHandler } from '../composables/useScrollHandler'
import { useEventListener } from '@vueuse/core'

const { isPrintMode, next, prev } = useNav()
  
const scrollableOverflow = ["auto", "scroll", "overlay"];

const handler = useScrollHandler((direction) => {
  if (direction > 0) {
    next();
  } else {
    prev();
  }
}, {
  guard: (event) => {
    let element: HTMLElement | null = event.target as HTMLElement;
    let scrollable = false;
    do {
      scrollable =
        element.scrollHeight > element.clientHeight &&
        scrollableOverflow.includes(window.getComputedStyle(element).overflowY);
      element = element.parentElement;
    } while (!scrollable && element); 
    return !scrollable
  }
})

useEventListener("wheel", handler)

</script>

<template></template>