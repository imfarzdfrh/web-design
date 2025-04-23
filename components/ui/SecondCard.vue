<template>
    <div
      v-if="products.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        @click="onView(product.id)"
        class="cursor-pointer rounded-xl bg-lightBackground/85 dark:bg-gray-800/50 shadow hover:shadow-lg transition p-4 flex flex-col">
        <img
          :src="product.image"
          alt="product image"
          class="w-full h-48 object-cover rounded-lg mb-4" >
        <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        <p class="text-sm mt-1 line-clamp-2">{{ product.description }}</p>
        <p class="mt-3 font-bold text-darkText dark:text-lightText text-lg">${{ product.price }}</p>
        <UiBaseButton class="mt-5"> Buy </UiBaseButton>
      </div>
    </div>
  
    <div v-else class="text-center text-gray-500 text-lg mt-10">No products found.</div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    products: Array<any>,
    onView: (id: number) => void
  }>()
  </script>
  