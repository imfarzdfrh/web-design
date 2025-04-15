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
  <div class="relative w-full h-screen">
    <LayoutsIndexPicture />
    <LayoutsMainProduct />
    <LayoutsListProduct />
    <LayoutsFooter v-if="isContentLoaded" />
  </div>
</template>