<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isContentLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isContentLoaded.value = true;
  }, 100); 
});
</script>

<template>
  <div class="relative">
    <LayoutsMainBanner />
    <LayoutsOverviewSection />
    <LayoutsMainProduct />
    <LayoutsCategory />
    <LayoutsListProduct />
    <LayoutsFooter v-if="isContentLoaded" />
  </div>
</template>