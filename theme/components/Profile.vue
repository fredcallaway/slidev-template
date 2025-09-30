<script setup lang="ts">

const props = defineProps<{
  name: string
  src: string
}>()

</script>

<template>
  <div r-3 t-3 text-center z-1>
    <!-- <div w15 h18 bg-gray mx-auto/> -->
    <img :src="src" w15 h18 mx-auto/>
    <div text-sm>{{ name }}</div>
  </div>
</template>