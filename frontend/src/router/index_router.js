// src/router/index_router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'; 
import LinearOptimizationForm from '@/components/LinearOptimizationForm.vue'; // Import the linear op component
import NonLinearOptimizationForm from '@/components/NonLinearOptimizationForm.vue'; // Import the non-linear op component
import ConvexOptimizationForm from '@/components/ConvexOptimizationForm.vue'; // Import the convex op component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/linear', // Define the route for linear optimization
    name: 'LinearOptimization',
    component: LinearOptimizationForm,
  },
  {
    path: '/nonlinear', // Define the route for non-linear optimization
    name: 'NonLinearOptimization',
    component: NonLinearOptimizationForm,
  },
  {
    path: '/convex', // Define the route for non-linear optimization
    name: 'ConvexOptimization',
    component: ConvexOptimizationForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
