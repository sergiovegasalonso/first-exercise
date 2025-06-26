<script setup lang="ts">
defineProps<{
  label: string
  min: number
  max: number
}>()

const inputValue = defineModel<number>()
</script>

<template>
  <div>
    <label for="text-input">{{ label }}</label>
    <br />

    <input
      v-model="inputValue"
      type="number"
      :min="min"
      :max="max"
      :aria-label="label"
    />
  </div>
</template>

<style scoped>
label {
  display: block;
}
</style>
