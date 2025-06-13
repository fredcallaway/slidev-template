<script setup lang="js">
import { computed, useSlots } from 'vue'

const slots = useSlots()

const props = defineProps({
  align: {
    default: 'left',
    validator: (value) => ['left', 'center', 'right', 'top', 'bottom'].includes(value)
  },
  color: {
    default: 'white',
  },
  frontmatter: {
    default: {},
  },
})

</script>

<template>
  <div class="slidev-layout p-5 flex flex-col h-full w-full">
    <!-- Background slot -->
    <div v-if="slots.background" class="fixed inset-0 w-full h-full -z-1">
      <slot name="background" />
    </div>

    <div class="w-full">
      <slot name="default" />
    </div>
    
    <!-- Flex slot -->
    <div v-if="slots.flex" class="flex gap-5 w-full *:flex-shrink-0  min-h-0 overflow-hidden *:basis-60 border-2">
      <slot name="flex" />
    </div>

    <!-- Bottom slot -->
    <div v-if="slots.bottom" class="w-full text-center my-auto">
      <slot name="bottom" />
    </div>

    <!-- Citation slot -->
    <div v-if="slots.cite" class="absolute bottom-2 left-2 text-s fw-light text-gray-500 opacity-50">
      <slot name="cite" />
    </div>
  </div>
</template>

