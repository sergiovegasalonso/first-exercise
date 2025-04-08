<script setup lang="ts">
import SrgButton from '../../components/buttons/srg-button/SrgButton.vue'
import SrgTextInput from '../../components/inputs/srg-text-input/SrgTextInput.vue'
import { getCategoryPath } from '../../services/get-category-path/get-category-path'

const textInputLabel = 'Get Category Path'
const textInputMinLenght = 1
const textInputMaxLenght = 10

const categoryToFind = ref<string>('')

function handleOnTextInputChange(value: string): void {
  categoryToFind.value = value
}

async function handleOnButtonClick() {
  if (!categoryToFind.value) {
    alert('Category cannot be empty')
  }
  const response = await getCategoryPath(categoryToFind.value)
  console.log(response)
}
</script>

<template>
  <div>
    <srg-text-input
      :label="textInputLabel"
      :min-length="textInputMinLenght"
      :max-length="textInputMaxLenght"
      @on-input="handleOnTextInputChange"
    />
    <srg-button text="Submit" @on-click="handleOnButtonClick" />
  </div>
</template>
