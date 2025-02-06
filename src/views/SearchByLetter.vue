<template>
  <!-- Letter Navigation -->
  <div class="letters-container sm:mt-12 mt-60">
    <div class="flex flex-wrap justify-center gap-2 mt-4">
      <router-link
        v-for="letter of letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        class="letter-link"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>

  <!-- Meal Grid -->
  <div class="meal-grid">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <!-- No Meals Found Message -->
  <div v-if="!meals.length" class="no-meals">
    🍽️ No meals found for this letter. Try another!
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";
import store from "../store";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetters", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetters", route.params.letter);
});
</script>

<style scoped>
/* Letters Navigation Styling */
.letters-container {
  padding: 2rem;
}

.letter-link {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3a4a;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(211, 84, 0, 0.1);
  text-decoration: none;
  transition: background 0.3s;
}

.letter-link:hover {
  background: rgba(211, 84, 0, 0.3);
  color: #fff;
}

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

/* Make Alphabet Links Responsive */
@media (max-width: 768px) {
  .letters-container .flex {
    flex-wrap: wrap; /* Allow wrapping for small screens */
    justify-content: space-evenly;
  }

  .letter-link {
    width: calc(33.33% - 0.5rem); /* 3 items per row with a small gap */
    text-align: center;
  }
}
</style>

