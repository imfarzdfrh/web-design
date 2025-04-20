<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { isDarkMode, toggleTheme } = useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-[6px] text-white bg-gray-800 rounded-md dark:bg-[#a93f55] dark:text-gray-300 font-bold"
  >
    <span v-if="isDarkMode">
       <SunIcon class="h-6 w-6" />

    </span>
    <span v-else>
       <MoonIcon class="h-6 w-6" />
      
    </span>
  </button>
</template>

