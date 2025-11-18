<template>
  <div>
    {{ $frontmatter.date || new Date().toISOString().split('T')[0] }}
  </div>
</template>