<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  SparklesIcon,
  UserPlusIcon
} from '@heroicons/vue/24/outline'
import lightVisual from '~/assets/images/login-page-light.jpg'
import darkVisual from '~/assets/images/login-page-dark.jpg'

definePageMeta({ layout: 'blank', name: 'signup', path: '/signup' })
useSeoMeta({
  title: 'Create an account | MySite',
  description: 'Preview the MySite account registration experience.'
})

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const submitted = ref(false)
const feedback = ref('')
const passwordMismatch = computed(() => confirmPassword.value.length > 0 && password.value !== confirmPassword.value)

function handleRegister() {
  feedback.value = ''
  submitted.value = false
  if (passwordMismatch.value) {
    feedback.value = 'Your passwords do not match.'
    return
  }
  // No accounts are created or passwords stored until a secure backend exists.
  submitted.value = true
  feedback.value = 'Registration is not connected yet. No account was created or password saved.'
}
</script>

<template>
  <div class="relative isolate min-h-[100svh] overflow-hidden bg-[var(--page)] text-[var(--ink)]">
    <div class="grid min-h-[100svh] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <aside class="relative isolate hidden overflow-hidden bg-[#0c0d1e] lg:flex lg:min-h-[680px] lg:flex-col">
        <img :src="lightVisual" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover dark:hidden" />
        <img :src="darkVisual" alt="" class="absolute inset-0 -z-20 hidden h-full w-full object-cover dark:block" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#08091a]/60 via-[#08091a]/15 to-[#08091a]/85" />
        <NuxtLink to="/" class="m-10 inline-flex w-fit items-center gap-3 text-white xl:m-14">
          <span class="flex size-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
            <SparklesIcon class="size-5" />
          </span>
          <span class="text-xl font-bold">MySite<span class="text-[#b4a5ff]">.</span></span>
        </NuxtLink>
        <div class="mt-auto max-w-xl px-10 pb-12 text-white xl:px-14 xl:pb-16">
          <span class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-xl">
            <SparklesIcon class="size-4 text-[#c4b9ff]" /> Discover what's next
          </span>
          <h2 class="text-4xl font-bold leading-tight xl:text-[3.3rem]">Find tools for your next big idea.</h2>
          <p class="mt-5 max-w-md text-sm leading-7 text-white/75">
            Explore useful AI assistants, creative software, and digital essentials in one place.
          </p>
          <div class="mt-9 flex items-center gap-3 border-t border-white/20 pt-6 text-xs font-medium text-white/75">
            <CheckCircleIcon class="size-5 text-[#b8acff]" /> A curated digital collection
          </div>
        </div>
      </aside>

      <main id="main-content" class="relative flex min-w-0 flex-col px-5 py-6 sm:px-10 sm:py-9 xl:px-16">
        <header class="flex items-center justify-between gap-4">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-[var(--accent)]">
            <ArrowLeftIcon class="size-4" /> Back to store
          </NuxtLink>
          <UiThemeSwitcher />
        </header>
        <div class="flex flex-1 items-center justify-center py-10 sm:py-14">
          <div class="w-full max-w-[430px]">
            <div class="mb-7">
              <span class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] lg:hidden">
                <UserPlusIcon class="size-6" />
              </span>
              <p class="eyebrow">GET STARTED</p>
              <h1 class="mt-3 text-[clamp(2.25rem,4vw,3.15rem)] font-bold leading-tight">Create your account<span class="text-[var(--accent)]">.</span></h1>
              <p class="mt-3 text-sm leading-7 text-muted">A better way to discover digital products.</p>
            </div>

            <p class="mb-6 rounded-2xl border border-[var(--stroke)] bg-[var(--accent-soft)] px-4 py-3 text-xs leading-6 text-muted">
              Preview mode: account registration isn't connected to a secure server yet. Please don't use a real password.
            </p>

            <form class="space-y-5" @submit.prevent="handleRegister">
              <div>
                <label for="signup-email" class="mb-2 block text-sm font-semibold">Email address</label>
                <div class="relative">
                  <EnvelopeIcon class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
                  <input id="signup-email" v-model.trim="email" type="email" name="email" autocomplete="off" inputmode="email"
                    placeholder="you@example.com" required
                    class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] py-4 pl-12 pr-4 text-sm text-[var(--ink)]"
                    @input="feedback = ''" />
                </div>
              </div>

              <div>
                <label for="signup-password" class="mb-2 block text-sm font-semibold">Password</label>
                <div class="relative">
                  <LockClosedIcon class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
                  <input id="signup-password" v-model="password" :type="showPassword ? 'text' : 'password'" name="password"
                    autocomplete="new-password" placeholder="Enter a password" minlength="8" required
                    class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] py-4 pl-12 pr-14 text-sm text-[var(--ink)]"
                    @input="feedback = ''" />
                  <button type="button" :aria-label="showPassword ? 'Hide password' : 'Show password'"
                    :aria-pressed="showPassword" class="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-xl text-muted hover:bg-[var(--accent-soft)]"
                    @click="showPassword = !showPassword">
                    <EyeSlashIcon v-if="showPassword" class="size-5" /><EyeIcon v-else class="size-5" />
                  </button>
                </div>
              </div>

              <div>
                <label for="signup-confirm" class="mb-2 block text-sm font-semibold">Confirm password</label>
                <div class="relative">
                  <LockClosedIcon class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted" aria-hidden="true" />
                  <input id="signup-confirm" v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'"
                    name="confirm-password" autocomplete="new-password" placeholder="Confirm your password" minlength="8" required
                    :aria-invalid="passwordMismatch" :aria-describedby="passwordMismatch ? 'signup-mismatch' : undefined"
                    class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] py-4 pl-12 pr-14 text-sm text-[var(--ink)]"
                    @input="feedback = ''" />
                  <button type="button" :aria-label="showConfirmPassword ? 'Hide confirmation' : 'Show confirmation'"
                    :aria-pressed="showConfirmPassword" class="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-xl text-muted hover:bg-[var(--accent-soft)]"
                    @click="showConfirmPassword = !showConfirmPassword">
                    <EyeSlashIcon v-if="showConfirmPassword" class="size-5" /><EyeIcon v-else class="size-5" />
                  </button>
                </div>
                <p v-if="passwordMismatch" id="signup-mismatch" class="mt-2 text-xs text-red-600 dark:text-red-300">
                  Passwords must match.
                </p>
              </div>

              <p v-if="feedback" role="status" :class="submitted ? 'text-muted' : 'text-red-600 dark:text-red-300'"
                class="rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] px-4 py-3 text-sm leading-6">
                {{ feedback }}
              </p>

              <button type="submit" class="button-primary inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-sm font-bold">
                Preview registration <UiSimpleArrow class="size-4" />
              </button>
            </form>

            <p class="mt-8 text-center text-sm text-muted">
              Already have an account?
              <NuxtLink to="/login" class="font-bold text-[var(--accent)] hover:underline">Sign in</NuxtLink>
            </p>
          </div>
        </div>
        <footer class="text-center text-xs text-muted">© {{ new Date().getFullYear() }} MySite. All rights reserved.</footer>
      </main>
    </div>
  </div>
</template>
