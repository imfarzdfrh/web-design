<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useProductStore } from '~/stores/product'
import { useRouter } from 'vue-router'
import UiSecondCard from '~/components/ui/SecondCard.vue'

definePageMeta({
  name: 'productpage',
  path: '/productpage'
})

const store = useProductStore()
const router = useRouter()

/* Filters */
const searchTerm = ref('')
const selectedCategory = ref('all')
const sortOption = ref('default')
const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)

/* Categories */
const categories = computed(() => {
  const cats = store.products.map(p => p.category)
  return ['all', ...new Set(cats)]
})

/* Debounced search */
const debouncedSearch = ref('')
let timeout: any
watch(searchTerm, (val) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    debouncedSearch.value = val.toLowerCase()
  }, 300)
})

/* Filtered Products */
const filteredProducts = computed(() => {
  let result = [...store.products]

  if (selectedCategory.value !== 'all') {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  if (debouncedSearch.value) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(debouncedSearch.value) ||
      p.description.toLowerCase().includes(debouncedSearch.value)
    )
  }

  if (minPrice.value !== null) {
    result = result.filter(p => p.price >= minPrice.value!)
  }

  if (maxPrice.value !== null) {
    result = result.filter(p => p.price <= maxPrice.value!)
  }

  if (sortOption.value === 'price-asc') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortOption.value === 'price-desc') {
    result.sort((a, b) => b.price - a.price)
  }

  return result
})

function viewProduct(id: number) {
  router.push(`/product/${id}`)
}
</script>

<template>
  <div class="min-h-screen bg-lightBackground dark:bg-darkBackground mt-10">
    <div class="container mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

      <!-- Sidebar -->
      <aside class="lg:col-span-1 bg-white dark:bg-[#001d3d] rounded-2xl p-6 shadow-md space-y-6">
        
        <!-- Search -->
        <div>
          <h3 class="font-semibold mb-4">Search</h3>
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search products..."
            class="w-full px-4 py-3 mt-2 dark:bg-darkBackground rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <!-- Category -->
        <div>
          <h3 class="font-semibold mb-4">Category</h3>
          <select v-model="selectedCategory" class="w-full dark:bg-darkBackground px-4 py-3 rounded-lg">
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <!-- Price Range -->
        <div>
          <h3 class="font-semibold mb-4">Price Range</h3>
          <div class="flex gap-3">
            <input
              type="number"
              v-model="minPrice"
              placeholder="Min"
              class="w-full px-3 py-2 rounded-lg dark:bg-darkBackground"
            />
            <input
              type="number"
              v-model="maxPrice"
              placeholder="Max"
              class="w-full px-3 py-2 rounded-lg dark:bg-darkBackground"
            />
          </div>
        </div>

        <!-- Sort -->
        <div>
          <h3 class="font-semibold mb-4">Sort By</h3>
          <select v-model="sortOption" class="w-full px-4 py-3 rounded-lg dark:bg-darkBackground">
            <option value="default">Default</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>

      </aside>

      <!-- Products -->
      <section class="lg:col-span-3">
        <UiSecondCard
          :products="filteredProducts"
          :onView="viewProduct"
        />

        <div v-if="!filteredProducts.length" class="text-center py-20 opacity-60">
          No products found 😕
        </div>
      </section>

    </div>
  </div>
</template>