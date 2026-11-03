<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useProductStore } from '~/stores/product'
import { ShoppingBagIcon, TrashIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
const cart = useCartStore()
const productStore = useProductStore()

// Older persisted carts only contain the standard logo. Recover the dark
// version from the current catalog without clearing the customer's cart.
function darkLogoFor(id: number, savedDarkLogo?: string) {
  return savedDarkLogo || productStore.products.find(product => product.id === id)?.logodark
}
const hasItems = computed(() => cart.cartItems.length > 0)
const money = (amount: number | string) => '$' + (Number(amount) || 0).toFixed(2)
useSeoMeta({ title: 'Shopping cart | MySite' })
</script>
<template>
  <section class="page-shell py-12 sm:py-16">
    <p class="eyebrow">Your selection</p><h1 class="mt-2 text-4xl font-bold sm:text-5xl">Your shopping cart</h1>
    <p class="mt-3 text-sm text-muted">Review the tools you picked before you continue.</p>
    <div v-if="!hasItems" class="surface mx-auto mt-10 max-w-2xl rounded-[32px] px-6 py-16 text-center">
      <span class="mx-auto flex size-20 items-center justify-center rounded-3xl bg-[var(--accent-soft)] text-[var(--accent)]"><ShoppingBagIcon class="size-10" /></span>
      <h2 class="mt-6 text-2xl font-bold">Your cart is waiting for inspiration.</h2>
      <p class="mt-3 text-sm text-muted">Start exploring and add something you love.</p>
      <NuxtLink to="/productpage" class="button-primary mt-7 inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold">Explore products</NuxtLink>
    </div>
    <div v-else class="mt-10 grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div class="space-y-4">
        <article v-for="item in cart.cartItems" :key="item.id" class="surface flex flex-wrap items-center gap-5 rounded-[26px] p-5 sm:flex-nowrap">
          <NuxtLink :to="'/product/' + item.id" class="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-[#eae8fc] p-4 dark:bg-[#333253]">
            <UiProductLogo
              :name="item.name"
              :logo="item.logo || item.image"
              :logodark="darkLogoFor(item.id, item.logodark)"
              class="size-full"
            />
          </NuxtLink>
          <div class="min-w-0 flex-1">
            <NuxtLink :to="'/product/' + item.id" class="text-lg font-bold hover:text-[var(--accent)]">{{ item.name }}</NuxtLink>
            <p class="mt-1 text-xs text-muted">{{ item.title }}</p><p class="mt-3 font-bold">{{ money(item.price) }}</p>
          </div>
          <div class="flex w-full items-center justify-between gap-3 sm:w-auto sm:flex-col sm:items-end">
            <button type="button" class="rounded-xl p-2 text-[#e05d70] hover:bg-[#e05d70]/10" :aria-label="'Remove ' + item.name" @click="cart.removeFromCart(item.id)"><TrashIcon class="size-5" /></button>
            <div class="flex items-center rounded-xl border border-[var(--stroke)]">
              <button type="button" class="p-2" :aria-label="'Decrease ' + item.name" :disabled="item.quantity <= 1" @click="cart.setQuantity(item.id, item.quantity - 1)"><MinusIcon class="size-4" /></button>
              <span class="min-w-8 text-center text-sm font-bold">{{ item.quantity }}</span>
              <button type="button" class="p-2" :aria-label="'Increase ' + item.name" :disabled="item.quantity >= 99" @click="cart.setQuantity(item.id, item.quantity + 1)"><PlusIcon class="size-4" /></button>
            </div>
          </div>
        </article>
        <NuxtLink to="/productpage" class="inline-flex items-center gap-2 pt-3 text-sm font-bold text-[var(--accent)]"><UiSimpleArrow direction="left" class="size-4" /> Continue shopping</NuxtLink>
      </div>
      <aside class="surface h-fit rounded-[28px] p-7 lg:sticky lg:top-28">
        <h2 class="text-xl font-bold">Order summary</h2>
        <div class="mt-7 flex justify-between text-sm text-muted"><span>{{ cart.itemCount }} items</span><span>{{ money(cart.subtotal) }}</span></div>
        <div class="my-6 border-t border-[var(--stroke)]"></div>
        <div class="flex justify-between text-lg font-bold"><span>Subtotal</span><span>{{ money(cart.subtotal) }}</span></div>
        <p class="mt-5 rounded-2xl bg-[var(--accent-soft)] p-4 text-xs leading-6 text-muted">Checkout is not connected yet. Your cart is saved locally while you browse.</p>
        <button type="button" disabled class="mt-5 w-full rounded-2xl bg-[#b5b9c7] px-5 py-4 text-sm font-bold text-white dark:bg-[#555e79]">Checkout coming soon</button>
        <button type="button" class="mx-auto mt-5 block text-xs font-semibold text-muted hover:text-[#df647c]" @click="cart.clearCart()">Clear cart</button>
      </aside>
    </div>
  </section>
</template>
