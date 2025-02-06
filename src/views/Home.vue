<template>
  <div class="home-container">
    <div class="typed-wrapper">
      <VueTyped 
        :strings="['Welcome to Food Haven!', 'Delicious recipes await!', 'Taste the magic!']" 
        :typeSpeed="50" 
        :backSpeed="25" 
        loop
      />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    45deg, 
    rgba(245, 245, 245, 0.95) 0%, 
    rgba(220, 220, 220, 0.95) 100%
  ), url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.typed-wrapper {
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3a4a;
  font-family: 'Poppins', sans-serif;
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 15px;
  box-shadow: 0 12px 40px rgba(45, 58, 74, 0.15);
  border: 1px solid rgba(45, 58, 74, 0.1);
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);
  max-width: 80%;
  text-align: center;
  line-height: 1.3;
}

.typed-wrapper:hover {
  transform: translateY(-5px) scale(1.02);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.typed-wrapper {
  animation: fadeIn 1s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Add these to your main CSS */

/* Optional: Add food icons pattern overlay */
.home-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d3a4a' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 0;
  opacity: 0.15;
}
</style>



