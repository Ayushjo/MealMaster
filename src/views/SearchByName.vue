<template>
  <!-- Search Bar -->
  <div class="search-container mt-6">
    <input
      type="text"
      v-model="keyword"
      class="search-input"
      placeholder="🔍 Search for Meals..."
      @change="searchMeals"
    />
  </div>

  <!-- Meal Grid -->
  <div class="meal-grid">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <!-- No Meals Found Message -->
  <div v-if="!meals.length" class="no-meals">
    🍽️ No meals found. Try searching for something else!
  </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue'
import store from "../store";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const meals = computed(() => store.state.searchedMeals);
const keyword = ref("");
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
const route = useRoute();

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped>
/* Search Container */
.search-container {
  padding: 4rem 2rem 2rem; /* Add top padding to compensate for navbar */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Search Input */
.search-input {
  width: 100%;
  max-width: 500px;
  padding: 12px 16px;
  font-size: 1.1rem;
  border: 2px solid rgba(211, 84, 0, 0.3);
  border-radius: 8px;
  outline: none;
  transition: 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.9);
}

.search-input:focus {
  border-color: #d35400;
  box-shadow: 0 4px 15px rgba(211, 84, 0, 0.3);
}

/* Meal Grid */
.meal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default to 3 columns */
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


