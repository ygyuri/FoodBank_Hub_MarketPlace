<script setup>
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue'; // Import your HelloWorld component
import { RouterLink } from 'vue-router'; // Import RouterLink for navigation
</script>

<template>
  <div id="app">
    <header>
      <a href="https://vite.dev" target="_blank">
        <!-- <img src="/vite.svg" class="logo" alt="Vite logo" /> -->
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </header>

    <!-- Router Links for Navigation -->
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
    </nav>

    <!-- Render your HelloWorld component -->
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
#app {
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

nav {
  margin: 20px;
}

.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: #42b883;
  font-size: 1.2em;
}

.nav-link:hover {
  color: #646cff;
}
</style>
