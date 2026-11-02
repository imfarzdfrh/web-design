<script setup lang="ts">
import { SparklesIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <footer class="mt-16 border-t border-[var(--stroke)] bg-[var(--panel)]">
    <div class="page-shell grid gap-10 py-12 sm:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <NuxtLink to="/" class="inline-flex items-center gap-3 text-xl font-bold"><span class="button-primary flex size-10 items-center justify-center rounded-2xl"><SparklesIcon class="size-5" /></span>MySite.</NuxtLink>
        <p class="mt-4 max-w-sm text-sm leading-7 text-muted">A curated home for useful digital products. Find what inspires your next project.</p>
      </div>
      <div><h2 class="text-sm font-bold">Explore</h2><nav class="mt-4 grid gap-3 text-sm text-muted"><NuxtLink to="/productpage" class="hover:text-[var(--accent)]">All products</NuxtLink><NuxtLink to="/productpage?category=AI%20Chatbot" class="hover:text-[var(--accent)]">AI assistants</NuxtLink><NuxtLink to="/productpage?category=Operating%20System" class="hover:text-[var(--accent)]">Software</NuxtLink></nav></div>
      <div><h2 class="text-sm font-bold">MySite</h2><nav class="mt-4 grid gap-3 text-sm text-muted"><NuxtLink to="/about" class="hover:text-[var(--accent)]">About</NuxtLink><NuxtLink to="/contact" class="hover:text-[var(--accent)]">Contact</NuxtLink><NuxtLink to="/cart" class="hover:text-[var(--accent)]">Your cart</NuxtLink></nav></div>
    </div>
    <div class="page-shell flex flex-wrap items-center justify-between gap-3 border-t border-[var(--stroke)] py-6 text-xs text-muted">
      <p>© {{ new Date().getFullYear() }} MySite. All rights reserved.</p>
      <NuxtLink to="/contact" class="inline-flex items-center gap-1 font-semibold hover:text-[var(--accent)]">Get in touch <UiSimpleArrow class="size-4" /></NuxtLink>
    </div>
  </footer>
</template>
