<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<template>
<div class="flex flex-col w-80 h-80">
<img :src="src"
  class="shrink-0"
  style="width: 100%; min-height: 0; object-fit: contain;" 
/>
</div>
</template>