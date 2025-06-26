<script setup lang="ts">
import Example from '~/app/shared/components/example.vue'

useHead({
  title: 'index page',
  meta: [{ name: 'description', content: 'My index page.' }],
})
</script>

<template>
  <h1>Base application index page.</h1>
  <p>Go to categories page to check functionality.</p>
  <example />
</template>
