<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>

  <div px-2 flex-center bg-white border="~ black 6 solid" shadow-xl text-center font-500  >
    <div v-if="label" v-html="label" />
    <div v-else>
      <slot />
    </div>
  </div>
  

</template>
