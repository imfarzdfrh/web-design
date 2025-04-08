<script setup lang="ts"></script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <!-- Links Section -->
        <div class="mb-4 md:mb-0">
          <ul class="flex space-x-6">
            <li><a href="#" class="hover:text-gray-400">Home</a></li>
            <li><a href="#" class="hover:text-gray-400">About</a></li>
            <li><a href="#" class="hover:text-gray-400">Services</a></li>
            <li><a href="#" class="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        <!-- Social Media Links with SVG Icons -->
        <div class="mb-4 md:mb-0 flex space-x-6">
          <UiBaseIcon name="facebook" size="24" color="#fff" />
          <UiBaseIcon name="xtwitter" size="24" color="#fff" />
          <UiBaseIcon name="linkedin" size="24" color="#fff" />
          <UiBaseIcon name="instagram" size="24" color="#fff" />
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-10 text-center text-gray-400">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
