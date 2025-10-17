<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface Props {
  tex: string
  inline?: boolean
  throwOnError?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  inline: false,
  throwOnError: false
})

const mathRef = ref<HTMLElement>()

const renderMath = () => {
  if (!mathRef.value) return
  
  try {
    katex.render(props.tex, mathRef.value, {
      displayMode: !props.inline,
      throwOnError: props.throwOnError,
      trust: true,
      strict: false
    })
  } catch (error) {
    console.error('KaTeX rendering error:', error)
    if (mathRef.value) {
      mathRef.value.textContent = props.tex
    }
  }
}

onMounted(() => {
  renderMath()
})

watch(() => props.tex, () => {
  renderMath()
})

watch(() => props.inline, () => {
  renderMath()
})
</script>

<template>
  <span ref="mathRef" class="math-container"></span>
</template>

<style scoped>
.math-container {
  display: inline-block;
}
</style>
