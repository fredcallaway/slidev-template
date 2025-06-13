<script setup lang="js">

// this assumes canvasWidth: 1600 and p-5 on the top layout div
const gx = 15
const gy = 8

</script>

<template>
  <div class="absolute inset-0 z10 pointer-events-none">
    <div class="grid h-full w-full" 
      :style="{ 
        gridTemplateColumns: `repeat(${gx}, 1fr)`,
        gridTemplateRows: `repeat(${gy}, 1fr)` 
      }">
      <div v-for="n in gx * gy" :key="n" 
        :class="[
          'border-t border-l border-gray-800 op20',
          { 'border-r': (n - 1) % gx === gx - 1 },
          { 'border-b': Math.floor((n - 1) / gx) === gy - 1 }
      ]"> </div>
  </div>
</div>
</template>