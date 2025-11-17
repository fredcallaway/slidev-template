<script setup lang="js">
import { computed, useSlots, nextTick, ref, onMounted } from 'vue'

const props = defineProps({
  align: {
    default: 'left',
    validator: (value) => ['left', 'center', 'right', 'top', 'bottom'].includes(value)
  },
  color: {
    default: 'white',
  },
  frontmatter: {
    default: {},
  },
  pad: {
    default: 5  // in spacing units (like p-5)
  }
})

const firstTag = computed(() => {
  const rawChildren = slots.default?.()
  if (!rawChildren) return ''
  const firstChild = rawChildren.find((child) => {
    return child.type !== Comment
  })
  return firstChild.type
})

const slots = useSlots()

</script>

<template>
<div :style="{ padding: `${props.pad * 0.25}rem` }">

  <div class="slidev-layout relative">

    <!-- click-based nav for iframe safety -->
    <div l150 fixed w-5 h-100 z-100 @click="$slidev.nav.next()" />
    <div inset-0 fixed w-5 h-100 z-100 @click="$slidev.nav.prev()" />

    <GridLines v-if="$slidev.configs.grid" />

    <!-- left right layout -->
    <div v-if="slots.right" class="h-full flex justify-between">
      <div class="min-w-60">
        <slot name="default" />
      </div>

      <div class="flex flex-col h-70 min-w-60">
        <slot name="right" />
      </div>
    </div>

    <!-- section layout (if h2, h3 is first) -->
    <div v-else-if="firstTag === 'h2'" class="section-divider">
      <slot name="default" />
    </div>    
    <!-- section layout (if h2, h3 is first) -->
    <div v-else-if="firstTag === 'h3'" class="section-divider" bg-black text-white>
      <slot name="default" />
    </div>    

    <!-- Default layout -->
    <template v-else>
      <!-- Always leave room for the title; we pull it out of default slot  -->
      <div class="h-10"></div>

      <!-- Main slot is a flex-wrap -->
      <div class="default-layout h-70">
        <div class="w-full h-full flex flex-wrap gap-3 min-h-0 overflow-visible items-center justify-evenly">
          <slot name="default" />
        </div>
      </div>
    </template>

    <div v-if="slots.background" class="fixed inset-0 w-full h-full -z-1">
      <slot name="background" />
    </div>

    <div v-if="slots.overlay" class="fixed inset-0 w-full h-full z-10">
      <slot name="overlay" />
    </div>
    
    <!-- Bottom slot -->
    <div v-if="slots.bottom" class="b0 w-full text-center my-auto">
      <slot name="bottom" />
    </div>

    <!-- Top slot -->
    <div v-if="slots.top" class="t10 w-full text-center my-auto">
      <slot name="top" />
    </div>

    <!-- Citation slot -->
    <div v-if="slots.cite" class="absolute -b3 -l3 cite">
      <slot name="cite" />
    </div>
    
    <!-- Citation slot -->
    <div v-if="slots.rcite" class="absolute -b3 -r3 cite">
      <slot name="rcite" />
    </div>

  </div>
</div>

</template>

<style>

.section-divider {
  @apply fixed inset-0 h-full w-full flex flex-col items-center justify-center p-10
}
.section-divider h2 {
  margin-bottom: 0 !important;
}
.section-divider h3 {
  font-weight: 300;
  @apply italic;
}
.default-layout  h1 {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
}
.default-layout {
  @apply flex flex-col
}

.default-layout ul, ol {
  @apply w-full
}

.default-layout img:not([class*="object-"]) {
  /* max-width: 100%; */
  /* height: auto; */
  /* display: block; */
  @apply flex-1 max-h-full max-w-full;
  object-fit: contain
}

.default-layout img.flex-fixed {
  @apply flex-shrink-0 flex-grow-0
}

/* .default-layout ol, ul {
  height: 700px;
} */
</style>