<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { isDarkMode, toggleTheme } = useTheme()
</script>
<template>
  <button
    type="button"
    class="button-quiet inline-flex size-10 items-center justify-center rounded-xl"
    :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDarkMode ? 'Light mode' : 'Dark mode'"
    @click="toggleTheme"
  >
    <SunIcon v-if="isDarkMode" class="size-5" aria-hidden="true" />
    <MoonIcon v-else class="size-5" aria-hidden="true" />
  </button>
</template>
