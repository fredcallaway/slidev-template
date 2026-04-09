<template>
  <div>
    <img 
      v-for="(outcome, idx) in allImages"
      :key="idx"
      t35 l0 w50 h50 
      :src="outcome"
      v-show="imageSrc === outcome"
    />

    <img b0 l50 w10 src='../faces/freckles.svg' />

    <div l57 b9 w30 h20 scale-x-180 transform-origin-bottom-left>
      <img src='../bubble1.svg' scale-x--100 />
    </div>

    <div flex="~ row" justify-between gap2 l62 b16>
      <div v-for="o in outcomes.slice(0, click)"
        font-bold text-sample text-xl>{{ formatOutcome(o) }}
      </div>
    </div>

    <div>
      <Pointer x=126 y=60 rot=9 length=25 width=5 />
      <Pos x=111 y=60 w=13 bg-white font-mono>mean</Pos>
      <Pos v-if="uws" x=111 y=56 w=13 font-mono text-xs>weighted</Pos>
      <div l129 t56 font-bold text-2xl>{{ meanValue }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  click: number
  outcomes: number[]
  uws?: boolean
  dist?: string
}
const props = defineProps<Props>()
const dist = props.dist || 'risky'
const click = computed(() => Math.min(Math.max(0, props.click), props.outcomes.length))

const imageSrc = computed(() => {
  if (click.value == 0) {
    return `./fig/uws/${dist}.svg`
  }
  return `./fig/uws/${dist}-${props.outcomes[click.value - 1]}.svg`
})

const meanValue = computed(() => {
  if (click.value <= 0) return ''
  
  const visibleOutcomes = props.outcomes.slice(0, click.value)

  let mean
  if (props.uws) {
    const norm = visibleOutcomes.reduce((a, b) => a + 1 / Math.abs(b), 0)
    mean = visibleOutcomes.reduce((a, b) => a + b / Math.abs(b), 0) / norm
    console.log('uws', mean, norm)
  } else {
    mean = visibleOutcomes.reduce((a, b) => a + b, 0) / click.value
  }
  return formatOutcome(Math.round((mean) * 100) / 100)
})

const formatOutcome = (outcome: number): string => {
  return outcome > 0 ? `+${outcome}` : outcome.toString()
}

const allImages = computed(() => {
  const images = [`./fig/uws/${dist}.svg`]
  props.outcomes.forEach(outcome => {
    images.push(`./fig/uws/${dist}-${outcome}.svg`)
  })
  return images
})
</script>
