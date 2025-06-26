<script setup lang="ts">
import SrgButton from '~/app/shared/components/buttons/srg-button/SrgButton.vue'
import SrgTextInput from '~/app/shared/components/inputs/srg-text-input/SrgTextInput.vue'
import { getCategoryPath } from '~/app/features/categories/services/get-category-path/get-category-path'

const textInputLabel = 'Get Category Path'
const textInputMinLenght = 1
const textInputMaxLenght = 10

const categoryToFind = ref<string>('')
const categoryPathResult = ref<string | undefined>()

async function submit() {
  if (!categoryToFind.value) {
    alert('Category cannot be empty')
    return
  }
  const response = await getCategoryPath(categoryToFind.value)
  categoryPathResult.value = response?.result
}
</script>

<template>
  <form>
    <srg-text-input
      v-model="categoryToFind"
      :label="textInputLabel"
      :min-length="textInputMinLenght"
      :max-length="textInputMaxLenght"
    />
    <br />
    <srg-button text="Submit" @click.prevent="submit" />
    <br />
    <div v-if="categoryPathResult">
      {{ categoryPathResult }}
    </div>
  </form>
</template>
