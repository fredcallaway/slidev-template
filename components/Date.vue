<template>
  <div text-center text-gray-400 fw-200>
    {{ $frontmatter.date || new Date().toISOString().split('T')[0] }}
  </div>
</template>