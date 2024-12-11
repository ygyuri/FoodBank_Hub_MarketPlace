import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/api', // Replace with your Laravel backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the token to the headers if the user is logged in
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  // Get the token from localStorage or Pinia state
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
