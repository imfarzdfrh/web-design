<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  ArrowLeftOnRectangleIcon,
  ClockIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserCircleIcon
} from '@heroicons/vue/24/outline'
import { useAuthStore } from '~/stores/auth'
import { useCartStore } from '~/stores/cart'
import { useProductStore } from '~/stores/product'

useSeoMeta({
  title: 'Account overview | MySite',
  description: 'Review your account preview and saved shopping cart.'
})

const auth = useAuthStore()
const cart = useCartStore()
const products = useProductStore()
const loaded = ref(false)
const activeTab = ref<'overview' | 'cart' | 'orders' | 'profile'>('overview')
const isSignedIn = computed(() => Boolean(auth.user))
const cartItems = computed(() => cart.cartItems)
const subtotalLabel = computed(() => '$' + (Number(cart.subtotal) || 0).toFixed(2))
const sections = [
  { key: 'overview' as const, label: 'Overview', icon: Squares2X2Icon },
  { key: 'cart' as const, label: 'Saved cart', icon: ShoppingBagIcon },
  { key: 'orders' as const, label: 'Orders', icon: ClockIcon },
  { key: 'profile' as const, label: 'Account', icon: UserCircleIcon }
]

onMounted(() => {
  auth.fetchUser()
  loaded.value = true
})

function logOut() {
  auth.logout()
  navigateTo('/login')
}

function resolveDarkLogo(id: number, stored?: string) {
  return stored || products.products.find(product => product.id === id)?.logodark
}
</script>

