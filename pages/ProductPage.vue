<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useProductStore } from '~/stores/product'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'

definePageMeta({ name: 'productpage', path: '/productpage' })
useSeoMeta({ title: 'Explore products | MySite', description: 'Browse AI tools, creative software and more.' })
const productStore = useProductStore()
const route = useRoute()
const search = ref('')
const selectedCategory = ref(typeof route.query.category === 'string' ? route.query.category : 'all')
const sort = ref('featured')
const categories = computed(() => [
  'all',
  ...new Set(productStore.products.flatMap(product => product.categories.filter(c => !['Popular', 'Top Sellers'].includes(c))))
])
watch(() => route.query.category, category => {
  selectedCategory.value = typeof category === 'string' ? category : 'all'
})
const products = computed(() => {
  const q = search.value.trim().toLowerCase()
  const result = productStore.products.filter(product => {
    return (selectedCategory.value === 'all' || product.categories.includes(selectedCategory.value))
      && (!q || [product.name, product.title, product.description].some(field => field.toLowerCase().includes(q)))
  })
  if (sort.value === 'price-asc') return [...result].sort((a, b) => Number(a.price) - Number(b.price))
  if (sort.value === 'price-desc') return [...result].sort((a, b) => Number(b.price) - Number(a.price))
  return result
})
</script>
<template>
  <div class="page-shell py-10 sm:py-16">
    <div class="mb-9">
      <p class="eyebrow">The collection</p>
      <h1 class="mt-2 text-4xl font-bold sm:text-5xl">Find your next favorite tool.</h1>
      <p class="mt-4 max-w-2xl text-base leading-7 text-muted">Discover everything from smart assistants to creative software, in one curated catalog.</p>
    </div>
    <div class="grid gap-6 lg:grid-cols-[275px_minmax(0,1fr)]">
      <aside class="surface h-fit rounded-[28px] p-5 lg:sticky lg:top-28">
        <div class="mb-5 flex items-center gap-2"><AdjustmentsHorizontalIcon class="size-5 text-[var(--accent)]" /><h2 class="font-bold">Filter products</h2></div>
        <label for="catalog-search" class="mb-2 block text-xs font-semibold text-muted">Search</label>
        <div class="relative">
          <MagnifyingGlassIcon class="absolute left-3 top-3 size-5 text-muted" />
          <input id="catalog-search" v-model="search" type="search" placeholder="Product name..."
            class="w-full rounded-xl border border-[var(--stroke)] bg-[var(--page)] py-3 pl-10 pr-3 text-sm" />
        </div>
        <label for="category-filter" class="mb-2 mt-6 block text-xs font-semibold text-muted">Category</label>
        <select id="category-filter" v-model="selectedCategory" class="w-full rounded-xl border border-[var(--stroke)] bg-[var(--page)] px-3 py-3 text-sm">
          <option v-for="category in categories" :key="category" :value="category">{{ category === 'all' ? 'All products' : category }}</option>
        </select>
        <label for="sort-filter" class="mb-2 mt-6 block text-xs font-semibold text-muted">Sort by</label>
        <select id="sort-filter" v-model="sort" class="w-full rounded-xl border border-[var(--stroke)] bg-[var(--page)] px-3 py-3 text-sm">
          <option value="featured">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option>
        </select>
        <button type="button" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]" @click="search = ''; selectedCategory = 'all'; sort = 'featured'">
          <XMarkIcon class="size-4" /> Clear filters
        </button>
      </aside>
      <section aria-label="Catalog products">
        <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-bold">Browse products</h2>
          <span class="text-sm text-muted">{{ products.length }} {{ products.length === 1 ? 'product' : 'products' }} found</span>
        </div>
        <div v-if="products.length" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <UiMainCard v-for="product in products" :key="product.id"
            :id="product.id" :name="product.name" :logo="product.logo" :logodark="product.logodark" :title="product.title" :description="product.description" :price="product.price" />
        </div>
        <div v-else class="surface rounded-[28px] p-12 text-center">
          <MagnifyingGlassIcon class="mx-auto size-10 text-[var(--accent)]" />
          <h3 class="mt-4 text-xl font-bold">Nothing matched this search</h3>
          <p class="mt-2 text-sm text-muted">Try another keyword or clear the filters.</p>
          <button type="button" class="button-primary mt-6 rounded-xl px-6 py-3 text-sm font-semibold" @click="search = ''; selectedCategory = 'all'; sort = 'featured'">See all products</button>
        </div>
      </section>
    </div>
  </div>
</template>
