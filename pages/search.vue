<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '~/stores/product'

// استفاده از Pinia store برای محصولات
const productStore = useProductStore()

const searchQuery = ref('')
  
// فیلتر کردن محصولات بر اساس عبارت جستجو
const filteredProducts = computed(() => {
  return productStore.searchProducts(searchQuery.value)
})
</script>

<template>
  <div>
    <h1>Search Results for: {{ searchQuery }}</h1>
    
    <div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for products..."
        class="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
    </div>
    
    <!-- نمایش محصولات فیلتر شده -->
    <div v-if="filteredProducts.length > 0">
      <div v-for="product in filteredProducts" :key="product.id" class="mt-6">
        <p>{{ product.name }} - {{ product.price }} USD</p>
      </div>
    </div>
    
    <div v-else>
      <p>No products found.</p>
    </div>
  </div>
</template>
