<template>
  <!-- Ingredients List -->
  <div class="ingredients-container sm:mt-16 mt-60">
    <h1 class="text-4xl font-bold mb-6 text-center">Ingredients</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="ingredient of ingredients"
        :key="ingredient.id"
        :to="{ name: 'byIngredients', params: { ingredients: ingredient.strIngredient } }"
        class="ingredient-card"
      >
        <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
        <p class="text-gray-600">{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style scoped>
/* Ingredients Container */
.ingredients-container {
  padding: 2rem;
}

/* Individual Ingredient Cards */
.ingredient-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ingredient-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Grid Layout */
@media (max-width: 1024px) {
  .ingredients-container .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }
}

@media (max-width: 768px) {
  .ingredients-container .grid {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }
}
</style>
