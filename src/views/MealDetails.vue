<template>
  <div class="meal-detail-container max-w-3xl mx-auto p-8 mt-12">
    <!-- Meal Title -->
    <h1 class="text-5xl font-bold mb-6 text-center">{{ meal.strMeal }}</h1>
    
    <!-- Meal Image -->
    <img 
      :src="meal.strMealThumb" 
      :alt="meal.strMeal" 
      class="max-w-full rounded-lg shadow-lg mb-6"
    />

    <!-- Meal Information: Category, Area, Tags -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg py-4">
      <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags || 'N/A' }}</div>
    </div>

    <!-- Meal Instructions -->
    <div class="my-6 text-xl font-thin text-gray-900">
      <h2 class="text-3xl font-semibold mb-4">Instructions:</h2>
      <p>{{ meal.strInstructions }}</p>
    </div>

    <!-- Ingredients and Measures Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
      <!-- Ingredients List -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul class="list-disc pl-6 space-y-2">
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              <span class="font-medium">{{ ind + 1 }}.</span> {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <!-- Measures List -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Measures</h2>
        <ul class="list-disc pl-6 space-y-2">
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              <span class="font-medium">{{ ind + 1 }}.</span> {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <!-- Action Buttons: YouTube and Source -->
    <div class="flex flex-col gap-4">
      <YouTubeButton :href="meal.strYoutube" class="w-full">
        Go To YouTube
      </YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-4 py-3 rounded bg-indigo-600 text-white text-center hover:bg-indigo-700 transition-colors"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient.js";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style scoped>
/* Container for Meal Detail */
.meal-detail-container {
  background-color: #f9fafb;
  border-radius: 15px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

/* Image Styling */
.meal-detail-container img {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Text and Card Style */
h1, h2 {
  color: #2d3a4a;
}

.list-disc {
  list-style-type: disc;
}

.list-disc li {
  color: #2d3a4a;
}

.meal-detail-container .grid {
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .meal-detail-container .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

