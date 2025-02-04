<template>
  <!-- Meal Grid -->
  <div class="meal-grid mt-16">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <!-- No Meals Found Message -->
  <div v-if="!meals.length" class="no-meals">
    🍽️ No meals found for this ingredient. Try another!
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";
import { ref, onMounted, computed } from "vue";
import axiosClient from "../axiosClient";
import { useRoute } from "vue-router";
import store from "../store";

const meals = computed(() => store.state.mealsByIngredient);

const route = useRoute();
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredients);
});
</script>

<style scoped>
/* Meal Grid */
.meal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens */
  gap: 2rem;
  padding: 2rem;
}

@media (max-width: 1024px) {
  .meal-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }
}

@media (max-width: 768px) {
  .meal-grid {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }
}

/* No Meals Found */
.no-meals {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2d3a4a;
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 10px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
</style>
