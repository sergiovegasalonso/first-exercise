<script setup lang="ts">
defineProps<{
  label: string
  minLength: number
  maxLength: number
}>()

defineEmits<{
  (e: 'onInput', inputValue: string): void
}>()

const inputValue = ref<string>('')
</script>

<template>
  <div>
    <label for="text-input">{{ label }}</label>
    <br />
    <input
      id="text-input"
      v-model="inputValue"
      :placeholder="label"
      :minlength="minLength"
      :maxlength="maxLength"
      @input="$emit('onInput', inputValue)"
    />
  </div>
</template>

<style scoped>
label {
  display: block;
}
</style>
