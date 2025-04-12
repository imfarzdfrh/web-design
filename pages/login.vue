<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'blank',
  name: 'login',
  path: '/login'
})

const email = ref('')
const password = ref('')

</script>

<template>
  <div class="flex h-screen login-page">
    <!-- Left side (Image) - hidden on mobile, shown on larger screens -->
    <div class="hidden lg:w-1/2 lg:block">
      <img src="/assets/images/login-pic.jpg" class="object-cover w-full h-full" />
    </div>

    <!-- Right side (Login Form) -->
    <div class="flex flex-col justify-center p-10 bg-white lg:w-1/2 dark:bg-darkBackground">
      <!-- Logo -->
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
            class="block pb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >Email</label
          >
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
            class="block pb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border border-gray-400 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            placeholder="Enter your password"
            required />
        </div>
        <div class="flex items-center justify-center">
          <UiBaseButton color="primary" class="w-[280px]">Login</UiBaseButton>
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
