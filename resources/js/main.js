import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';  // or 'vuex'
import Antd from 'ant-design-vue';    // or Headless UI
import 'ant-design-vue/dist/antd.css'; // Ant Design styles (if using Ant Design)

const app = createApp(App);
app.use(router);                      // Use Vue Router
app.use(createPinia());               // Use Pinia for state management
app.use(Antd);                        // Use Ant Design Vue UI Library


// Initialize Google OAuth
app.use(googleAuth, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Load Google Client ID from .env
  });

  
app.mount('#app');
