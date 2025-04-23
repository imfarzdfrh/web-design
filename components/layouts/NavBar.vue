<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'

const auth = useAuthStore()
const { isLoggedIn } = storeToRefs(auth)

onMounted(() => {
  auth.fetchUser()
})

const isOpen = ref(false)
const isProductOpen = ref(false)
const isUserMenuOpen = ref(false)
const searchQuery = ref('') // This will hold the search input

function toggleMenu() {
  isOpen.value = !isOpen.value
}
function toggleProductMenu() {
  isProductOpen.value = !isProductOpen.value
  console.log('isProductOpen:', isProductOpen.value)
}
function toggleUserMenu() {
  isUserMenuOpen.value = !isUserMenuOpen.value
}
function handleLogout() {
  auth.logout()
  isUserMenuOpen.value = false
}

const links = [
  {
    label: 'Category',
    to: '#',
    submenu: [
      { label: 'Chat bot', to: '/' },
      { label: 'Image generator', to: '/' },
      { label: 'Video generator', to: '/' }
    ]
  },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

function handleSearch() {
  if (searchQuery.value.trim() !== '') {
    console.log('Searching for:', searchQuery.value)
  }
}
</script>

<template>
  <nav
    class="px-6 py-4 transition-all shadow-md dark:bg-darkBackground navbar dark:text-darkText bg-lightBackground">
    <div class="container relative flex items-center justify-between mx-auto">
      <div class="flex items-center space-x-7">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-gray-200">
          MySite
        </NuxtLink>

        <!-- Nav Links -->
        <ul class="items-center hidden space-x-6 md:flex">
          <li v-for="link in links" :key="link.to" class="relative">
            <NuxtLink
              v-if="!link.submenu"
              :to="link.to"
              class="text-gray-800 transition dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
              {{ link.label }}
            </NuxtLink>
            <div v-else class="relative">
              <!-- Product Dropdown Button -->
              <button
                @click="toggleProductMenu"
                class="flex items-center space-x-2 text-darkText transition dark:text-lightText hover:text-darkText dark:hover:text-gray-400">
                <span>{{ link.label }}</span>
                <svg
                  :class="{ 'transform rotate-180': isProductOpen }"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Submenu (Dropdown) -->
              <transition name="dropdown">
                <div
                  v-if="isProductOpen"
                  class="absolute left-0 w-48 mt-2 bg-white rounded-md shadow-lg dark:bg-darkBackground ring-1 ring-black/5 focus:outline-hidden z-10"
                  @click.stop>
                  <ul class="py-2 space-y-2">
                    <li v-for="subLink in link.submenu" :key="subLink.to">
                      <NuxtLink
                        :to="subLink.to"
                        class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                        {{ subLink.label }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </li>
        </ul>
      </div>

      <!-- Search Bar (On the right side) -->
      <div class="relative hidden md:block">
        <!-- Search Input and Icon -->
        <div class="flex items-center">
          <!-- Search Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-500 absolute left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M10 16a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
          <!-- Search Input -->
          <input
            v-model="searchQuery"
            @input="handleSearch"
            type="text"
            placeholder="Search"
            class="w-[450px] px-10 py-2 border border-gray-500 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-700 dark:bg-darkBackground dark:border-lightBackground/30 dark:text-lightText" >
        </div>
      </div>

      <!-- Right side -->
      <ul class="items-center hidden space-x-5 md:flex">
        <li v-if="!isLoggedIn">
          <NuxtLink to="/login">
            <UiBaseButton color="primary">Sign in</UiBaseButton>
          </NuxtLink>
        </li>

        <li v-else class="relative">
          <button
            @click="toggleUserMenu"
            class="relative flex items-center text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">Open user menu</span>
            <img
              class="rounded-full size-8"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" />
          </button>

          <transition name="fade">
            <div
              v-if="isUserMenuOpen"
              class="absolute right-0 z-10 w-48 py-1 mt-2 bg-white rounded-md shadow-lg dark:bg-darkBackground ring-1 ring-black/5 focus:outline-hidden">
              <ul>
                <li>
                  <NuxtLink
                    to="/profile"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100">
                    Your Profile
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/settings"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100">
                    Settings
                  </NuxtLink>
                </li>
                <li>
                  <button
                    @click="handleLogout"
                    class="block w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </transition>
        </li>
        <li>
          <NuxtLink to="/cart">
              <shopping-cartIcon class="h-6 w-6 fill-current dark:text-lightBackground" />
          </NuxtLink>
        </li>
        <UiThemeSwitcher />
      </ul>

      <!-- Mobile menu toggle button -->
      <button class="text-gray-700 md:hidden dark:text-gray-300" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <div v-if="isOpen" class="px-4 mt-10 space-y-4 md:hidden">
      <UiThemeSwitcher class="" />
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        @click="toggleMenu">
        {{ link.label }}
      </NuxtLink>
      <NuxtLink to="/login">
        <UiBaseButton color="primary" class="my-5">Sign in</UiBaseButton>
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
