<script setup lang="ts">
import GetCategoryPath from '~/app/features/categories/containers/get-category-path/GetCategoryPath.vue'

useHead({
  title: 'categories index page',
  meta: [{ name: 'description', content: 'My categories index page.' }],
})
</script>

<template>
  <h1>Categories index page.</h1>
  <get-category-path />
</template>
