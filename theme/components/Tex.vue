<script setup lang="ts">
import { ref, onMounted, watch, useSlots } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface Props {
  tex?: string
  inline?: boolean
  throwOnError?: boolean
}


const props = withDefaults(defineProps<Props>(), {
  inline: false,
  throwOnError: false
})

const tex = props.tex || useSlots().default?.()[0]?.children?.toString()
if (!tex) {
  console.error('Tex component must have a tex prop or a default slot')
}



const mathRef = ref<HTMLElement>()

const renderMath = () => {
  if (!mathRef.value) return
  
  try {
    katex.render(tex, mathRef.value, {
      displayMode: !props.inline,
      throwOnError: props.throwOnError,
      trust: true,
      strict: false
    })
  } catch (error) {
    console.error('KaTeX rendering error:', error)
    if (mathRef.value) {
      mathRef.value.textContent = tex
    }
  }
}

onMounted(() => {
  renderMath()
})

watch(() => tex, () => {
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

.math-container :deep(.katex-display) {
  margin: 0pt;
}

.math-container :deep(.katex-display > .katex) {
  text-align: left;
}
</style>
