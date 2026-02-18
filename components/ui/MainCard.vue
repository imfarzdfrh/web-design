<script setup lang="ts">
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  logodark: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

const cart = useCartStore()

function handleAddToCart() {
  cart.addToCart({
    id: props.id,
    name: props.name,
    price: parseFloat(props.price.replace('$', '')),
    image: props.logo,
  })
}
</script>

<template>
  <NuxtLink :to="{ name: 'product-id', params: { id: props.id } }">
    <div
      class="flex flex-col space-x-2 transition-transform duration-300 ease-in-out transform bg-white dark:bg-gray-800/50 rounded-lg shadow-lg w-60 h-full hover:scale-105">
      <img :src="props.logo" class="p-6 dark:hidden" >
      <img :src="props.logodark" class="p-5 hidden dark:block" >

      <div class="flex flex-col justify-between p-4 h-full">
        <div>
          <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-lightText">
            {{ props.title }}
          </h3>
          <p class="mb-4 text-gray-600 dark:text-lightText">{{ props.description }}</p>
        </div>

        <div class="flex items-center justify-between mt-auto">
          <span class="text-lg font-semibold text-gray-800 dark:text-lightText">{{
            props.price
          }}</span>
          <UiBaseButton color="primary" @click.stop="handleAddToCart">Add to Cart</UiBaseButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
