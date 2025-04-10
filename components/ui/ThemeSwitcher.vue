<template>
  <button
    @click="toggleTheme"
    class="p-[6px] text-white bg-gray-800 rounded-md dark:bg-[#a93f55] dark:text-gray-300 font-bold"
  >
    <span v-if="isDarkMode">
      <UiBaseIcon name="sun"  />
    </span>
    <span v-else>
      <UiBaseIcon name="moon" />
      
    </span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { isDarkMode, toggleTheme } = useTheme();
</script>
