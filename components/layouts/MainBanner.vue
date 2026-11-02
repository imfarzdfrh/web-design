<script setup lang="ts">
import { ArrowRightIcon, PlayCircleIcon, SparklesIcon, ShieldCheckIcon, CursorArrowRaysIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="relative isolate overflow-hidden pb-12 pt-10 sm:pb-20 sm:pt-16">
    <div class="ambient-orb -left-32 top-12 h-72 w-72 bg-[#a998ff]/40" aria-hidden="true"></div>
    <div class="ambient-orb -right-24 top-5 h-96 w-96 bg-[#46bfdf]/30" aria-hidden="true" style="animation-delay:-4s"></div>
    <div class="page-shell relative grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
      <div class="max-w-2xl py-5">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--stroke)] bg-[var(--panel)] px-4 py-2 text-xs font-bold text-muted shadow-sm">
          <SparklesIcon class="size-4 text-[#8471ed]" /> A smarter way to discover digital tools
        </div>
        <h1 class="max-w-[720px] text-[clamp(3rem,6vw,5.7rem)] font-bold leading-[1.06] tracking-[-.065em]">
          Your next big idea starts <span class="gradient-text">right here.</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
          Discover AI assistants, creative software and digital essentials — thoughtfully curated in one beautiful place.
        </p>
        <div class="mt-9 flex flex-wrap items-center gap-3">
          <NuxtLink to="/productpage" class="button-primary inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold">
            Explore products <ArrowRightIcon class="size-5" />
          </NuxtLink>
          <a href="#featured" class="button-quiet inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold">
            <PlayCircleIcon class="size-5" /> See what's featured
          </a>
        </div>
        <div class="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--stroke)] pt-6 text-xs font-semibold text-muted">
          <span class="flex items-center gap-2"><ShieldCheckIcon class="size-5 text-[#7b69ef]" /> Curated selections</span>
          <span class="flex items-center gap-2"><CursorArrowRaysIcon class="size-5 text-[#2db6bd]" /> Easy to explore</span>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[600px] lg:max-w-none" aria-label="Featured tools">
        <div class="absolute inset-8 rotate-[-9deg] rounded-[42px] bg-gradient-to-br from-[#8d7fff]/30 to-[#54d9e2]/25 blur-xl" aria-hidden="true"></div>
        <div class="glass relative overflow-hidden rounded-[36px] p-5 shadow-[0_35px_90px_rgba(36,38,86,.16)] sm:p-7">
          <div class="mb-6 flex items-center justify-between">
            <div>
              <p class="eyebrow">Curated collection</p>
              <h2 class="mt-1 text-xl font-bold sm:text-2xl">Your creative workspace</h2>
            </div>
            <span class="rounded-full bg-[#54cbb9]/15 px-3 py-1.5 text-[11px] font-bold text-[#22aa91]">Discover</span>
          </div>
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <NuxtLink to="/product/1" class="card-lift rounded-3xl border border-[var(--stroke)] bg-[#e9e6ff]/80 p-5 text-[#292750] dark:bg-[#302e52]/90 dark:text-white">
              <div class="flex size-16 items-center justify-center rounded-2xl bg-white/85 p-2"><img src="/temp/pic/chatgpt.png" alt="" class="size-full object-contain" /></div>
              <p class="mt-9 text-sm font-bold">ChatGPT</p><p class="mt-1 text-xs opacity-70">AI assistant</p>
            </NuxtLink>
            <NuxtLink to="/product/4" class="card-lift translate-y-5 rounded-3xl border border-[var(--stroke)] bg-[#def7fa]/85 p-5 text-[#153f49] dark:bg-[#244750]/90 dark:text-white">
              <div class="flex size-16 items-center justify-center rounded-2xl bg-white/85 p-2"><img src="/temp/pic/runaway.png" alt="" class="size-full object-contain" /></div>
              <p class="mt-9 text-sm font-bold">Runway</p><p class="mt-1 text-xs opacity-70">Video creation</p>
            </NuxtLink>
            <NuxtLink to="/product/2" class="card-lift -translate-y-1 rounded-3xl border border-[var(--stroke)] bg-[#f9e9f2]/85 p-5 text-[#583445] dark:bg-[#57354a]/90 dark:text-white">
              <div class="flex size-16 items-center justify-center rounded-2xl bg-white/85 p-2"><img src="/temp/pic/deepseek.png" alt="" class="size-full object-contain" /></div>
              <p class="mt-9 text-sm font-bold">DeepSeek</p><p class="mt-1 text-xs opacity-70">Smart research</p>
            </NuxtLink>
            <NuxtLink to="/product/7" class="card-lift translate-y-4 rounded-3xl border border-[var(--stroke)] bg-[#e4eefc]/85 p-5 text-[#254366] dark:bg-[#293d5b]/90 dark:text-white">
              <div class="flex size-16 items-center justify-center rounded-2xl bg-white/85 p-2"><img src="/temp/pic/windows11-icon.png" alt="" class="size-full object-contain" /></div>
              <p class="mt-9 text-sm font-bold">Windows 11</p><p class="mt-1 text-xs opacity-70">Productivity</p>
            </NuxtLink>
          </div>
          <div class="mt-9 flex items-center justify-between rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] p-4 text-xs text-muted">
            <span>Find the right tools for your workflow</span>
            <ArrowRightIcon class="size-4 text-[#8071ed]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
