<script setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
const title = Object.keys(attrs).join(' ')
</script>

<template>
<div class="-t5 -l5 h90 w160 flex flex-row justify-between">
  <div class="h-full bg-primary flex flex-col justify-center p3 text-4xl font-bold text-white w-60">
    {{ title }}
  </div>
  <div w-100 p-5 h-full flex flex-col justify-center items-center>
    <slot/>
  </div>
</div>
</template>
