<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

import MarkdownIt from 'markdown-it';
import { computed } from 'vue'

interface Props {
  question?: number | string
  answer?: number | string
  highlight?: number | string
}

const props = defineProps<Props>()

const md = new MarkdownIt({ html: true })

const { $slidev } = useSlideContext()

// @ts-ignore
const data = $slidev.configs.outline as string
const parsed = data.split('\n\n').map(qa => {
  const [q, a] = qa.split('\n', 2)
  return {
    question: md.render(q.trim()),
    answer: md.render(a.trim())
  }
})

const qMax = computed(() => props.question !== undefined ? Number(props.question) : parsed.length)

const aMax = computed(() => props.answer !== undefined ? Number(props.answer) : parsed.length)

const shouldFade = (i: number) => props.highlight ? (i+1) !== Number(props.highlight) : false

</script>

<template>
<div >
  <h1>Three Questions</h1>

  <div grid grid-cols-1 gap-4 justify-between h-60 w150>
    <div v-for="(x, i) in parsed" :class="{ 'opacity-30': shouldFade(i) }" h18 >
      <div italic text-xl fw-light v-html=x.question v-show="i < qMax" />
      <div ml3 mt1 v-show="i < aMax" flex flex-row>
        <div>→</div>
        <div mt0.5 ml1 v-html=x.answer />
      </div>
    </div>
  </div>
</div>
</template>