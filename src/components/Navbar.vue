<template>
  <header class="navbar">
    <!-- Logo -->
    <router-link class="logo" :to="{ name: 'home' }"> MealMaster </router-link>

    <!-- Navigation Links -->
    <nav class="nav-links">
      <router-link
        class="nav-item"
        active-class="active"
        :to="{ name: 'byName' }"
      >
        Search Meals
      </router-link>
      <router-link
        class="nav-item"
        active-class="active"
        :to="{ name: 'byLetter' }"
      >
        Meals by Letter
      </router-link>
      <router-link
        class="nav-item"
        active-class="active"
        :to="{ name: 'ingredients' }"
      >
        Meals by Ingredients
      </router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
/* Logo */
.logo {
  font-size: 1.8rem; /* Adjust for desktop screens */
  font-weight: bold;
  color: #2d3a4a;
  text-decoration: none;
  font-family: "Pacifico", cursive;
  transition: transform 0.3s ease-in-out;
}

/* Logo Hover Effect */
.logo:hover {
  transform: scale(1.05);
  color: #d35400; /* Food-theme orange */
}

/* Responsive Logo font-size for smaller screens */
@media (max-width: 768px) {
  .logo {
    font-size: 1.5rem; /* Smaller size for mobile screens */
  }
}

/* Navbar Styling */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 0 2rem;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  font-size: 1rem;
  font-weight: 500;
  color: #2d3a4a;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(211, 84, 0, 0.1); /* Light orange hover */
  color: #d35400;
}

.active {
  border-bottom: 3px solid #d35400; /* Active state */
  color: #d35400;
}

/* Mobile View Adjustments */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
  .nav-links {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
  }
}
</style>
