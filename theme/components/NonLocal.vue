<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isNotLocalhost = ref(false)

defineProps<{
  force?: boolean
}>()

onMounted(() => {
  const hostname = window.location.hostname
  isNotLocalhost.value = hostname !== 'localhost' && hostname !== '127.0.0.1'
})
</script>

<template>
  <div v-if="isNotLocalhost || force">
    <slot />
  </div>
</template>
