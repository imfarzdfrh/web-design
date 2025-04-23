<template>
  <button
    class="flex items-center p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    @click="handleClick"
    aria-label="Bookmark"
  >
    <bookmarkIcon class="h-6 w-6 fill-current dark:text-lightBackground" />
  </button>
</template>

<script setup>
const handleClick = () => {
  console.log('Bookmark clicked');
  // در اینجا می‌توانید کدهای مربوط به عملیات بوک مارک را اضافه کنید.
};
</script>


