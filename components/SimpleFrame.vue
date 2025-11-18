<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNav } from '@slidev/client'
import { whenever } from '@vueuse/core'

// const { clicks } = useNav()

// whenever(() => clicks.value > 0, () => {
//   shown.value = true
// })

const shown = ref(false)

defineProps<{
  src: string
  scrolling?: string
  width?: string | number
  height?: string | number
}>()

defineOptions({
  inheritAttrs: false
})

</script>

<template>
  <button v-if="!shown" @click="shown = true"
    bg-blue text-white px-2 rounded-md pointer hover:bg-blue2
    translate-y--5
  >start</button>
  <iframe v-else
    v-bind="$attrs"
    :src="src"
    :scrolling="scrolling || 'no'"
    :width="width ?? '1300'"
    :height="height ?? '800'"
  />
</template>