<template>
  <div class="page-shell py-10 sm:py-16">
    <div class="mb-9">
      <p class="eyebrow">YOUR SPACE</p>
      <h1 class="mt-2 text-3xl font-bold sm:text-5xl">Account dashboard<span class="text-[var(--accent)]">.</span></h1>
      <p class="mt-3 max-w-2xl text-sm leading-7 text-muted">
        A simple place to review your current selections and account details.
      </p>
    </div>

    <div v-if="!loaded" class="surface rounded-[28px] p-10 text-sm text-muted" role="status">
      Loading account preview…
    </div>

    <div v-else-if="!isSignedIn" class="surface mx-auto max-w-2xl rounded-[30px] px-6 py-14 text-center sm:px-10">
      <span class="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
        <UserCircleIcon class="size-9" />
      </span>
      <h2 class="mt-6 text-2xl font-bold">Sign in to view your account</h2>
      <p class="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
        The account area is currently a demo preview. Orders and personal account data will require a secure backend.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <NuxtLink to="/login" class="button-primary rounded-2xl px-6 py-3.5 text-sm font-bold">Sign in</NuxtLink>
        <NuxtLink to="/productpage" class="button-quiet rounded-2xl px-6 py-3.5 text-sm font-semibold">Browse products</NuxtLink>
      </div>
    </div>

    <div v-else class="grid gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside class="surface h-fit rounded-[28px] p-4 lg:sticky lg:top-28">
        <div class="flex items-center gap-3 border-b border-[var(--stroke)] px-3 pb-5 pt-2">
          <div class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <UserCircleIcon class="size-7" />
          </div>
          <div class="min-w-0">
            <p class="text-sm font-bold">Demo account</p>
            <p class="truncate text-xs text-muted">{{ auth.user?.email }}</p>
          </div>
        </div>
        <nav aria-label="Account sections" class="mt-4 grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-1">
          <button v-for="section in sections" :key="section.key" type="button"
            :aria-current="activeTab === section.key ? 'page' : undefined"
            class="flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold transition"
            :class="activeTab === section.key ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-muted hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]'"
            @click="activeTab = section.key">
            <component :is="section.icon" class="size-5 shrink-0" aria-hidden="true" />
            {{ section.label }}
          </button>
        </nav>
        <button type="button" class="mt-5 flex w-full items-center gap-2 border-t border-[var(--stroke)] px-3 pt-5 text-sm font-semibold text-muted hover:text-red-500" @click="logOut">
          <ArrowLeftOnRectangleIcon class="size-5" /> Sign out
        </button>
      </aside>

      <div class="min-w-0 space-y-6">
        <div class="rounded-2xl border border-[var(--stroke)] bg-[var(--accent-soft)] px-5 py-4 text-xs leading-6 text-muted">
          <span class="inline-flex items-center gap-2 font-bold text-[var(--ink)]"><InformationCircleIcon class="size-4 text-[var(--accent)]" /> Demo account</span>
          <p class="mt-1">This is a frontend preview. No order history, real identity verification, or payment details are available yet.</p>
        </div>

        <template v-if="activeTab === 'overview'">
          <div class="surface rounded-[28px] p-6 sm:p-8">
            <div class="flex items-start justify-between gap-3">
              <div><p class="eyebrow">WELCOME BACK</p><h2 class="mt-2 text-2xl font-bold">Your digital space</h2></div>
              <SparklesIcon class="size-8 text-[var(--accent)]" />
            </div>
            <p class="mt-3 text-sm text-muted">Discover new tools and pick up where you left off.</p>
            <NuxtLink to="/productpage" class="button-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold">
              Explore products <UiSimpleArrow class="size-4" />
            </NuxtLink>
          </div>
          <div class="grid gap-4 sm:grid-cols-3">
            <div class="surface rounded-[25px] p-6">
              <ShoppingBagIcon class="size-6 text-[var(--accent)]" />
              <p class="mt-5 text-3xl font-bold">{{ cart.itemCount }}</p>
              <p class="mt-1 text-sm text-muted">Items in cart</p>
            </div>
            <div class="surface rounded-[25px] p-6">
              <SparklesIcon class="size-6 text-[var(--accent)]" />
              <p class="mt-5 text-3xl font-bold">{{ subtotalLabel }}</p>
              <p class="mt-1 text-sm text-muted">Saved cart subtotal</p>
            </div>
            <div class="surface rounded-[25px] p-6">
              <ClockIcon class="size-6 text-[var(--accent)]" />
              <p class="mt-5 text-3xl font-bold">—</p>
              <p class="mt-1 text-sm text-muted">Orders not connected</p>
            </div>
          </div>
          <div class="surface rounded-[28px] p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h2 class="text-xl font-bold">Recently saved</h2>
              <button type="button" class="text-sm font-semibold text-[var(--accent)]" @click="activeTab = 'cart'">View saved cart</button>
            </div>
            <div v-if="cartItems.length" class="mt-5 grid gap-3 sm:grid-cols-2">
              <NuxtLink v-for="item in cartItems.slice(0, 4)" :key="item.id" :to="'/product/' + item.id"
                class="flex items-center gap-4 rounded-2xl border border-[var(--stroke)] p-3 transition hover:border-[var(--interaction-border)]">
                <span class="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] p-2">
                  <UiProductLogo :name="item.name" :logo="item.logo || item.image" :logodark="resolveDarkLogo(item.id, item.logodark)" class="size-full" />
                </span>
                <span class="min-w-0"><strong class="block truncate text-sm">{{ item.name }}</strong><span class="text-xs text-muted">Quantity: {{ item.quantity }}</span></span>
              </NuxtLink>
            </div>
            <div v-else class="mt-5 rounded-2xl border border-dashed border-[var(--stroke)] p-8 text-center">
              <p class="text-sm text-muted">No products saved yet.</p>
              <NuxtLink to="/productpage" class="mt-4 inline-block text-sm font-bold text-[var(--accent)]">Find a product</NuxtLink>
            </div>
          </div>
        </template>

        <section v-else-if="activeTab === 'cart'" class="surface rounded-[28px] p-6 sm:p-8">
          <h2 class="text-2xl font-bold">Your saved cart</h2>
          <p class="mt-2 text-sm text-muted">These items are stored in this browser, not as completed orders.</p>
          <div v-if="cartItems.length" class="mt-6 divide-y divide-[var(--stroke)]">
            <div v-for="item in cartItems" :key="item.id" class="flex items-center gap-4 py-4">
              <span class="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] p-2">
                <UiProductLogo :name="item.name" :logo="item.logo || item.image" :logodark="resolveDarkLogo(item.id, item.logodark)" class="size-full" />
              </span>
              <div class="min-w-0 flex-1"><p class="truncate text-sm font-bold">{{ item.name }}</p><p class="text-xs text-muted">Quantity: {{ item.quantity }}</p></div>
              <span class="text-sm font-bold">{{ '$' + (Number(item.price) * item.quantity).toFixed(2) }}</span>
            </div>
          </div>
          <p v-else class="mt-6 text-sm text-muted">Your cart is empty.</p>
          <NuxtLink to="/cart" class="button-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold">
            Open cart <UiSimpleArrow class="size-4" />
          </NuxtLink>
        </section>

        <section v-else-if="activeTab === 'orders'" class="surface rounded-[28px] p-8 text-center sm:p-12">
          <ClockIcon class="mx-auto size-12 text-[var(--accent)]" />
          <h2 class="mt-5 text-2xl font-bold">Order history is coming soon</h2>
          <p class="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
            Once orders are connected to the backend, this area will show their status, dates, and details. No transactions are being recorded by this demo.
          </p>
          <NuxtLink to="/productpage" class="button-quiet mt-7 inline-flex rounded-xl px-5 py-3 text-sm font-semibold">Explore the catalog</NuxtLink>
        </section>

        <section v-else class="surface rounded-[28px] p-6 sm:p-8">
          <h2 class="text-2xl font-bold">Account information</h2>
          <p class="mt-2 text-sm text-muted">Read-only details for this demo session.</p>
          <div class="mt-7 rounded-2xl border border-[var(--stroke)] p-5">
            <p class="text-xs font-semibold text-muted">Email</p>
            <p class="mt-2 break-all text-sm font-bold">{{ auth.user?.email }}</p>
          </div>
          <div class="mt-5 rounded-2xl border border-[var(--stroke)] p-5">
            <p class="text-xs font-semibold text-muted">Session type</p>
            <p class="mt-2 text-sm font-bold">Demo preview — not a verified account</p>
          </div>
          <div class="mt-5 flex flex-wrap items-center gap-3">
            <span class="text-sm text-muted">Appearance</span>
            <UiThemeSwitcher />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
