<script setup lang="ts">
const wrapperId = 100
const htmlExample = '<strong>jjeje</strong>'
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green',
}
const date = new Date()
function toTitleDate(date: Date) {
  return date.toLocaleDateString()
}
const ifVariable = 0
const attrName = 'href'
const url = 'https://www.google.es'
const eventName = 'click'

// built-in directives
const msg = '3333'
const html = '<b>kekejej</b>'
const items = ['one', 'two', 'three']
const object = {
  one: '1',
  two: '2',
  three: '3',
}

// reactivity fundamentals
const nonReference = 0
const reference = ref(0)
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
})
const shallowReference = shallowRef({
  count: 0,
})
function shallowReferenceHandler() {
  shallowReference.value.count++
  triggerRef(shallowReference)
}

// computed
// 1. evitar mutar computados
// 2. evitar los efectos secundarios, para eso están los watchers
const referencePlusOne = computed((previous) => {
  console.log(previous)
  return reference.value + 1
})

// class and Style Bindings
const isActive = ref(true)
const hasError = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value === 'fatal',
}))

const styleObject = reactive({
  color: 'red',
  fontSize: '30px',
})

// rendering lists
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
])

function even(numbers: number[]) {
  return numbers.filter((number: number) => number % 2 === 0)
}
</script>

<template>
  <div :id="`list-${wrapperId}`" :data-id="wrapperId" class="component-wrapper">
    <div>wrapperId: {{ wrapperId }}</div>
    <div>{{ htmlExample }}</div>
    <div v-html="htmlExample"></div>
    <div v-bind="objectOfAttrs">objectOfAttrs</div>
    <div :title="toTitleDate(date)">{{ toTitleDate(date) }}</div>
    <p v-if="ifVariable === 0">Now you see me</p>
    <p v-else-if="ifVariable === 1">Now you see me</p>
    <p v-else>Now you see me</p>
    <a :href="url"> Go to Google </a>
    <a :[attrName]="url"> Go to Google </a>
    <div @click="() => console.log(':)')">Click me</div>
    <div @[eventName]="() => console.log(':)')">Click me</div>
    <form>
      <input type="submit" @click.prevent="() => console.log(':)')" />
    </form>

    <!-- built-in directives -->
    <span v-text="msg"></span>
    <!-- same as -->
    <span>{{ msg }}</span>
    <div v-html="html"></div>
    <div v-show="true">helloooo</div>
    <div v-show="false">you cannot see me</div>

    <div v-for="(item, index) in items" :key="index">
      {{ index }} -> {{ item }}
    </div>
    <div v-for="(value, key) in object" :key="key">
      {{ key }} -> {{ value }}
    </div>
    <div v-for="(value, name, index) in object" :key="index">
      {{ name }}({{ index }}) -> {{ value }}
    </div>

    <div @click="() => console.log('any mouse button clicked')">
      any mouse button
    </div>
    <div @click.left="() => console.log('left button clicked')">
      left mouse button
    </div>
    <div @click.middle="() => console.log('middle button clicked')">
      middle mouse button
    </div>
    <div @click.right="() => console.log('right button clicked')">
      right mouse button
    </div>

    <div @click="() => console.log('parent')">
      <div @click="() => console.log('child')">bubbling child to parent</div>
    </div>
    <div @click="() => console.log('parent')">
      <div @click.stop="() => console.log('child')">
        child and stop propagation
      </div>
    </div>

    <div @click.capture="() => console.log('parent')">
      <div @click.stop="() => console.log('child')">
        parent capture before child
      </div>
    </div>

    <div
      class="component-wrapper__parent"
      @click.self="() => console.log('parent')"
    >
      <div class="component-wrapper__child" @click="() => console.log('child')">
        parent only trigger event when clicked exactly in self
      </div>
    </div>

    <div @click.once="() => console.log('once')">once</div>

    <div @click.passive="() => console.log('passive')">passive</div>

    <!-- prevent default without expression -->
    <form @submit.prevent></form>

    <!-- key modifier using keyAlias -->
    <input @keyup.enter="console.log('keyup enter')" />

    <!-- custom
    <MyComponent @my-event="handleThis" />
    <MyComponent @my-event="handleThis(123, $event)" />
    -->

    <!-- reactivity fundamentals -->
    <div @click="() => nonReference++">{{ nonReference }}</div>
    <div @click="() => reference++">{{ reference }}</div>
    <div @click="() => obj.nested.count++">{{ obj.nested.count }}</div>
    <div @click="shallowReferenceHandler()">{{ shallowReference.count }}</div>

    <!-- computed values -->
    {{ referencePlusOne }}

    <!-- class and Style Bindings -->
    <div :class="{ active: isActive, 'text-danger': hasError }"></div>
    <div :class="classObject"></div>
    <div :style="styleObject"></div>

    <!-- conditional rendering -->
    <!--
        v-if is real, lazy loading, => mayor coste al alternar (usar si es susceptible de alternar pocas veces)
        v-show is cssb based, preserved events, etc => mayor coste inicial (usar si es susceptible de alternar muchas veces)    
    -->
    <template v-if="true">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <p v-show="true">Paragraph 1</p>

    <!-- list rendering -->
    <ul>
      <li v-for="(n, index) in evenNumbers" :key="index">{{ n }}</li>
    </ul>

    <ul v-for="(numberr, index) in sets" :key="index">
      <li v-for="(evenNumberr, indexx) in even(numberr)" :key="indexx">
        {{ evenNumberr }}
      </li>
    </ul>

    <!-- event handling -->
    <input @keyup.alt.enter="() => console.log('<!-- Alt + Enter -->')" />
    <!-- Alt + Enter -->
    <input @keyup.enter="() => console.log('<!-- enter -->')" />
    <!-- enter -->
    <input @keyup.tab="() => console.log('<!-- tab -->')" />
    <!-- tab -->
    <input @keyup.delete="() => console.log('<!-- delete -->')" />
    <!-- delete -->

    <div @click.ctrl="() => console.log('<!-- Ctrl + Click -->')">
      Do something
    </div>
    <!-- Ctrl + Click -->
  </div>
</template>

<style scoped>
.component-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid black 2px;
  background-color: transparent;
  width: 20rem;
  height: auto;
}

.component-wrapper__parent {
  background-color: yellow;
  padding: 1rem;
}

.component-wrapper__child {
  background-color: purple;
}
</style>
