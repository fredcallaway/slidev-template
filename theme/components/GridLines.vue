<script setup lang="js">


// 15 and 8 assumes canvasWidth: 1600 and p-5 on the top layout div

</script>

<template>
  <div class="absolute inset-0 z10 pointer-events-none">
    <div class="grid h-80 w-150"
      :style="{ 
        gridTemplateColumns: `repeat(15, 1fr)`,
        gridTemplateRows: `repeat(8, 1fr)` 
      }">
      <div v-for="n in 15 * 8" :key="n" 
        :class="[
          'border-t border-l border-gray-800 op20',
          { 'border-r': (n - 1) % 15 === 15 - 1 },
          { 'border-b': Math.floor((n - 1) / 15) === 8 - 1 }
      ]">
      </div>
  </div>
</div>
</template>