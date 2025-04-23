<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'

// Get the store instance
const productStore = useProductStore()

const product = computed(() => productStore.products[0])
</script>

<template>
  <NuxtLink :to="{ name: 'product-id', params: { id: product.id } }">
    <div
      class="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white dark:bg-gray-800/50 rounded-lg shadow-lg w-60 hover:scale-105">
      <img :src="product.logo" class="object-cover p-5 dark:hidden" >
      <img :src="product.logodark" class="object-cover p-5 hidden dark:block" >
      <div class="p-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-lightText">{{ product.name }}</h3>
        <p class="mb-4 text-gray-600 dark:text-lightText">{{ product.description }}</p>
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold text-gray-800 dark:text-lightText">{{
            product.price
          }}</span>
          <UiBaseButton color="primary">buy</UiBaseButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
