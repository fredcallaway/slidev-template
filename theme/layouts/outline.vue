<script setup lang="ts">

// defineProps<{
//   name: string
// }>()

</script>

<template>
<div class="outline-container">
  <h1>Outline</h1>
  <slot name="default" />
</div>
</template>

<style>

.outline-container ul, ol {
  @apply flex flex-col justify-between h-60 w-150 text-xl;
}

</style>