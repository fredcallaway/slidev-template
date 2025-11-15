<script setup lang="ts">
import { useSlots } from 'vue';
const props = defineProps<{
  label?: string
  caption?: string
}>();

const slots = useSlots();

</script>

<template>
<div flex flex-col justify-center items-center class="fig-container">
  <span v-if="label" font-bold mb-1> {{  label }} </span>
  <slot />
  <span v-if="caption" mt-1> {{  caption }} </span>
</div>
</template>

<style>
.fig-container img {
  @apply object-contain;
}
</style>