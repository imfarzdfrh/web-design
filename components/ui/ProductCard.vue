<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  src: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }
})
</script>

<template>
  <NuxtLink :to="{ name: 'product-id', params: { id } }">
    <div
      class="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white dark:bg-gray-400/40 rounded-lg shadow-lg w-60 hover:scale-105">
      <img :src="src" alt="Product 1" class="object-cover p-5" />
      <div class="p-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-lightText">{{ title }}</h3>
        <p class="mb-4 text-gray-600 dark:text-lightText">{{ description }}</p>
        <div class="flex items-center justify-between">
          <span class="text-lg font-semibold text-gray-800 dark:text-lightText">{{ price }}</span>
          <!-- دکمه خرید داخل NuxtLink قرار گرفت -->
          <UiBaseButton color="primary">buy</UiBaseButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
