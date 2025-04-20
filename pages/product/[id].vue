<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/product'

// دریافت و تبدیل id به عدد
const route = useRoute()
const productId = Number(route.params.id)

// دسترسی به محصولات از Pinia
const store = useProductStore()
const product = ref(store.products.find(p => p.id === productId) ?? null)
</script>

<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>${{ product.price }}</p>
    <img :src="product.image" alt="Product Image" >
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>