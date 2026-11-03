<script setup lang="ts">
import {
  ArrowLeftIcon,
  ChartBarIcon,
  CircleStackIcon,
  LockClosedIcon,
  ShieldExclamationIcon,
  UsersIcon
} from '@heroicons/vue/24/outline'

definePageMeta({ layout: 'blank' })
useSeoMeta({
  title: 'Admin console | MySite',
  description: 'Admin console integration status.',
  robots: 'noindex, nofollow'
})

const modules = [
  { title: 'Products and inventory', detail: 'Connect a protected product management API.', icon: CircleStackIcon },
  { title: 'Customers', detail: 'Requires secure identity and authorized roles.', icon: UsersIcon },
  { title: 'Orders and reports', detail: 'Requires real transaction data and server-side reporting.', icon: ChartBarIcon }
]
</script>

<template>
  <main id="main-content" class="min-h-[100svh] bg-[var(--page)] py-10 text-[var(--ink)] sm:py-16">
    <div class="page-shell max-w-[1050px]">
      <header class="mb-12 flex flex-wrap items-center justify-between gap-4">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-[var(--accent)]">
          <ArrowLeftIcon class="size-4" /> Back to storefront
        </NuxtLink>
        <UiThemeSwitcher />
      </header>

      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--panel)] px-4 py-2 text-xs font-bold text-muted">
          <ShieldExclamationIcon class="size-4 text-[var(--accent)]" /> Integration pending
        </div>
        <h1 class="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Admin console<span class="text-[var(--accent)]">.</span></h1>
        <p class="mt-5 text-base leading-8 text-muted">
          This is a frontend placeholder, not an operational admin dashboard. Administrative functions
          will only become available after server-side authentication, role checks and data APIs are implemented.
        </p>
      </div>

      <div class="surface mt-10 flex flex-wrap items-start gap-4 rounded-[28px] p-7 sm:p-9">
        <span class="flex size-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
          <LockClosedIcon class="size-7" />
        </span>
        <div class="max-w-2xl">
          <h2 class="text-xl font-bold">Management features are not enabled</h2>
          <p class="mt-2 text-sm leading-7 text-muted">
            There are no live sales totals, customer records, or inventory controls on this page.
            A production admin interface must be protected by backend authorization before any private data is exposed.
          </p>
        </div>
      </div>

      <section class="mt-12" aria-label="Planned admin modules">
        <h2 class="text-2xl font-bold">Planned modules</h2>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div v-for="module in modules" :key="module.title" class="surface rounded-[26px] p-6">
            <span class="flex size-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <component :is="module.icon" class="size-6" />
            </span>
            <h3 class="mt-6 text-lg font-bold">{{ module.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-muted">{{ module.detail }}</p>
            <p class="mt-6 text-xs font-bold uppercase tracking-wide text-[var(--accent)]">Not connected</p>
          </div>
        </div>
      </section>
      <NuxtLink to="/" class="button-primary mt-10 inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold">
        Return to MySite <UiSimpleArrow class="size-4" />
      </NuxtLink>
    </div>
  </main>
</template>
