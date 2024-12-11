<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of your Vue app.</p>
      <router-link to="/dashboard">Go to Dashboard</router-link>
    </div>
  </template>

  <script>
  export default {
    name: 'Home',
  };
  </script>

  <style scoped>
  .home {
    text-align: center;
    padding: 50px;
  }
  </style>
