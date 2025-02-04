<template>
  <div class="meal-card bg-white shadow-xl rounded-lg overflow-hidden">
    <!-- Meal Image -->
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="w-full h-64 lg:h-72 object-cover rounded-t-xl"
    />

    <!-- Meal Content -->
    <div class="p-6">
      <!-- Meal Title -->
      <h3 class="font-semibold text-3xl text-gray-900 hover:text-purple-600 transition-colors">
        {{ meal.strMeal }}
      </h3>

      <!-- Meal Description -->
      <p class="text-lg text-gray-600 mt-3 mb-5 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
        perspiciatis fugiat, nam totam exercitationem error sequi eius, atque
        itaque dolorum labore.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col gap-4 justify-center">
        <!-- YouTube Button -->
        <YouTubeButton :href="meal.strYoutube" class="w-full">
          Go To YouTube
        </YouTubeButton>

        <!-- View Details Button -->
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-4 py-2 rounded-md border-2 border-indigo-600 text-center text-indigo-600 font-medium transition-colors hover:bg-indigo-600 hover:text-white"
        >
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<style scoped>
/* Meal Card Styling */
.meal-card {
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.meal-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Meal Title Hover Effect */
.meal-card h3:hover {
  text-decoration: underline;
}

/* Text Truncation for Description */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* The number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
