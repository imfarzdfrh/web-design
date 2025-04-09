<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isContentLoaded = ref(false);

onMounted(() => {
  // Simulate a delay for content loading
  setTimeout(() => {
    isContentLoaded.value = true;
  }, 100); 
});
</script>

<template>
  <div class="relative w-full h-screen">
    <LayoutsIndexPicture />
    <LayoutsOfferProduct />
    <LayoutsFooter v-if="isContentLoaded" />
  </div>
</template>