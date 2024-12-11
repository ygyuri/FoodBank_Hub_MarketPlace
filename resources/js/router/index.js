import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/useAuthStore';  // Import the auth store to check user role
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import FoodbankDashboard from '../views/FoodbankDashboard.vue';
import DonorDashboard from '../views/DonorDashboard.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: AdminDashboard,  // Default to Admin Dashboard or modify based on your logic
    meta: { requiresAuth: true, requiredRole: 'admin' },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/foodbank/dashboard',
    name: 'foodbankDashboard',
    component: FoodbankDashboard,
    meta: { requiresAuth: true, requiredRole: 'foodbank' },
  },
  {
    path: '/donor/dashboard',
    name: 'donorDashboard',
    component: DonorDashboard,
    meta: { requiresAuth: true, requiredRole: 'donor' },
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard for checking authentication and role-based access
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.token;  // Check if the user is authenticated (has token)
  const userRole = authStore.user?.role;  // Get the role from the user state in Pinia

  // Check if route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'login' });  // Redirect to login if not authenticated
  }

  // Check if route requires a specific role
  if (to.meta.requiredRole && to.meta.requiredRole !== userRole) {
    return next({ name: 'login' });  // Redirect to login if role doesn't match
  }

  next();  // Allow navigation if all checks pass
});

export default router;
