<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>

  <div class="box p-2 grid grid-justify-center items-center">
    <div leading-0 v-if="label" >{{ label }}</div>
    <slot></slot>
  </div>

</template>
