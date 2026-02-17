<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isContentLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isContentLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="relative">
    <LayoutsMainBanner />

    <LayoutsMainProduct />
    <LayoutsListProduct />
    <LayoutsCategory />
    <LayoutsOverviewSection />
    <LayoutsFooter v-if="isContentLoaded" />
  </div>
</template>
