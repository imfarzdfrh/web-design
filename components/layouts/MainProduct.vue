<script setup lang="ts">

</script>

<template>
    <div class="py-20 dark:bg-darkBackground dark:text-lightText bg-lightBackground">
      <h2 class="text-2xl font-bold mb-8 container mx-auto">Categories</h2>
      <div class="relative w-full max-w-6xl mx-auto transition-transform transform bg-gray-300 shadow-md duration-600 opacity-90 hover:opacity-100 rounded-xl h-80 hover:scale-105">
        <img src="/temp/pic/banner3.png" alt="Image 1" class="object-cover w-full h-full rounded-xl">
        <div class="absolute p-3 text-white bottom-4 left-4">
          <h2 class="text-2xl font-bold">A New Krea</h2>
          <p>Announcing our Series B</p>
          <UiBaseButton class="px-4 py-2 mt-2 ">Read more</UiBaseButton>
        </div>
      </div>
      <div class="flex justify-center m-4 space-x-4">
        <div class="relative w-1/3 m-5 my-5 transition-transform duration-300 bg-gray-300 shadow-md opacity-90 h-80 rounded-xl hover:opacity-100 teansform hover:scale-105">
          <img src="/temp/pic/banner2.png" alt="Image 2" class="object-cover w-full h-full rounded-xl">
          <div class="absolute p-3 text-white bottom-4 left-4">
            <h2 class="text-2xl font-bold">New Tool</h2>
            <p>Change the style of any video</p>
            <UiBaseButton class="px-4 py-2 mt-2">Restyle Videos</UiBaseButton>
          </div>
        </div>
        <div class="relative w-1/3 m-5 my-5 transition-transform duration-300 bg-gray-300 shadow-md opacity-90 hover:opacity-100 h-80 rounded-xl teansform hover:scale-105">
          <img src="/temp/pic/banner1.png" alt="Image 3" class="object-cover w-full h-full rounded-xl">
          <div class="absolute p-3 text-white bottom-4 left-4">
            <h2 class="text-2xl font-bold">Exciting Update</h2>
            <p>Discover the latest features</p>
            <UiBaseButton  class="px-4 py-2 mt-2 ">Learn more</UiBaseButton>
          </div>
        </div>
      </div>
    </div>
  </template>
  