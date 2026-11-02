<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <section class="py-9 sm:py-14" aria-labelledby="spotlight-heading">
    <div class="mb-6">
      <p class="eyebrow">The spotlight</p>
      <h2 id="spotlight-heading" class="mt-2 text-2xl font-bold sm:text-3xl">A little inspiration goes a long way</h2>
    </div>
    <div class="grid gap-4 md:grid-cols-[1.2fr_.8fr]">
      <NuxtLink to="/product/4" class="group relative isolate flex min-h-[290px] overflow-hidden rounded-[30px] bg-[#171b31] p-7 text-white sm:min-h-[350px] sm:p-10">
        <img src="/temp/pic/banner3.png" alt="" loading="lazy" class="absolute inset-0 -z-20 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#111426]/95 via-[#111426]/60 to-transparent"></div>
        <div class="flex max-w-sm flex-col items-start">
          <span class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">For creators</span>
          <h3 class="mt-auto text-3xl font-bold leading-tight sm:text-4xl">Bring your ideas to life.</h3>
          <p class="mt-3 text-sm text-white/75">Explore creative tools for video and beyond.</p>
          <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold">Explore Runway <ArrowUpRightIcon class="size-5" /></span>
        </div>
      </NuxtLink>
      <NuxtLink to="/product/7" class="group relative isolate flex min-h-[290px] overflow-hidden rounded-[30px] bg-[#1b3159] p-7 text-white sm:min-h-[350px] sm:p-10">
        <img src="/temp/pic/windows11-banner.jpg" alt="" loading="lazy" class="absolute inset-0 -z-20 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#11233c]/95 via-[#11233c]/50 to-transparent"></div>
        <div class="flex max-w-sm flex-col items-start">
          <span class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">Digital essentials</span>
          <h3 class="mt-auto text-3xl font-bold leading-tight">Upgrade your everyday.</h3>
          <p class="mt-3 text-sm text-white/75">Explore software built for modern workflows.</p>
          <span class="mt-5 inline-flex items-center gap-2 text-sm font-bold">See Windows 11 <ArrowUpRightIcon class="size-5" /></span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
