<!-- src/views/Login.vue -->
<template>
    <a-row justify="center" align="middle" class="login-page">
      <a-col :span="8">
        <a-card title="Login" bordered>
          <a-typography>
            <a-title level="4">Welcome Back!</a-title>
            <a-paragraph>Sign in using your Google account:</a-paragraph>
          </a-typography>
          <GoogleLogin /> <!-- Ant Design integrates seamlessly -->
        </a-card>
      </a-col>
    </a-row>
  </template>

  <script setup>
  import GoogleLogin from '../components/GoogleLogin.vue'; // Import the reusable Google Login component
  </script>

  <style scoped>
  /* Style the layout for centering and alignment */
  .login-page {
    height: 100vh; /* Full height for centering */
    background: #f0f2f5; /* Light background color */
  }

  a-card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for the card */
    border-radius: 8px; /* Rounded corners */
  }

  a-title {
    text-align: center; /* Center align the title */
  }

  a-paragraph {
    text-align: center; /* Center align the description */
  }
  </style>
