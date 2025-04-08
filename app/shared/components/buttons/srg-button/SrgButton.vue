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
