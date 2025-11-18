<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import MarkdownIt from 'markdown-it';
import { computed } from 'vue'

interface Props {
  at?: number | string
  click?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  at: 0,
  click: false
})
const atIdx = Number(props.at) - 1

const { $slidev } = useSlideContext()
// @ts-ignore
const outlineMd = $slidev.configs.outline // ASSUME: markdown list

// Extract list items from markdown
const listItems = computed(() => {
  const md = new MarkdownIt({ html: true })
  const rendered = md.render(outlineMd)
  
  // Create a temporary div to parse the HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = rendered
  
  // Extract all list items
  const items = Array.from(tempDiv.querySelectorAll('li')).map((item, index) => ({
    text: item.textContent || '',
    isHighlighted: index === atIdx,
    isFaded: index !== atIdx && atIdx >= 0
  }))
  
  return items
})

</script>

<template>
<div class="outline-container">
  <h1>Outline</h1>
  <ul>
    <li 
      v-for="(item, index) in listItems" 
      :key="index"
      v-click="props.click"
      :class="{ 
        'highlight': item.isHighlighted, 
        'fade': item.isFaded 
      }"
    >
      {{ item.text }}
    </li>
  </ul>
</div>
</template>

<style>

.outline-container h1 {
  @apply text-3xl
}

.outline-container ul, ol {
  @apply flex flex-col justify-between w-150 text-xl t20 l0 gap-5;
}

.outline-container li.fade {
  @apply text-gray-300;
}

.outline-container li.highlight {
  @apply text-black;
}

</style>