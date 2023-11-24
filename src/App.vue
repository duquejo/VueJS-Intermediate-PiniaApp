<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import IconPinia from '@/shared/components/icons/IconPinia.vue';
</script>

<template>
  <header>
    <IconPinia />
    <div class="wrapper">
      <h3>Pinia - General sample</h3>
      <nav>
        <RouterLink to="/">Counter Options</RouterLink>
        <RouterLink to="/counter-setup">Counter Setup</RouterLink>
        <RouterLink to="/clients">Customers</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

h3 {
  margin-top: 1rem;
  text-align: center;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

nav a.router-link-active {
  color: var(--color-text);
  text-decoration: underline;
}

nav a.router-link-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
