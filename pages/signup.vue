<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'blank',
  name: 'signup',
  path: '/signup'
})

const isLoading = ref(false)

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showAlert = ref(false)

const auth = useAuthStore()
const router = useRouter()

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    showAlert.value = true
    setTimeout(() => {
      showAlert.value = false
    }, 3000)
    return
  }

  isLoading.value = true

  await new Promise(resolve => setTimeout(resolve, 1700))

  const success = await auth.register(email.value, password.value)

  isLoading.value = false

  if (success) {
    router.push('/')
  } else {
    showAlert.value = true
    setTimeout(() => {
      showAlert.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="relative flex h-screen register-page">
    <!-- Alert notification -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-10 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-10 opacity-0">
      <div
        v-if="showAlert"
        class="fixed z-50 px-6 py-3 text-sm font-semibold text-lightText -translate-x-1/2 bg-danger rounded-lg shadow-lg top-5 left-1/2">
        Passwords do not match or there was an error during registration.
      </div>
    </transition>

    <!-- Left side (Image) -->
    <div class="hidden lg:w-1/2 lg:block">
      <img src="/assets/images/login-page.jpg" class="w-full h-full object-cover" />
    </div>

    <!-- Right side (Register Form) -->
    <div class="flex flex-col justify-center bg-lightBackground lg:w-1/2 dark:bg-darkBackground">
      <!-- Logo and Language Dropdown positioned at the top -->
      <div class="flex lg:w-1/2 justify-between items-center fixed top-0 right-0 p-9 z-10">
        <!-- Logo -->
        <a href="/" class="text-2xl font-bold dark:text-lightText px-5">My Site</a>

        <!-- Language Dropdown -->
        <div
          class="relative border-2 border-gray-300 dark:border-gray-500 shadow-md px-6 py-3 rounded-full">
          <button
            class="flex items-center text-sm font-medium dark:text-lightText text-gray-800 hover:text-gray-900">
            <img
              src="/assets/images/united-kingdom-flag.png"
              alt="English Flag"
              class="w-5 h-5 mr-2" />
            EN
            <svg
              class="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
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

          <!-- Dropdown Menu -->
          <div class="absolute right-0 hidden mt-2 w-32 bg-white shadow-md rounded-lg">
            <ul class="py-2 text-sm text-gray-700">
              <li class="block px-4 py-2 hover:bg-gray-100">English</li>
              <li class="block px-4 py-2 hover:bg-gray-100">Persian</li>
              <li class="block px-4 py-2 hover:bg-gray-100">French</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Content Below -->
      <div class="font-bold text-center text-8xl mt-24">
        <h2 class="dark:text-white">Join Us!</h2>
      </div>

      <p class="mt-1 mb-4 text-sm font-light text-center text-gray-800 dark:text-lightText">
        Create an account to get started with My Site
      </p>

      <form @submit.prevent="handleRegister" class="space-y-5">
        <UiBaseInput
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter your email"
          required />

        <UiBaseInput
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required />

        <UiBaseInput
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="Confirm your password"
          required />

        <div class="flex items-center justify-center mt-5">
          <UiBaseButton
            type="submit"
            color="primary"
            class="flex mx-auto mb-6 mt-4 w-full max-w-xs gap-2"
            :disabled="isLoading">
            <svg
              v-if="isLoading"
              class="w-5 h-5 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4" />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            <span v-if="!isLoading">Register</span>
            <span v-else>Loading...</span>
          </UiBaseButton>
        </div>
      </form>

      <div class="mt-5 font-bold text-center">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Already have an account?
          <a href="/login" class="text-blue-500 dark:text-blue-400">Log In</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .register-page {
    flex-direction: column;
  }
}
</style>
