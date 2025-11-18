<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = defineProps({
  color: {
    default: 'white',
  },
})

const slots = useSlots()

</script>

<template>
  <div class="slidev-layout cover">
    <div text-center text-xl  mt-60 h-20 text-gray-400 fw-200>
    <slot />
    </div>
  </div>
</template>

<style>

.cover {

  h1 {
    color: black;
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: absolute;
    top: 270px;
    left: 0px;
    width: 100%;
    padding: 1rem;
    z-index: 100;
  }
}
</style>
