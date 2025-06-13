<script setup lang="js">


// 15 columns and 8 rows assumes canvasWidth: 1600 and p-5 on the top layout div

const props = defineProps({
  major: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'gray'
  }
})
</script>

<template>
  <div class="absolute inset-0 z10 pointer-events-none">
    <div class="relative h-80 w-150">
      <!-- Vertical lines -->
      <div v-for="i in 16" :key="`v-${i}`"
        class="absolute top-0 bottom-0"
        :class="[
          major && (i === 6 || i === 11) ? `bg-${color} op30 w-2px` : `bg-${color} op-15 w-px`
        ]"
        :style="{ left: `${((i - 1) / 15) * 100}%` }">
      </div>
      
      <!-- Horizontal lines -->
      <div v-for="i in 9" :key="`h-${i}`"
        class="absolute left-0 right-0"
        :class="[
          major && i === 5 ? `bg-${color} op30 h-2px` : `bg-${color} op-15 h-px`
        ]"
        :style="{ top: `${((i - 1) / 8) * 100}%` }">
      </div>
    </div>
  </div>
</template>