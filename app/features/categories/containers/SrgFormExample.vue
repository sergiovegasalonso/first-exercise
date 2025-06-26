<script setup lang="ts">
import SrgButton from '~/app/shared/components/buttons/srg-button/SrgButton.vue'
import SrgTextInput from '~/app/shared/components/inputs/srg-text-input/SrgTextInput.vue'
import SrgNumberInput from '~/app/shared/components/inputs/srg-number-input/SrgNumberInput.vue'

type InputConfiguration = {
  type: string
  label: string
  formDataName: string
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

const formConfiguration: InputConfiguration[] = [
  {
    type: 'text',
    label: 'Id',
    formDataName: 'id',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Label',
    formDataName: 'label',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Brewery Type',
    formDataName: 'brewery_type',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Address 1',
    formDataName: 'address_1',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Address 2',
    formDataName: 'address_2',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Address 3',
    formDataName: 'address_3',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'City',
    formDataName: 'city',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'State Province',
    formDataName: 'state_province',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Postal Code',
    formDataName: 'postal_code',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Country',
    formDataName: 'country',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'number',
    label: 'Longitude',
    formDataName: 'longitude',
    min: 1,
    max: 15,
  },
  {
    type: 'number',
    label: 'Latitude',
    formDataName: 'latitude',
    min: 1,
    max: 15,
  },
  {
    type: 'text',
    label: 'Phone',
    formDataName: 'phone',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'WebsiteUrl',
    formDataName: 'website_url',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'State',
    formDataName: 'state',
    minLength: 1,
    maxLength: 15,
  },
  {
    type: 'text',
    label: 'Street',
    formDataName: 'street',
    minLength: 1,
    maxLength: 15,
  },
]

type FormData = {
  [key: string]: string | number | undefined
  id: string
  name: string
  brewery_type: string
  address_1: string
  address_2: string
  address_3: string
  city: string
  state_province: string
  postal_code: string
  country: string
  longitude: number
  latitude: number
  phone: string
  website_url: string
  state: string
  street: string
}

function submit() {
  console.log(formData.value)
}

const { data } = await useFetch<FormData>(
  'https://api.openbrewerydb.org/v1/breweries/b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0',
  {
    credentials: 'omit',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64; rv:139.0) Gecko/20100101 Firefox/139.0',
      Accept: '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'Sec-GPC': '1',
      Priority: 'u=0',
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
    },
    referrer: 'https://www.openbrewerydb.org/',
    method: 'GET',
    mode: 'cors',
  }
)
const formData = ref<FormData>(data.value ?? ({} as FormData))
</script>

<template>
  <form class="form">
    <template
      v-for="(inputConfiguration, index) in formConfiguration"
      :key="index"
    >
      <srg-text-input
        v-if="inputConfiguration.type === 'text'"
        v-model="
          formData[inputConfiguration.formDataName] as string | undefined
        "
        :label="inputConfiguration.label"
        :min-length="inputConfiguration.minLength ?? -99999"
        :max-length="inputConfiguration.maxLength ?? 99999"
      />
      <srg-number-input
        v-else-if="inputConfiguration.type === 'number'"
        v-model="
          formData[inputConfiguration.formDataName] as number | undefined
        "
        :label="inputConfiguration.label"
        :min="inputConfiguration.min ?? -99999"
        :max="inputConfiguration.max ?? 99999"
      />
      <div v-else>Error: input type is not defined!!</div>
      <br />
    </template>
    <br />
    <srg-button text="Submit" @click.prevent="submit" />
  </form>
</template>

<style scoped>
.form {
  display: block;
}
</style>
