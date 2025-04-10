<template>
  <button
    @click="toggleTheme"
    class="p-2 text-white bg-gray-800 rounded-md dark:bg-gray-800 dark:text-gray-300 font-bold"
  >
    <span v-if="isDarkMode">☀️ Light</span>
    <span v-else>🌙 Dark</span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { isDarkMode, toggleTheme } = useTheme();
</script>
