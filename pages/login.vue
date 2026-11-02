<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'
import lightVisual from '~/assets/images/login-page-light.jpg'
import darkVisual from '~/assets/images/login-page-dark.jpg'
import { useAuthStore } from '~/stores/auth'

definePageMeta({ layout: 'blank', name: 'login', path: '/login' })

useSeoMeta({
  title: 'Sign in | MySite',
  description: 'Sign in to your MySite account.'
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const auth = useAuthStore()
const router = useRouter()

async function handleLogin() {
  if (isLoading.value) return

  errorMessage.value = ''
  isLoading.value = true

  try {
    const success = await auth.login(email.value.trim(), password.value)

    if (!success) {
      errorMessage.value = 'Email or password is incorrect. Please try again.'
      return
    }

    await router.push('/')
  } catch {
    errorMessage.value = 'We could not sign you in. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="auth-page relative isolate min-h-[100svh] overflow-hidden bg-[var(--page)] text-[var(--ink)]">
    <div class="grid min-h-[100svh] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <!-- Branded artwork. Kept out of the form's keyboard and screen-reader flow. -->
      <aside class="auth-art relative isolate hidden overflow-hidden bg-[#0c0d1e] lg:flex lg:min-h-[680px] lg:flex-col">
        <img
          :src="lightVisual"
          alt=""
          class="absolute inset-0 -z-20 h-full w-full object-cover object-center dark:hidden"
        />
        <img
          :src="darkVisual"
          alt=""
          class="absolute inset-0 -z-20 hidden h-full w-full object-cover object-center dark:block"
        />
        <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#08091a]/55 via-[#08091a]/10 to-[#08091a]/80" />
        <div class="absolute inset-0 -z-10 bg-[#08091a]/20" />

        <NuxtLink to="/" class="m-10 inline-flex w-fit items-center gap-3 text-white xl:m-14">
          <span class="flex size-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
            <SparklesIcon class="size-5" />
          </span>
          <span class="font-['Space_Grotesk'] text-xl font-bold tracking-tight">MySite<span class="text-[#b4a5ff]">.</span></span>
        </NuxtLink>

        <div class="mt-auto max-w-xl px-10 pb-12 text-white xl:px-14 xl:pb-16">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-xl">
            <SparklesIcon class="size-4 text-[#c4b9ff]" />
            Your digital workspace
          </div>
          <h2 class="text-4xl font-bold leading-[1.14] tracking-tight xl:text-[3.3rem]">
            Discover better tools.<br />
            Create what’s next.
          </h2>
          <p class="mt-5 max-w-md text-sm leading-7 text-white/75">
            Explore digital essentials and creative tools in one thoughtfully curated place.
          </p>
          <div class="mt-9 flex items-center gap-3 border-t border-white/20 pt-6 text-xs font-medium text-white/75">
            <CheckCircleIcon class="size-5 text-[#b8acff]" />
            Your next idea starts here
          </div>
        </div>
      </aside>

      <!-- Responsive sign-in panel -->
      <main id="main-content" class="relative flex min-w-0 flex-col px-5 py-6 sm:px-10 sm:py-9 xl:px-16">
        <div aria-hidden="true" class="pointer-events-none absolute right-0 top-24 -z-10 size-64 rounded-full bg-[#9483ff]/[0.09] blur-3xl" />

        <header class="flex w-full items-center justify-between gap-4">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-[var(--accent)] lg:hidden">
            <ArrowLeftIcon class="size-4" />
            Back to store
          </NuxtLink>
          <NuxtLink to="/" class="hidden items-center gap-2 text-sm font-semibold text-muted transition hover:text-[var(--accent)] lg:inline-flex">
            <ArrowLeftIcon class="size-4" />
            Back to store
          </NuxtLink>
          <UiThemeSwitcher />
        </header>

        <div class="flex flex-1 items-center justify-center py-12 sm:py-16">
          <div class="w-full max-w-[430px]">
            <div class="mb-8">
              <span class="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] p-3 text-[var(--accent)] sm:hidden">
                <SparklesIcon class="size-full" />
              </span>
              <p class="eyebrow">WELCOME BACK</p>
              <h1 class="mt-3 text-[clamp(2.25rem,4vw,3.15rem)] font-bold leading-tight tracking-tight">Sign in to MySite<span class="text-[var(--accent)]">.</span></h1>
              <p class="mt-3 text-sm leading-7 text-muted">Welcome back! Enter your details to continue.</p>
            </div>

            <form class="space-y-5" @submit.prevent="handleLogin">
              <div>
                <label for="login-email" class="mb-2 block text-sm font-semibold">Email address</label>
                <div class="auth-field relative">
                  <EnvelopeIcon class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
                  <input
                    id="login-email"
                    v-model.trim="email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    inputmode="email"
                    placeholder="you@example.com"
                    required
                    :disabled="isLoading"
                    :aria-invalid="Boolean(errorMessage)"
                    class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] py-4 pl-12 pr-4 text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/70 disabled:opacity-60"
                    @input="errorMessage = ''"
                  />
                </div>
              </div>

              <div>
                <label for="login-password" class="mb-2 block text-sm font-semibold">Password</label>
                <div class="auth-field relative">
                  <LockClosedIcon class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
                  <input
                    id="login-password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    autocomplete="current-password"
                    placeholder="Enter your password"
                    required
                    :disabled="isLoading"
                    :aria-invalid="Boolean(errorMessage)"
                    :aria-describedby="errorMessage ? 'login-error' : undefined"
                    class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] py-4 pl-12 pr-14 text-sm text-[var(--ink)] placeholder:text-[var(--muted)]/70 disabled:opacity-60"
                    @input="errorMessage = ''"
                  />
                  <button
                    type="button"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                    :aria-pressed="showPassword"
                    class="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-xl text-muted transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                    @click="showPassword = !showPassword"
                  >
                    <EyeSlashIcon v-if="showPassword" class="size-5" aria-hidden="true" />
                    <EyeIcon v-else class="size-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <p
                v-if="errorMessage"
                id="login-error"
                role="alert"
                class="rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300"
              >
                {{ errorMessage }}
              </p>

              <button
                type="submit"
                :disabled="isLoading"
                class="button-primary mt-2 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-sm font-bold disabled:cursor-wait disabled:opacity-70"
              >
                <svg v-if="isLoading" class="size-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" opacity=".3" />
                  <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                </svg>
                <span>{{ isLoading ? 'Signing in…' : 'Sign in' }}</span>
                <UiSimpleArrow v-if="!isLoading" class="size-4" />
              </button>
            </form>

            <p class="mt-8 text-center text-sm text-muted">
              New to MySite?
              <NuxtLink to="/signup" class="font-bold text-[var(--accent)] transition hover:underline">
                Create an account
              </NuxtLink>
            </p>
          </div>
        </div>

        <footer class="text-center text-xs text-muted">
          © {{ new Date().getFullYear() }} MySite. All rights reserved.
        </footer>
      </main>
    </div>
  </div>
</template>

<style scoped>
.auth-art img {
  object-position: 50% 50%;
}
@media (prefers-reduced-motion: reduce) {
  .auth-page *, .auth-page *::before, .auth-page *::after {
    animation: none !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
