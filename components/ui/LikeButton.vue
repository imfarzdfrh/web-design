<template>
    <div>
      <!-- دکمه لایک -->
      <button
        @click="toggleLike"
        class="p-2 rounded-full transition duration-300 ease-in-out transform"
        :class="{'text-red-500 scale-110': liked, 'text-gray-500': !liked}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
  
      <!-- مدال پیغام لایک -->
      <div v-if="showAlert" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
          <h2 class="text-xl font-semibold text-green-600 mb-4">Added to Favorites!</h2>
          <p class="text-gray-700">This item has been successfully added to your favorites list.</p>
          <button @click="showAlert = false" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const liked = ref(false);
  const showAlert = ref(false);
  
  const toggleLike = () => {
    liked.value = !liked.value;
  
    // وقتی لایک می‌شود، مدال را نمایش می‌دهیم
    if (liked.value) {
      showAlert.value = true;
  
      // پس از 3 ثانیه، مدال بسته شود
      setTimeout(() => {
        showAlert.value = false;
      }, 3000);
    }
  };
  </script>
  
  <style scoped>
  button {
    cursor: pointer;
  }
  </style>
  