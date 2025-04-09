<template>
  <div class="flex flex-wrap justify-center py-12 space-x-6">
    <!-- Card 1 -->
    <div class="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-lg w-60 hover:scale-105">
      <img
        src="/public/temp/pic/chatgpt.png"
        alt="Product 1"
        class="object-cover p-5"
      >
      <div class="p-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">ChatGpt</h3>
        <p class="mb-4 text-gray-600">This is a product description</p>
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold text-gray-800">$99.99</span>
          <button
            class="px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>

    <!-- Card 2 (Larger Center Card) -->
    <div class="overflow-hidden transition-transform duration-300 ease-in-out transform scale-105 bg-white rounded-lg shadow-lg w-75 hover:scale-105">
      <img
        src="/public/temp/pic/deepseek.png"
        alt="Product 2"
        class="object-cover p-7"
      >
      <div class="p-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">DeepSeek</h3>
        <p class="mb-4 text-gray-600">This is a product description</p>
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold text-gray-800">$149.99</span>
          <button
            class="px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-lg w-60 hover:scale-105">
      <img
        src="/public/temp/pic/grok.png"
        alt="Product 3"
        class="object-cover p-5"
      >
      <div class="p-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">Grok</h3>
        <p class="mb-4 text-gray-600">This is a product description</p>
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold text-gray-800">$89.99</span>
          <button
            class="px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /* Adding hover and animation effects */
  .hover\:scale-105:hover {
    transform: scale(1.10);
  }

  .transition-transform {
    transition: transform 0.2s ease-in-out;
  }

  .transition-colors {
    transition: background-color 0.5s ease;
  }
</style>
