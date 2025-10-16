<script setup lang="ts">


// 15 columns and 8 rows assumes canvasWidth: 1600 and p-5 on the top layout div

withDefaults(defineProps<{
  major?: boolean
  labels?: 'inner' | 'outer' | 'none'
}>(), {
  major: true,
  labels: 'outer'
})

</script>

<template>
  <div class="absolute inset-0 z10 pointer-events-none">
    <div class="relative h-80 w-150">
      <!-- Vertical lines -->
      <div v-for="i in 16" :key="`v-${i}`"
        class="absolute top-0 bottom-0"
        :class="[
          major && (i === 6 || i === 11) ? `bg-gray op30 w-3px` : `bg-gray op-15 w-2px`
        ]"
        :style="{ left: `${((i - 1) / 15) * 100}%` }">
      </div>
      
      <!-- Horizontal lines -->
      <div v-for="i in 9" :key="`h-${i}`"
        class="absolute left-0 right-0"
        :class="[
          major && i === 5 ? `bg-gray op30 h-3px` : `bg-gray op-15 h-2px`
        ]"
        :style="{ top: `${((i - 1) / 8) * 100}%` }">
      </div>

      <!-- Inner cell labels -->
      <template v-if="labels === 'inner'">
        <div v-for="row in 8" :key="`row-${row}`">
          <div v-for="col in 15" :key="`cell-${col}-${row}`"
            class="absolute text-12pt text-gray pointer-events-none"
            :style="{ 
              left: `${((col - 1) / 15) * 100}%`, 
              top: `${((row - 1) / 8) * 100}%`,
              transform: 'translate(2px, 2px)'
            }">
            {{ col - 1 }} {{ row - 1 }}
          </div>
        </div>
      </template>

      <!-- Outer edge labels (chess board style) -->
      <template v-if="labels === 'outer'">
        <!-- Top edge column numbers -->
        <div v-for="col in 16" :key="`top-${col}`"
          class="absolute text-12pt text-gray pointer-events-none"
          :style="{ 
            left: `${((col - 1) / 15) * 100}%`, 
            top: '-30px',
            transform: 'translateX(-70%)'
          }">
          {{ col - 1 }}
        </div>
        
        <!-- Bottom edge column numbers -->
        <div v-for="col in 16" :key="`bottom-${col}`"
          class="absolute text-12pt text-gray pointer-events-none"
          :style="{ 
            left: `${((col - 1) / 15) * 100}%`, 
            bottom: '-30px',
            transform: 'translateX(-70%)'
          }">
          {{ col - 1 }}
        </div>
        
        <!-- Left edge row numbers -->
        <div v-for="row in 9" :key="`left-${row}`"
          class="absolute text-12pt text-gray pointer-events-none"
          :style="{ 
            left: '-20px', 
            top: `${((row - 1) / 8) * 100}%`,
            transform: 'translateY(-50%)'
          }">
          {{ row - 1 }}
        </div>
        
        <!-- Right edge row numbers -->
        <div v-for="row in 9" :key="`right-${row}`"
          class="absolute text-12pt text-gray pointer-events-none"
          :style="{ 
            right: '-20px', 
            top: `${((row - 1) / 8) * 100}%`,
            transform: 'translateY(-50%)'
          }">
          {{ row - 1 }}
        </div>
      </template>
    </div>
  </div>
</template>