<script setup lang="ts">
import { SquaresPlusIcon, LightBulbIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
const features = [
  { icon: SquaresPlusIcon, title: 'Everything in one place', desc: 'Browse AI tools and useful software without hopping between endless tabs.' },
  { icon: LightBulbIcon, title: 'Discover what fits', desc: 'Explore focused collections that make finding your next tool easier.' },
  { icon: DevicePhoneMobileIcon, title: 'Built for every screen', desc: 'A simple, distraction-free shopping experience on desktop and mobile.' }
]
</script>
<template>
  <section class="my-12 rounded-[34px] border border-[var(--stroke)] bg-[var(--panel)] px-5 py-12 sm:px-10 sm:py-16">
    <div class="mx-auto mb-10 max-w-xl text-center"><p class="eyebrow">Why MySite</p><h2 class="mt-2 text-3xl font-bold">Less searching. More creating.</h2><p class="mt-3 text-sm leading-7 text-muted">Everything you need to explore the world of digital tools, arranged with care.</p></div>
    <div class="grid gap-7 md:grid-cols-3">
      <div v-for="feature in features" :key="feature.title" class="rounded-3xl border border-[var(--stroke)] p-6">
        <span class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]"><component :is="feature.icon" class="size-6" /></span>
        <h3 class="text-lg font-bold">{{ feature.title }}</h3><p class="mt-3 text-sm leading-7 text-muted">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>
