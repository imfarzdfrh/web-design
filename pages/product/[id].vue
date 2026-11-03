<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'
import { ShoppingBagIcon, PlusIcon, MinusIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
const route = useRoute()
const productStore = useProductStore()
const cart = useCartStore()
const product = computed(() => productStore.products.find(item => item.id === Number(route.params.id)) ?? null)
const quantity = ref(1)
const added = ref(false)
const unitPrice = computed(() => Number(product.value?.price ?? 0))
const total = computed(() => unitPrice.value * quantity.value)
const money = (amount: number) => '$' + amount.toFixed(2)
useHead(() => ({ title: product.value ? product.value.name + ' | MySite' : 'Product not found | MySite' }))
function addToCart() {
  if (!product.value) return
  cart.addToCart(product.value, quantity.value)
  added.value = true
}
</script>
<template>
  <div class="page-shell py-10 sm:py-14">
    <NuxtLink to="/productpage" class="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-[var(--accent)]"><UiSimpleArrow direction="left" class="size-4" /> Back to collection</NuxtLink>
    <div v-if="product">
      <div class="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div class="surface flex min-h-[330px] items-center justify-center overflow-hidden rounded-[34px] bg-gradient-to-br from-[#ebe8ff] to-[#dff8fc] p-8 dark:from-[#292a4a] dark:to-[#203f4b]">
          <img :src="product.image" :alt="product.name" class="max-h-[350px] w-full rounded-2xl object-contain shadow-[0_25px_60px_rgba(11,15,30,.18)]" />
        </div>
        <div class="self-center">
          <p class="eyebrow">Digital product</p>
          <div class="mt-3 flex items-center gap-4">
            <span class="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] p-2.5">
              <UiProductLogo :name="product.name" :logo="product.logo" :logodark="product.logodark" class="size-full" />
            </span>
            <h1 class="text-4xl font-bold sm:text-5xl">{{ product.name }}</h1>
          </div>
          <p class="mt-4 max-w-xl text-base leading-8 text-muted">{{ product.title }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="category in product.categories" :key="category" class="rounded-full border border-[var(--stroke)] bg-[var(--panel)] px-3 py-1.5 text-xs font-semibold text-muted">{{ category }}</span>
          </div>
          <div class="mt-9"><p class="text-xs font-semibold text-muted">Price per item</p><p class="mt-1 text-4xl font-bold">{{ money(unitPrice) }}</p></div>
          <div class="mt-8">
            <label class="mb-3 block text-sm font-bold">Quantity</label>
            <div class="inline-flex items-center gap-4 rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] p-2">
              <button type="button" class="button-quiet flex size-10 items-center justify-center rounded-xl" aria-label="Decrease quantity" :disabled="quantity <= 1" @click="quantity = Math.max(1, quantity - 1)"><MinusIcon class="size-5" /></button>
              <span class="min-w-7 text-center font-bold">{{ quantity }}</span>
              <button type="button" class="button-quiet flex size-10 items-center justify-center rounded-xl" aria-label="Increase quantity" :disabled="quantity >= 99" @click="quantity = Math.min(99, quantity + 1)"><PlusIcon class="size-5" /></button>
            </div>
          </div>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" class="button-primary inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold" @click="addToCart">
              <CheckCircleIcon v-if="added" class="size-5" /><ShoppingBagIcon v-else class="size-5" /> {{ added ? 'Add another' : 'Add to cart' }} · {{ money(total) }}
            </button>
            <NuxtLink v-if="added" to="/cart" class="button-quiet inline-flex items-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold">View cart <UiSimpleArrow class="size-5" /></NuxtLink>
          </div>
        </div>
      </div>
      <section class="surface mt-12 rounded-[28px] p-7 sm:p-10">
        <h2 class="text-2xl font-bold">About this product</h2>
        <p class="mt-4 max-w-4xl whitespace-pre-line text-sm leading-8 text-muted">{{ product.description }}</p>
      </section>
    </div>
    <div v-else class="surface rounded-[32px] px-6 py-20 text-center">
      <h1 class="text-3xl font-bold">Product not found</h1>
      <p class="mt-3 text-sm text-muted">The product you're looking for isn't in our collection.</p>
      <NuxtLink to="/productpage" class="button-primary mt-7 inline-flex rounded-2xl px-6 py-4 text-sm font-bold">Browse all products</NuxtLink>
    </div>
  </div>
</template>
