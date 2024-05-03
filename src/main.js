import { createApp } from 'vue'; // Import the createApp function from Vue
import App from './App.vue'; // Import the root component App.vue
import router from './router.js'; // Import the router configuration

// import RecipesList from './views/RecipesList.vue'; // Import the RecipesList component

// Create a Vue app instance
const app = createApp(App);

// Use the router in the app
app.use(router);

// Mount the app to the #app element in the HTML file
app.mount('#app');

// // Register the RecipesList component globally so it can be used in templates
// app.component('RecipesList', RecipesList);
