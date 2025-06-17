<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'white',
  },
})

</script>

<template>
  <div class="slidev-layout cover grid h-full w-full place-items-center px-10">
    <div class="text-center text-xl font-light">
      <slot />
      <div text-gray text-sm>
        {{ $frontmatter.date || new Date().toISOString().split('T')[0] }}
      </div>
    </div>
  </div>
</template>

<style>

.cover {
  
  * {
    /* @apply text-gray-300; */
    font-weight: 200;
  }

  h1 {
    color: black;
    font-size: 2.5rem;
    font-weight: 200;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>