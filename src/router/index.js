import { comma } from "postcss/lib/list";
import { createWebHistory,createRouter } from "vue-router";

import Home from "../views/Home.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue"
import GuestLayout from "../components/GuestLayout.vue"
import MealDetails from '../views/MealDetails.vue'
import Ingredients from "../views/Ingredients.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        name: "home",
        path: "/",
        component: Home,
      },
      {
        name: "byName",
        path: "/by-name/:name?",
        component: SearchByName,
      },
      {
        name: "byLetter",
        path: "/by-letter/:letter?",
        component: SearchByLetter,
      },
      {
        name: "ingredients",
        path: "/ingredients",
        component: Ingredients,
      },
      {
        name: "byIngredients",
        path: "/by-ingredients/:ingredients",
        component: SearchByIngredients,
      },
      {
        path:'/meal/:id?',
        name:'mealDetails',
        component:MealDetails
      }
    ],
  },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;