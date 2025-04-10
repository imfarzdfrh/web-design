<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <nav
    class="px-6 py-4 transition-all bg-white shadow-md dark:bg-darkBackground navbar dark:text-darkText"
  >
    <div class="container flex items-center justify-between mx-auto">
      <!-- Left side: Logo + Nav Links -->
      <div class="flex items-center space-x-7">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-xl font-bold text-gray-900 dark:text-gray-200"
        >
          MySite
        </NuxtLink>

        <!-- Nav Links (Home, About, Contact) -->
        <ul class="items-center hidden space-x-6 md:flex">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-gray-800 transition dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Right side: ThemeSwitcher + Buttons -->
      <ul class="items-center hidden space-x-6 md:flex">
        <li><uiThemeSwitcher /></li>
        <li>
          <NuxtLink
            to="/login"
            class="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-blue-400"
          >
            Login
          </NuxtLink>
        </li>
        <li>
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded"
          >
            Sign Up
          </button>
        </li>
    
      </ul>

      <!-- Mobile menu toggle button -->
      <button
        class="text-gray-700 md:hidden dark:text-gray-300"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <div v-if="isOpen" class="px-4 mt-4 space-y-4 md:hidden">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        @click="toggleMenu"
      >
        {{ link.label }}
      </NuxtLink>

      <UiThemeSwitcher />

      <button
        class="block w-full text-sm font-medium text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      >
        Login
      </button>
      <button
        class="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
    </div>
  </nav>
</template>
