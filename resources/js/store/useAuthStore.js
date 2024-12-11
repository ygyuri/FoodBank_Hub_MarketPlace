// src/store/useAuthStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  // State: Stores global state for authentication
  state: () => ({
    user: null, // Holds the authenticated user's data
    token: localStorage.getItem('token') || '', // Retrieves token from localStorage for persistence
  }),

  actions: {
    /**
     * Login action
     * Authenticates the user using email and password, retrieves the token and user data.
     * Stores the token in localStorage and sets the Authorization header for subsequent requests.
     * @param {Object} credentials - User credentials { email, password }
     */
    async login(credentials) {
      try {
        const response = await axios.post('/api/login', credentials); // Send login request
        this.user = response.data.user; // Store the user data in state
        this.token = response.data.token; // Store the token in state

        // Persist token in localStorage and set the Authorization header
        localStorage.setItem('token', this.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } catch (error) {
        console.error('Login failed:', error); // Log the error for debugging
        throw error; // Re-throw the error for the calling component to handle
      }
    },

    /**
     * Register action
     * Registers a new user, retrieves the token and user data, and persists the session.
     * @param {Object} userData - New user details { name, email, password, etc. }
     */
    async register(userData) {
      try {
        const response = await axios.post('/api/register', userData); // Send registration request
        this.user = response.data.user; // Store the user data in state
        this.token = response.data.token; // Store the token in state

        // Persist token in localStorage and set the Authorization header
        localStorage.setItem('token', this.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } catch (error) {
        console.error('Registration failed:', error); // Log the error for debugging
        throw error; // Re-throw the error for the calling component to handle
      }
    },

    /**
     * Google OAuth Login
     * Logs in using a Google OAuth token and retrieves user data and session token.
     * @param {string} googleToken - Token provided by Google OAuth
     */
    async googleLogin(googleToken) {
      try {
        const response = await axios.post('/api/auth/google/callback', { token: googleToken }); // Send Google OAuth token
        this.user = response.data.user; // Store the user data in state
        this.token = response.data.token; // Store the token in state

        // Persist token in localStorage and set the Authorization header
        localStorage.setItem('token', this.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } catch (error) {
        console.error('Google Login failed:', error); // Log the error for debugging
        throw error; // Re-throw the error for the calling component to handle
      }
    },

    /**
     * Logout action
     * Clears the user's session by removing the token and user data from state and localStorage.
     */
    logout() {
      this.user = null; // Clear the user data in state
      this.token = ''; // Clear the token in state
      localStorage.removeItem('token'); // Remove token from localStorage
      delete axios.defaults.headers.common['Authorization']; // Remove the Authorization header
    },

    /**
     * Fetch User Data
     * Retrieves the authenticated user's data from the server.
     * Useful for reloading the user state after a page refresh.
     */
    async fetchUser() {
      if (!this.token) return; // Exit if no token is present
      try {
        const response = await axios.get('/api/user'); // Fetch authenticated user info
        this.user = response.data; // Update the user data in state
      } catch (error) {
        console.error('Failed to fetch user:', error); // Log the error
        this.logout(); // Logout if fetching user fails (e.g., invalid token)
      }
    },
  },

  getters: {
    /**
     * Check if the user is authenticated
     * @returns {boolean} - True if a token is present, false otherwise
     */
    isAuthenticated: (state) => !!state.token, // Boolean indicating authentication status

    /**
     * Get the user's role
     * @returns {string|null} - The role of the authenticated user
     */
    userRole: (state) => state.user?.role, // Access the user's role from the state
  },
});
