<script setup lang="ts">
import {
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  FilmIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'About MySite | Digital tools, made simple',
  description: 'Learn about the MySite collection of AI assistants, creative software, and digital essentials.'
})

const categories = [
  {
    title: 'AI assistants',
    description: 'Explore conversational tools and research helpers.',
    to: '/productpage?category=AI%20Chatbot',
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Creative tools',
    description: 'Browse video and editing software for your next project.',
    to: '/productpage?category=AI%20Video',
    icon: FilmIcon
  },
  {
    title: 'Everyday software',
    description: 'Discover essential operating systems and digital utilities.',
    to: '/productpage?category=Operating%20System',
    icon: ComputerDesktopIcon
  }
]
</script>

<template>
  <div>
    <section class="relative isolate overflow-hidden py-16 sm:py-24">
      <div class="ambient-orb -left-28 top-10 size-72 bg-[#8874ff]/30" aria-hidden="true" />
      <div class="ambient-orb -right-28 bottom-0 size-80 bg-[#54c8df]/25" aria-hidden="true" />
      <div class="page-shell relative max-w-[1100px]">
        <div class="max-w-3xl">
          <p class="eyebrow">ABOUT MYSITE</p>
          <h1 class="mt-4 text-[clamp(2.6rem,6vw,5.2rem)] font-bold leading-[1.08]">
            One place to explore <span class="gradient-text">what's possible.</span>
          </h1>
          <p class="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            MySite is a growing storefront concept for discovering useful digital tools — from AI assistants
            and creative apps to software essentials. Our aim is to make browsing straightforward and enjoyable.
          </p>
          <div class="mt-9 flex flex-wrap items-center gap-3">
            <NuxtLink to="/productpage" class="button-primary inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold">
              Explore the collection <UiSimpleArrow class="size-4" />
            </NuxtLink>
            <NuxtLink to="/contact" class="button-quiet rounded-2xl px-6 py-4 text-sm font-bold">Contact us</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="page-shell pb-12 sm:pb-20" aria-labelledby="explore-heading">
      <div class="mb-8">
        <p class="eyebrow">WHAT YOU'LL FIND</p>
        <h2 id="explore-heading" class="mt-2 text-3xl font-bold">Built around your interests</h2>
        <p class="mt-3 max-w-2xl text-sm leading-7 text-muted">
          A focused way to browse different types of digital products, without unnecessary distractions.
        </p>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        <NuxtLink v-for="category in categories" :key="category.title" :to="category.to" class="surface card-lift group rounded-[28px] p-6 sm:p-8">
          <span class="flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
            <component :is="category.icon" class="size-full" aria-hidden="true" />
          </span>
          <h3 class="mt-8 text-xl font-bold">{{ category.title }}</h3>
          <p class="mt-3 min-h-14 text-sm leading-7 text-muted">{{ category.description }}</p>
          <span class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
            Browse products <UiSimpleArrow class="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </NuxtLink>
      </div>
    </section>

    <section class="page-shell pb-16 sm:pb-24">
      <div class="surface grid overflow-hidden rounded-[32px] lg:grid-cols-2">
        <div class="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16">
          <span class="flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
            <SparklesIcon class="size-6" />
          </span>
          <h2 class="mt-7 text-3xl font-bold">Simple discovery, thoughtful design.</h2>
          <p class="mt-4 max-w-lg text-sm leading-8 text-muted">
            Clear categories, useful product information, and a clean experience help you explore tools
            at your own pace. The storefront is still being developed, with account and checkout services
            planned for later integration.
          </p>
        </div>
        <div class="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#161c39] px-8 py-12 text-center text-white">
          <div class="absolute -left-12 -top-12 size-56 rounded-full bg-[#755bed]/45 blur-[55px]" aria-hidden="true" />
          <div class="absolute -bottom-20 -right-8 size-64 rounded-full bg-[#32bfd3]/35 blur-[55px]" aria-hidden="true" />
          <div class="relative max-w-sm">
            <p class="text-xs font-bold uppercase tracking-[.2em] text-[#bfb9ff]">Made for exploring</p>
            <p class="mt-4 text-4xl font-bold leading-tight">Find your next favorite tool.</p>
            <NuxtLink to="/productpage" class="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white hover:underline">
              Browse MySite <ArrowTopRightOnSquareIcon class="size-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
