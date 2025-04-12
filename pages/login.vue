<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const isLoading = ref(false)

definePageMeta({
  layout: 'blank',
  name: 'login',
  path: '/login'
})

const email = ref('')
const password = ref('')
const showAlert = ref(false)

const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  isLoading.value = true

  await new Promise(resolve => setTimeout(resolve, 1700))

  const success = await auth.login(email.value, password.value)

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
  <div class="flex h-screen login-page relative">
    <!-- Alert notification -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="-translate-y-10 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-10 opacity-0">
      <div
        v-if="showAlert"
        class="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-semibold">
        ❌ Email or Password is incorrect!
      </div>
    </transition>

    <!-- Left side (Image) -->
    <div class="hidden lg:w-1/2 lg:block">
      <img src="/assets/images/login-pic.jpg" class="object-cover w-full h-full" />
    </div>

    <!-- Right side (Login Form) -->
    <div class="flex flex-col justify-center p-10 bg-white lg:w-1/2 dark:bg-darkBackground">
      <div class="mb-10 font-bold text-center text-7xl">
        <a href="/" class="text-blue-600 dark:text-blue-400">My Site</a>
      </div>

      <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
        Login to Your Account
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="px-60 py-2">
          <label
            for="email"
            class="block pb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 border border-gray-400 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            placeholder="Enter your email"
            required />
        </div>

        <div class="px-60 py-2">
          <label
            for="password"
            class="block pb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border border-gray-400 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            placeholder="Enter your password"
            required />
        </div>

        <div class="flex items-center justify-center">
          <UiBaseButton
            type="submit"
            color="primary"
            class="w-[280px] flex items-center justify-center gap-2"
            :disabled="isLoading">
            <svg
              v-if="isLoading"
              class="w-5 h-5 animate-spin text-white"
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
            <span v-if="!isLoading">Login</span>
            <span v-else>Loading...</span>
          </UiBaseButton>
        </div>
      </form>

      <div class="mt-5 text-center">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Don't have an account?
          <a href="/register" class="text-blue-500 dark:text-blue-400">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .login-page {
    flex-direction: column;
  }
}
</style>
