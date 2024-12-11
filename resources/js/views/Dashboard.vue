<!-- src/views/Dashboard.vue -->
<template>
    <div class="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>This is the dashboard page of your Vue app.</p>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>

  <script>
  export default {
    name: 'Dashboard',
  };
  </script>

  <style scoped>
  .dashboard {
    text-align: center;
    padding: 50px;
  }
  </style>
