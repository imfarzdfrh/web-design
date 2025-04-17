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
  longDescription: `
    <h2 class="font-bold text-2xl py-10">ChatGPT - Features, Benefits, and Subscription Types</h2>
    <p>Welcome to our AI-powered ChatGPT account store! Here, you can purchase access to ChatGPT’s advanced capabilities, whether for personal, professional, or academic use. Below is a complete breakdown of the features and functionalities of ChatGPT, as well as an explanation of the different types of accounts we offer: Shared Accounts and Dedicated Accounts.</p>
    
    <h3>Key Features of ChatGPT</h3>
    <ul>
      <li class="font-bold text-2xl py-10"><strong>Advanced Language Understanding</strong> 
      <li>ChatGPT can comprehend and generate text in a natural, human-like manner.</li>
      <li class="font-bold text-2xl py-10"><strong>Task Automation:</strong> Automate repetitive tasks such as answering emails, writing reports, summarizing documents, and more.</li>
      <li class="font-bold text-2xl py-10"><strong>Creative Content Generation:</strong> ChatGPT can assist with writing blog posts, stories, essays, poetry, and more.</li>
      <li class="font-bold text-2xl py-10"><strong>Learning and Research:</strong> Perfect for students, researchers, and professionals, ChatGPT can help you explore topics and answer complex queries.</li>
      <li class="font-bold text-2xl py-10"><strong>Multilingual Support:</strong> ChatGPT supports multiple languages, including English, Spanish, French, German, and more.</li>
      <li class="font-bold text-2xl py-10"><strong>Personalization:</strong> ChatGPT learns your preferences and adapts over time.</li>
      <li class="font-bold text-2xl py-10"><strong>Code Assistance:</strong> Developers can use ChatGPT to write and debug code.</li>
      <li class="font-bold text-2xl py-10"><strong>24/7 Availability:</strong> Always available to assist you at any time.</li>
    </ul>

    <h3>Subscription Types</h3>
    <p><strong>Shared Account:</strong> A shared account allows multiple users to access the same ChatGPT account. It’s cost-effective and ideal for casual users or small groups.</p>
    <p><strong>Dedicated Account:</strong> A dedicated account offers exclusive, private access to ChatGPT, perfect for businesses or individuals needing secure, unlimited, and customized access.</p>

    <h3>Why Choose ChatGPT?</h3>
    <p>Whether you're a student, business owner, or developer, a ChatGPT account can significantly boost your productivity and creativity. Choose the plan that fits your needs and unlock the power of AI!</p>
  `,
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
  <div
    class="flex flex-col h-full bg-lightBackground dark:bg-darkBackground w-full text-darkText dark:text-lightText p-10">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Product Image -->
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-1/2">
          <img
            src="/temp/pic/chatgpt-banner.jpg"
            alt="Product Image"
            class="w-full h-auto rounded-lg shadow-2xl" />
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
        <div v-html="product.longDescription"></div>
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
          <div class="px-5 py-3">
            <p class="font-semibold py-5">{{ review.username }}:</p>
            <p>{{ review.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
