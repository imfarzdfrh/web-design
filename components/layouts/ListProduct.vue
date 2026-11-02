<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '~/stores/product'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps<{ title: string; subtitle?: string; category?: string }>()
const productStore = useProductStore()
const products = computed(() => {
  const filtered = props.category
    ? productStore.products.filter(product => product.categories.includes(props.category!))
    : productStore.products
  return filtered.slice(0, 4)
})
const catalogLink = computed(() => props.category ? { path: '/productpage', query: { category: props.category } } : { path: '/productpage' })
</script>
<template>
  <section v-if="products.length" class="scroll-mt-28 py-10 sm:py-14" :aria-label="title">
    <div class="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div><p class="eyebrow">Handpicked for you</p><h2 class="mt-2 text-2xl font-bold sm:text-3xl">{{ title }}</h2><p v-if="subtitle" class="mt-2 text-sm text-muted">{{ subtitle }}</p></div>
      <NuxtLink :to="catalogLink" class="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">View collection <ArrowRightIcon class="size-4" /></NuxtLink>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <UiMainCard v-for="item in products" :key="item.id"
        :id="item.id" :name="item.name" :logo="item.logo" :logodark="item.logodark"
        :title="item.title" :description="item.description" :price="item.price" />
    </div>
  </section>
</template>
