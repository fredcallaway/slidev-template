<script setup>
import { useSlots } from 'vue';
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

const slots = useSlots();

</script>

<template>
<div flex flex-wrap justify-center :h="h" :w="w">
<img :src="src" object-contain />
<div v-if="slots.default" text-sm>
  <slot name="default" />
</div>
</div>
</template>