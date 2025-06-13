<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  h: {
    type: String,
    default: 'full',
  },
  w: {
    type: String,
    default: 'full',
  },
});
</script>

<template>
<div flex justify-center :h="h" :w="w">
<img :src="src" object-contain />
</div>
</template>