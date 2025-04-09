<template>
  <button
    @click="toggleTheme"
    class="p-2 text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300"
  >
    <span v-if="isDarkMode">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { isDarkMode, toggleTheme } = useTheme();
</script>
