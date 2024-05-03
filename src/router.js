import { createRouter, createWebHistory } from 'vue-router';
import RecipeView from './views/RecipeView.vue';
import CategoryView from './views/CategoryView.vue'; 
import HomeView from './views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/recipe/:recipeId',
    name: 'recipe',
    component: RecipeView,
  },
  {
    path: '/category/:categoryId',
    name: 'category',
    component: CategoryView,
  },
  // {
  //   path: '/recipes',
  //   name: 'recipes',
  //   component: RecipesList,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Pass the defined routes to the router
});

export default router; // Export the configured router
