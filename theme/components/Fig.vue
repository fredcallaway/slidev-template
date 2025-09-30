<script setup>
import { useSlots } from 'vue';
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
});

const slots = useSlots();

</script>

<template>
<div flex flex-col justify-center items-center class="fig-container">
  <span v-if="label" font-bold mb-1> {{  label }} </span>
  <slot />
</div>
</template>

<style>
.fig-container img {
  @apply object-contain;
}
</style>