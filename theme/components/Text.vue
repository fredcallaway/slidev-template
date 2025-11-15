<script setup lang="ts">
import { computed, useAttrs } from 'vue'


const props = defineProps<{
  txt: string
}>()

</script>

<template>
  <AutoFitText :max=1000 line-height-none flex-center :modelValue="txt" />
</template>

<style scoped>
.slidev-auto-fit-text {
  overflow-y: clip;
}
</style>