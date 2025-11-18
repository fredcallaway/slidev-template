<script setup lang="ts">
import Outline from './Outline.vue'
import Switch from './Switch.vue'

const props = defineProps<{
  at: number | string
  from?: number | string
}>()

const toIdx = Number(props.at)
const fromIdx = Number(props.from ?? toIdx - 1)
</script>

<template>
  <Switch>
    <Outline :at=fromIdx />
    <Outline :at=toIdx />
  </Switch>
</template>