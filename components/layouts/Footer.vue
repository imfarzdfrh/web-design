<script setup lang="ts"></script>

<template>
  <footer class="bottom-0 left-0 right-0 py-12 text-white bg-gray-900 dark:bg-darkBackground w-full h-[5%]">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <!-- Links Section -->
        <div class="mb-4 md:mb-0">
          <ul class="flex space-x-6">
            <li>
              <a href="#" class="hover:text-gray-400 dark:hover:text-gray-300"
                >Home</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-gray-400 dark:hover:text-gray-300"
                >About</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-gray-400 dark:hover:text-gray-300"
                >Services</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-gray-400 dark:hover:text-gray-300"
                >Contact</a
              >
            </li>
          </ul>
        </div>

        <!-- Social Media Links with SVG Icons -->
        <div class="flex mb-4 space-x-6 md:mb-0">
          <UiBaseIcon name="facebook" size="27" color="#fff" />
          <UiBaseIcon name="xtwitter" size="27" color="#fff" />
          <UiBaseIcon name="linkedin" size="27" color="#fff" />
          <UiBaseIcon name="instagram" size="27" color="#fff" />
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-10 text-center text-gray-400 dark:text-gray-300">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
