<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});

function toggleTheme() {
  isDark.value = !isDark.value;
  const html = document.documentElement;

  if (isDark.value) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-gray-200 rounded-full dark:bg-gray-700 hover:rotate-180 group"
  >
    <!-- Sun -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute w-6 h-6 text-yellow-500 transition-opacity duration-300"
      :class="{ 'opacity-0': isDark, 'opacity-100': !isDark }"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m8.66-12.66l-.707.707M4.05 19.95l-.707.707M21 12h1M2 12H1m16.66 4.66l-.707-.707M4.05 4.05l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z"
      />
    </svg>

    <!-- Moon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute w-6 h-6 text-white transition-opacity duration-300"
      :class="{ 'opacity-100': isDark, 'opacity-0': !isDark }"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
      />
    </svg>
  </button>
</template>
