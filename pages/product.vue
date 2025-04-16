<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'default',
  name: 'product',
  path: '/product'
})

const product = ref({
  name: 'AI Software',
  shortDescription: 'This is an advanced software for data analysis.',
  longDescription:
    'This software includes various features to help with data analysis and intelligent predictions...',
  price: 99,
  originalPrice: 129,
  discount: true,
  image: '/images/ai-software.jpg',
  subscriptions: [
    { id: 1, name: 'Monthly Subscription' },
    { id: 2, name: 'Annual Subscription' }
  ],
  reviews: [
    { id: 1, username: 'User 1', comment: "It's amazing!" },
    { id: 2, username: 'User 2', comment: 'Very useful and high quality.' }
  ]
})

const selectedSubscription = ref(product.value.subscriptions[0])
const quantity = ref(1)

const addToFavorites = () => {
  alert('Added to favorites!')
}

const addToCart = () => {
  alert(`Added ${quantity.value} to the cart!`)
}
</script>

<template>
  <div class="flex flex-col h-full bg-lightBackground dark:bg-darkBackground w-full text-darkText dark:text-lightText ">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Product Image -->
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-1/2">
          <img
            src="/temp/pic/chatgpt-banner.jpg"
            alt="Product Image"
            class="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <!-- Product Info -->
        <div class="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <h1 class="text-3xl font-bold">{{ product.name }}</h1>
          <p class="text-gray-600 mt-2">{{ product.shortDescription }}</p>

          <div class="mt-4">
            <p class="text-2xl font-semibold text-gray-900">{{ product.price }} USD</p>
            <p v-if="product.discount" class="text-lg text-red-500 line-through">
              {{ product.originalPrice }} USD
            </p>
          </div>

          <!-- Subscription Select -->
          <div class="mt-4">
            <label for="subscription" class="block text-lg font-medium">Subscription Type</label>
            <select
              id="subscription"
              v-model="selectedSubscription"
              class="mt-2 block w-full px-4 py-2 border rounded-md">
              <option v-for="option in product.subscriptions" :key="option.id" :value="option">
                {{ option.name }}
              </option>
            </select>
          </div>

          <!-- Quantity Select -->
          <div class="mt-4">
            <label for="quantity" class="block text-lg font-medium">Quantity</label>
            <input
              type="number"
              id="quantity"
              v-model="quantity"
              class="mt-2 block w-full px-4 py-2 border rounded-md"
              min="1" />
          </div>

          <!-- Add to Favorites Button -->
          <button
            @click="addToFavorites"
            class="mt-4 w-full bg-gradient-primary text-white py-2 rounded-md hover:bg-blue-600">
            Add to Favorites
          </button>

          <!-- Add to Cart Button -->
          <button
            @click="addToCart"
            class="mt-4 w-full bg-success text-white py-2 rounded-md hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>

      <!-- More Details -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold">More Details</h2>
        <p class="mt-2">{{ product.longDescription }}</p>
      </div>

      <!-- Reviews -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold">User Reviews</h2>
        <div v-for="review in product.reviews" :key="review.id" class="mt-4 flex items-center">
          <!-- Profile Image -->
          <img
            src="/temp/pic/profile-fake.jpg"
            alt="Profile Image"
            class="w-12 h-12 rounded-full mr-4" />
          <div>
            <p class="font-semibold">{{ review.username }}:</p>
            <p>{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for the page if needed */
</style>
