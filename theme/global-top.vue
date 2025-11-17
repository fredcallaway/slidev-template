<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
const { $slidev } = useSlideContext()

// @ts-ignore
const homeLink = $slidev.configs.homeLink

</script>


<template>
  <Scroll />
  <header>
    <div absolute right-1 top-1 v-if="homeLink" >
      <a :href="homeLink">
        <material-symbols-other-houses 
          text-gray-2 
          hover:text-gray-3
        />
      </a>
    </div>
  </header>
</template>