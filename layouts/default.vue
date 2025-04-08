<template>
  <div>
    <header>
      <nav>
        <NuxtLink href="/">Home</NuxtLink
        ><NuxtLink href="/categories">Categories</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
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

a {
  margin: 0 1rem;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s;
}

a.router-link-exact-active {
  text-decoration: underline;
}

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
