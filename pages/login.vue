<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "blank",
  name: "login",
  path: "/login",
});

const email = ref("");
const password = ref("");

// Placeholder function for login
const handleLogin = () => {
  console.log("Login attempt:", email.value, password.value);
};

// Placeholder function for Google login
const handleGoogleLogin = () => {
  console.log("Google login");
};
</script>

<template>
  <div class="flex h-screen login-page">
    <!-- Left side (Image) - hidden on mobile, shown on larger screens -->
    <div class="hidden w-full lg:w-1/2 lg:block">
      <img
        src="/assets/images/login-pic.jpg"
        class="object-cover w-full h-full"
      >
    </div>

    <!-- Right side (Login Form) -->
    <div class="flex flex-col justify-center w-full p-10 bg-white lg:w-1/2 dark:bg-gray-800">
      <!-- Logo -->
      <div class="mb-20 font-bold text-center text-7xl">
        <a href="/" class="text-blue-600 dark:text-blue-400">My Site</a>
      </div>

      <h2
        class="mb-4 text-2xl font-bold text-center text-gray-800 dark:text-gray-200"
      >
        Login to Your Account
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="px-10 py-4">
          <label
            for="email"
            class="block pb-3 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            placeholder="Enter your email"
            required
          >
        </div>
        <div class="px-10 py-4">
          <label
            for="password"
            class="block pb-3 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="flex items-center justify-center px-10">
          <UiButtonBaseButton color="primary">Login</UiButtonBaseButton>

        </div>
      </form>
      <div class="px-12 mt-6 text-center">
        <button
          @click="handleGoogleLogin"
          class="w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Login with Google
        </button>
      </div>
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Don't have an account?
          <a href="/register" class="text-blue-500 dark:text-blue-400"
            >Sign Up</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Customize for mobile screens */
@media (max-width: 1024px) {
  .login-page {
    flex-direction: column; /* Stack image and form vertically on smaller screens */
  }
}
</style>
