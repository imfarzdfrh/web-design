<template>
  <section class="py-16 bg-lightBackground dark:bg-darkBackground dark:text-lightText">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-8">Categories</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Category 1 with GIF Icon -->
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="bg-lightBackground p-4 rounded-full mb-4">
            <!-- Replace FontAwesome Icon with GIF -->
            <img src="/assets/icons/gif/image.gif" alt="3D Assets" class="w-16 h-16" />
            <!-- Use your actual GIF file path -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-darkText dark:text-lightText">
            Image generators
          </h3>
          <p class="text-darkText dark:text-lightText text-sm text-center">quality picture generate ai</p>
        </div>

        <!-- Category 2 with GIF Icon -->
        <div
          class="flex flex-col items-center bg-white p-6 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="bg-lightBackground p-4 rounded-full mb-4">
            <!-- Replace FontAwesome Icon with GIF -->
            <img src="/assets/icons/gif/video.gif" alt="Illustrations" class="w-16 h-16" />
            <!-- Use your actual GIF file path -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-darkText dark:text-lightText">
            Video generators
          </h3>
          <p class="text-darkText dark:text-lightText text-sm text-center">quality video generate ai</p>
        </div>

        <!-- Category 3 with GIF Icon -->
        <div
          class="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <div class="bg-lightBackground p-4 rounded-full mb-4">
            <!-- Replace FontAwesome Icon with GIF -->
            <img src="/assets/icons/gif/chat.gif" alt="Illustrations" class="w-16 h-16" />
            <!-- Use your actual GIF file path -->
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-darkText dark:text-lightText">
            Chat Bot ai smart
          </h3>
          <p class="text-darkText dark:text-lightText text-sm text-center">smart chat ai</p>
        </div>

        <!-- Additional categories can be added similarly -->
      </div>
    </div>
  </section>
</template>
