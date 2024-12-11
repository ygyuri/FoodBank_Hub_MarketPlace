<!-- src/components/GoogleLogin.vue -->
<template>
    <div class="google-login">
      <!-- Google login button -->
      <google-login
        :client-id="googleClientId" 
        @success="handleLoginSuccess"
        @error="handleLoginError"
      />
    </div>
  </template>

  <script>
  import { defineComponent } from 'vue';
  import { GoogleLogin } from 'vue3-google-login'; // Import the Google login button component
  import { useAuthStore } from '../store/useAuthStore'; // Access the Pinia authentication store

  export default defineComponent({
    name: 'GoogleLogin',
    components: { GoogleLogin }, // Register GoogleLogin component
    data() {
      return {
        googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Fetch Google Client ID from .env
      };
    },
    methods: {
      // Handle successful Google login
      async handleLoginSuccess(response) {
        try {
          const authStore = useAuthStore(); // Access the authentication store
          const googleToken = response.credential; // Extract the Google OAuth token
          await authStore.googleLogin(googleToken); // Send token to backend for JWT exchange
        } catch (error) {
          console.error('Error processing Google login:', error); // Log any errors
          alert('Google login failed. Please try again.');
        }
      },
      // Handle Google login errors
      handleLoginError(error) {
        console.error('Google login failed:', error); // Log the error
        alert('Failed to login with Google. Please try again.');
      },
    },
  });
  </script>

  <style scoped>
  .google-login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  </style>
