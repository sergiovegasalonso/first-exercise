<script setup lang="ts">
import SrgHeader from './header/SrgHeader.vue'
</script>

<template>
  <div>
    <srg-header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  width: 50vw;
  margin: 0 auto;
  background-color: var(--background-color);
}

@media (max-width: 500px) {
  main {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
</style>
