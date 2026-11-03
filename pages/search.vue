<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useProductStore } from '~/stores/product'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
const route = useRoute()
const router = useRouter()
const store = useProductStore()
const searchQuery = ref(String(route.query.q || ''))
watch(() => route.query.q, q => { searchQuery.value = String(q || '') })
const products = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return q ? store.products.filter(p => [p.name, p.title, p.description].some(value => value.toLowerCase().includes(q))) : store.products
})
function submit() { router.replace({ path: '/search', query: searchQuery.value.trim() ? { q: searchQuery.value.trim() } : {} }) }
useSeoMeta({ title: 'Search products | MySite' })
</script>
<template>
  <section class="page-shell py-12 sm:py-16">
    <p class="eyebrow">Discovery</p><h1 class="mt-2 text-4xl font-bold sm:text-5xl">Search the collection</h1>
    <p class="mt-3 text-sm text-muted">Find the right product for what you want to create.</p>
    <form class="mt-8 flex max-w-2xl gap-3" role="search" @submit.prevent="submit">
      <input v-model="searchQuery" type="search" aria-label="Search products" placeholder="Try ChatGPT or Windows..."
        class="min-w-0 flex-1 rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] px-5 py-4" />
      <button type="submit" class="button-primary inline-flex items-center gap-2 rounded-2xl px-5 text-sm font-bold"><MagnifyingGlassIcon class="size-5" /> <span class="hidden sm:inline">Search</span></button>
    </form>
    <div class="mb-6 mt-12 flex items-center justify-between"><h2 class="text-xl font-bold">Results</h2><span class="text-sm text-muted">{{ products.length }} found</span></div>
    <div v-if="products.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <UiMainCard v-for="product in products" :key="product.id" :id="product.id" :name="product.name"
        :logo="product.logo" :logodark="product.logodark" :title="product.title" :price="product.price" />
    </div>
    <div v-else class="surface rounded-3xl p-12 text-center"><h3 class="text-xl font-bold">No results found</h3><p class="mt-2 text-sm text-muted">Try another product name or keyword.</p></div>
  </section>
</template>
