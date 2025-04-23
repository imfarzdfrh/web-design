<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProductStore } from '~/stores/product'
import { useRouter } from 'vue-router'
import UiSecondCard from '~/components/ui/SecondCard.vue'

definePageMeta({
  name: 'productpage',
  path: '/productpage'
})

const store = useProductStore()
const router = useRouter()

const searchTerm = ref('')
const selectedCategory = ref('all')
const sortOption = ref('default')

const categories = computed(() => {
  const allCats = store.products.map(p => p.category)
  return ['all', ...new Set(allCats)]
})

const filteredProducts = computed(() => {
  let result = store.products

  if (selectedCategory.value !== 'all') {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase()
    result = result.filter(
      p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
    )
  }

  if (sortOption.value === 'price-asc') {
    result = result.slice().sort((a, b) => a.price - b.price)
  } else if (sortOption.value === 'price-desc') {
    result = result.slice().sort((a, b) => b.price - a.price)
  }

  return result
})

function viewProduct(id: number) {
  router.push(`/product/${id}`)
}
</script>

<template>
  <div class="relative bg-lightBackground dark:bg-darkBackground text-darkText dark:text-lightText h-full">
    <div class="container mx-auto py-12 px-4">
      <div class="flex flex-col md:flex-row md:items-center mb-12 text-darkText">
        <select v-model="selectedCategory" class="px-4 py-2 border rounded-lg">
          <option value="all">All Categories</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
        <select v-model="sortOption" class="px-4 py-2 border rounded-lg mx-10">
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <UiSecondCard :products="filteredProducts" :onView="viewProduct" />

      
    </div>
  </div>
</template>
