<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink href="/">Home</NuxtLink>
      <NuxtLink href="/categories">Categories</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: var(--background-color);
  border: 2px solid var(--border-color);
}

.header__nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s;
}

.header__nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
