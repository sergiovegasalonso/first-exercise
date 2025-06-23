<script setup lang="ts">
defineProps<{
  label: string
  minLength: number
  maxLength: number
}>()

const inputValue = defineModel<string>()
</script>

<template>
  <div>
    <label for="text-input">{{ label }}</label>
    <br />
    <input
      id="text-input"
      v-model="inputValue"
      type="text"
      :placeholder="label"
      :minlength="minLength"
      :maxlength="maxLength"
    />
  </div>
</template>

<style scoped>
label {
  display: block;
}
</style>
