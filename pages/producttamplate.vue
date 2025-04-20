<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Sample list of products (Replace with actual data or API)
const products = [
  { id: 1, name: 'AI Software', description: 'Advanced software for data analysis', price: 99, image: '/images/ai-software.jpg' },
  { id: 2, name: 'Chatbot AI', description: 'Automated chatbot for customer support', price: 59, image: '/images/chatbot.jpg' },
  { id: 3, name: 'Image Generator', description: 'Generate images with AI', price: 120, image: '/images/image-generator.jpg' },
]

const route = useRoute()

// Get the product ID from the URL
const productId = ref(route.params.id)

// Find the product based on ID
const product = ref({})

onMounted(() => {
  product.value = products.find(p => p.id == productId.value)
})

</script>

<template>
  <div class="container mx-auto py-12">
    <div v-if="product">
      <h1 class="text-4xl font-bold">{{ product.name }}</h1>
      <p class="text-gray-600 mt-4">{{ product.description }}</p>
      <p class="text-gray-800 font-bold text-xl mt-4">${{ product.price }}</p>
      <img :src="product.image" alt="Product Image" class="mt-8 rounded-lg shadow-xl" />
    </div>
    <div v-else>
      <p class="text-center text-lg text-gray-500">Product not found.</p>
    </div>
  </div>
</template>

<style scoped>
/* Optional styling for product details */
</style>
