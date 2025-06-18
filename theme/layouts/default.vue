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
  gridlines: {
    default: false
  },
  pad: {
    default: 5  // in spacing units (like p-5)
  }
})

const gx = computed(() => {
  return Math.floor(16 - 2 * props.pad / 10)
})
const gy = computed(() => {
  return Math.floor(9 - 2 * props.pad / 10)
})


</script>

<template>
<div :style="{ padding: `${props.pad * 0.25}rem` }">

  <div class="slidev-layout relative">

    <div v-if="slots.background" class="fixed inset-0 w-full h-full -z-1">
      <slot name="background" />
    </div>

    <template v-if="slots.right">
      <div class="h-full flex justify-between">
        <div class="min-w-60">
          <slot name="default" />
        </div>

        <div class="flex flex-col h-70 min-w-60">
          <slot name="right" />
        </div>
      </div>
    </template>

      
    <!-- Always leave room for the title; we pull it out of default slot  -->
    <div class="h-10"></div>

    <!-- Main slot is a flex-wrap -->
    <div class="default-layout h-70">
      <div class="w-full h-full flex flex-wrap gap-3 min-h-0 overflow-visible items-center justify-evenly">
        <slot name="default" />
      </div>
    </div>


    <!-- Bottom slot -->
    <div v-if="slots.bottom" class="b0 w-full text-center my-auto">
      <slot name="bottom" />
    </div>

    <!-- Top slot -->
    <div v-if="slots.top" class="t10 w-full text-center my-auto">
      <slot name="top" />
    </div>

    <!-- Citation slot -->
    <div v-if="slots.cite" class="absolute -b3 -l3 text-sm fw-light text-gray-300">
      <slot name="cite" />
    </div>
  </div>
</div>

</template>

<style>
.default-layout h1 {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
}
.default-layout {
  @apply flex flex-col
}

.default-layout img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* .default-layout ol, ul {
  height: 700px;
} */
</style>