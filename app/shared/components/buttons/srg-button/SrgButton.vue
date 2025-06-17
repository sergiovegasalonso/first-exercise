<script setup lang="ts">
defineProps<{
  text: string
}>()

defineEmits<{
  (e: 'onClick'): void
}>()
</script>

<template>
  <div>
    <button @click="$emit('onClick')">{{ text }}</button>
  </div>
</template>

<style scoped>
button {
  background-color: var(--button-background-color);
  border: 2px solid var(--border-color);
  color: var(--button-text-color);
  padding: 1rem 1.5rem;
  text-align: center;
  cursor: pointer;
}
</style>
