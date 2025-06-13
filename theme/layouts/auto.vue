<script setup lang="js">
import { ref, computed, onMounted, onUpdated, nextTick, useSlots } from 'vue';

const contentWrapper = ref(null);
const containerHeight = ref(0);
const contentScrollHeight = ref(0);

const measureContent = () => {
  if (contentWrapper.value) {
    containerHeight.value = contentWrapper.value.clientHeight;
    // Temporarily remove column styling to get accurate scrollHeight for single column flow
    const originalColumnCount = contentWrapper.value.style.columnCount;
    contentWrapper.value.style.columnCount = 'auto';

    contentScrollHeight.value = contentWrapper.value.scrollHeight;
    
    // Restore column styling if it was present
    contentWrapper.value.style.columnCount = originalColumnCount;
  }
};

// Computed property to determine if columns are needed
const needsColumns = computed(() => {
  // Add a small buffer (e.g., 10px) to prevent toggling due to minor rounding issues
  return contentScrollHeight.value > containerHeight.value + 10 && containerHeight.value > 0;
});

let resizeObserver;

onMounted(() => {
  nextTick(measureContent);
  resizeObserver = new ResizeObserver(() => {
    measureContent();
  });
  if (contentWrapper.value) {
    resizeObserver.observe(contentWrapper.value);
    // Also observe direct children of the slot for content changes
    // This is a bit of a hack; MutationObserver on contentWrapper itself might be better for deeper changes
    Array.from(contentWrapper.value.children).forEach(child => {
      resizeObserver.observe(child);
    });
  }
});

onUpdated(() => {
  nextTick(measureContent);
  // Re-observe children if slot content changes significantly (e.g. new elements)
  if (contentWrapper.value && resizeObserver) {
    Array.from(contentWrapper.value.children).forEach(child => {
      resizeObserver.observe(child);
    });
  }
});

// Clean up observer
import { onUnmounted } from 'vue';
onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});

const slots = useSlots();

</script>

<template>
  <div class="slidev-layout p-5">
    <div 
      ref="contentWrapper"
      class="auto-layout-container"
      :class="{ 'multi-column': needsColumns }"
    >
      <slot />
    </div>

    <div v-if="slots.cite" class="absolute bottom-2 left-2 text-s fw-light text-gray-500 opacity-50">
      <slot name="cite" />
    </div>

    <div v-if="slots.flex" class="flex gap-5 w-full *:flex-shrink-0  min-h-0 overflow-hidden *:basis-60">
      <slot name="flex" />
    </div>

  </div>
</template>

<style>
.auto-layout-container {
  display: block; /* Changed from flex to block for better column behavior */
  overflow: hidden; /* Prevent scrollbars, rely on columns */
  height: 100%; 
  width: 100%; /* Ensure it takes full width */
}

.auto-layout-container.multi-column {
  column-count: 2;
  column-gap: 2rem; /* Adjust gap as needed */
  /* In some cases, you might want to ensure content breaks nicely */
  /* break-inside: avoid-column; might be useful on child elements */
}

/* Target direct children of slot for column break avoidance (optional, adjust selector as needed) */
.auto-layout-container.multi-column ::v-deep(> *) {
   break-inside: avoid-column;
}

.auto-layout-container ::v-deep(img) {
  max-width: 100%;
  height: auto;
  display: block; 
  margin-top: 0.5rem; 
  margin-bottom: 0.5rem; 
  break-inside: avoid; /* Prevent images from breaking across columns */
}

/* Styles for when NOT in multi-column, if needed */
.auto-layout-container:not(.multi-column) {
  overflow-y: auto; /* Fallback to scroll if not using columns and content overflows */
}
</style>