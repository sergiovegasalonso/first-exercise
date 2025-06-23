<script setup lang="ts">
import SrgCategoryPathFinder from '~/app/shared/components/srg-category-path-finder/SrgCategoryPathFinder.vue'

useHead({
  title: 'categories index page',
  meta: [{ name: 'description', content: 'My categories index page.' }],
})
</script>

<template>
  <h1>Categories index page.</h1>
  <srg-category-path-finder />
</template>
