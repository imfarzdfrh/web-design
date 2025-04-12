<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'

// auth store
const auth = useAuthStore()
const { isLoggedIn } = storeToRefs(auth)

// fetch user after reload
onMounted(() => {
  auth.fetchUser()
})

// menus
const isOpen = ref(false)
const isProductOpen = ref(false)
const isUserMenuOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
function toggleProductMenu() {
  isProductOpen.value = !isProductOpen.value
}
function toggleUserMenu() {
  isUserMenuOpen.value = !isUserMenuOpen.value
}
function handleLogout() {
  auth.logout()
  isUserMenuOpen.value = false
}

// links
const links = [
  {
    label: 'Product',
    to: '#',
    submenu: [
      { label: 'Feature 1', to: '/' },
      { label: 'Feature 2', to: '/' },
      { label: 'Feature 3', to: '/' }
    ]
  },
  { label: 'About', to: '/' },
  { label: 'Contact', to: '/' }
]
</script>

<template>
  <nav
    class="px-6 py-4 transition-all bg-white shadow-md dark:bg-darkBackground navbar dark:text-darkText">
    <div class="container flex items-center justify-between mx-auto relative">
      <!-- Left side: Logo + Nav Links -->
      <div class="flex items-center space-x-7">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-gray-200">
          MySite
        </NuxtLink>

        <!-- Nav Links (Home, About, Contact, Product with submenu) -->
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
                class="flex items-center space-x-2 text-gray-800 transition dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
                <span>{{ link.label }}</span>
                <!-- فلش کنار Product -->
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
              <div
                v-show="isProductOpen"
                class="absolute left-0 mt-2 w-48 bg-white dark:bg-darkBackground rounded-md shadow-lg overflow-hidden transition-all transform scale-95 origin-top scale-100"
                @click.stop>
                <ul class="space-y-2 py-2">
                  <li v-for="subLink in link.submenu" :key="subLink.to">
                    <NuxtLink
                      :to="subLink.to"
                      class="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2">
                      {{ subLink.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
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
            class="relative flex items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">Open user menu</span>
            <img
              class="size-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" />
          </button>

          <transition name="fade">
            <div
              v-if="isUserMenuOpen"
              class="absolute right-0 z-10 mt-2 w-48 bg-white dark:bg-darkBackground rounded-md shadow-lg py-1 ring-1 ring-black/5 focus:outline-hidden">
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
                    class="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </transition>
        </li>
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
    <div v-if="isOpen" class="px-4 mt-4 space-y-4 md:hidden">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        @click="toggleMenu">
        {{ link.label }}
      </NuxtLink>

      <UiThemeSwitcher />

      <UiBaseButton color="primary" size="small">Sign up</UiBaseButton>
    </div>
    <uiThemeSwitcher class="absolute right-0 top-3 mx-4" />
  </nav>
</template>

<style scoped>
/* Optional: Add transitions for smooth opening/closing of dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
