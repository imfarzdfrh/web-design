<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { useCartStore } from '~/stores/cart'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon, SparklesIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

const auth = useAuthStore()
const cart = useCartStore()
const { isLoggedIn } = storeToRefs(auth)
const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)
const categoriesOpen = ref(false)
const searchQuery = ref('')
const cartCount = computed(() => cart.itemCount)
const categories = [
  { label: 'AI assistants', to: '/productpage?category=AI%20Chatbot' },
  { label: 'Video & creative', to: '/productpage?category=AI%20Video' },
  { label: 'Operating systems', to: '/productpage?category=Operating%20System' },
  { label: 'All products', to: '/productpage' }
]
onMounted(() => auth.fetchUser())
watch(() => route.fullPath, () => {
  menuOpen.value = false
  categoriesOpen.value = false
  if (route.path === '/search') searchQuery.value = String(route.query.q || '')
})
function handleSearch() {
  const q = searchQuery.value.trim()
  if (q) router.push({ path: '/search', query: { q } })
}
function logout() { auth.logout(); router.push('/') }
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[var(--stroke)] bg-[var(--page)]/90 backdrop-blur-2xl">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a>
    <div class="page-shell flex h-[76px] items-center gap-4 lg:gap-8">
      <NuxtLink to="/" class="group flex shrink-0 items-center gap-3" aria-label="MySite home">
        <span class="button-primary flex size-11 items-center justify-center rounded-2xl"><SparklesIcon class="size-6" aria-hidden="true" /></span>
        <span class="flex flex-col leading-tight">
          <strong class="font-['Space_Grotesk'] text-xl tracking-[-.06em]">MySite<span class="text-[#7566ee]">.</span></strong>
          <span class="text-[10px] font-semibold uppercase tracking-[.18em] text-muted">Digital marketplace</span>
        </span>
      </NuxtLink>

      <nav aria-label="Main navigation" class="hidden items-center gap-6 lg:flex">
        <NuxtLink to="/productpage" class="text-sm font-semibold text-muted hover:text-[var(--accent)]">Explore</NuxtLink>
        <div class="relative">
          <button type="button" class="flex items-center gap-1 text-sm font-semibold text-muted hover:text-[var(--accent)]"
            aria-haspopup="true" :aria-expanded="categoriesOpen" @click="categoriesOpen = !categoriesOpen">
            Categories <UiSimpleArrow :direction="categoriesOpen ? 'up' : 'down'" class="size-4" />
          </button>
          <div v-if="categoriesOpen" class="glass absolute left-0 top-11 w-56 rounded-2xl p-2 shadow-2xl">
            <NuxtLink v-for="category in categories" :key="category.to" :to="category.to"
              class="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-[var(--accent-soft)]">
              {{ category.label }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/about" class="text-sm font-semibold text-muted hover:text-[var(--accent)]">About</NuxtLink>
      </nav>

      <form class="relative ml-auto hidden w-full max-w-[360px] items-center md:flex" role="search" @submit.prevent="handleSearch">
        <MagnifyingGlassIcon class="pointer-events-none absolute left-4 size-5 text-muted" aria-hidden="true" />
        <input v-model="searchQuery" aria-label="Search products" type="search" placeholder="Search digital products..."
          class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] py-3 pl-11 pr-4 text-sm " />
      </form>

      <div class="ml-auto flex items-center gap-2 md:ml-0">
        <UiThemeSwitcher />
        <NuxtLink to="/cart" class="button-quiet relative flex size-10 items-center justify-center rounded-xl" aria-label="Shopping cart">
          <ShoppingBagIcon class="size-5" aria-hidden="true" />
          <span v-if="cartCount" class="absolute -right-1 -top-1 flex min-w-5 h-5 items-center justify-center rounded-full bg-[#7865ef] px-1 text-[10px] font-bold text-white">{{ cartCount }}</span>
        </NuxtLink>
        <NuxtLink v-if="!isLoggedIn" to="/login" class="button-primary hidden rounded-xl px-5 py-2.5 text-sm font-bold sm:inline-flex">Sign in</NuxtLink>
        <NuxtLink v-else to="/dashboard" class="button-quiet hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold sm:inline-flex">
          <UserCircleIcon class="size-5" /> Account
        </NuxtLink>
        <button type="button" class="button-quiet flex size-10 items-center justify-center rounded-xl lg:hidden"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="menuOpen" aria-controls="mobile-navigation" @click="menuOpen = !menuOpen">
          <XMarkIcon v-if="menuOpen" class="size-5" /><Bars3Icon v-else class="size-5" />
        </button>
      </div>
    </div>
    <div v-if="menuOpen" id="mobile-navigation" class="glass border-x-0 border-b-0 p-4 lg:hidden">
      <form class="mb-4 flex gap-2 md:hidden" role="search" @submit.prevent="handleSearch">
        <input v-model="searchQuery" type="search" aria-label="Search products" placeholder="Search products"
          class="min-w-0 flex-1 rounded-xl border border-[var(--stroke)] bg-[var(--panel)] px-4 py-3 text-sm" />
        <button type="submit" class="button-primary rounded-xl px-4" aria-label="Search"><MagnifyingGlassIcon class="size-5" /></button>
      </form>
      <nav aria-label="Mobile navigation" class="grid gap-1">
        <NuxtLink to="/productpage" class="rounded-xl p-3 font-semibold hover:bg-[var(--accent-soft)]">All products</NuxtLink>
        <NuxtLink v-for="category in categories.slice(0, 3)" :key="category.to" :to="category.to" class="rounded-xl p-3 text-sm text-muted hover:bg-[var(--accent-soft)]">{{ category.label }}</NuxtLink>
        <NuxtLink to="/about" class="rounded-xl p-3 font-semibold hover:bg-[var(--accent-soft)]">About</NuxtLink>
        <NuxtLink to="/contact" class="rounded-xl p-3 font-semibold hover:bg-[var(--accent-soft)]">Contact</NuxtLink>
        <NuxtLink v-if="!isLoggedIn" to="/login" class="rounded-xl p-3 font-semibold text-[var(--accent)] sm:hidden">Sign in</NuxtLink>
        <template v-else>
          <NuxtLink to="/dashboard" class="rounded-xl p-3 text-sm font-semibold text-[var(--accent)]">My account</NuxtLink>
          <button type="button" class="rounded-xl p-3 text-left text-sm text-muted" @click="logout">Sign out</button>
        </template>
      </nav>
    </div>
  </header>
</template>
