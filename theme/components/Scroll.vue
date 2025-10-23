<!-- adapted from https://github.com/Smile-SA/slidev-component-scroll -->
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useNav } from '@slidev/client'
import { useScrollHandler } from '../composables/useScrollHandler'

const { isPrintMode, next, prev } = useNav()
  
const scrollableOverflow = ["auto", "scroll", "overlay"];

const handler = useScrollHandler((direction) => {
  if (direction > 0) {
    next();
  } else {
    prev();
  }
})

// function onWheel(event: WheelEvent) {
//   if (isPrintMode.value) {
//     return;
//   }

//   let element: HTMLElement | null = event.target as HTMLElement;
//   let scrollable = false;
//   do {
//     scrollable =
//       element.scrollHeight > element.clientHeight &&
//       scrollableOverflow.includes(window.getComputedStyle(element).overflowY);
//     element = element.parentElement;
//   } while (!scrollable && element);

//   if (!scrollable) {
//     if (event.deltaY > 0) {
//       next();
//     } else {
//       prev();
//     }
//   }
// }

onMounted(() => window.addEventListener("wheel", handler, { passive: true }));

onUnmounted(() => window.removeEventListener("wheel", handler));
</script>

<template></template>