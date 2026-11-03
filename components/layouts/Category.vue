<script setup lang="ts">
import { ChatBubbleLeftRightIcon, FilmIcon, ComputerDesktopIcon, PaintBrushIcon } from '@heroicons/vue/24/outline'
const groups = [
  { label: 'AI assistants', caption: 'Chat, write & research', to: '/productpage?category=AI%20Chatbot', icon: ChatBubbleLeftRightIcon, tint: 'bg-[#e9e5ff] text-[#7760e6] dark:bg-[#30294c]' },
  { label: 'Video & motion', caption: 'Ideas into moving stories', to: '/productpage?category=AI%20Video', icon: FilmIcon, tint: 'bg-[#dff6f9] text-[#139bad] dark:bg-[#1e424b]' },
  { label: 'Operating systems', caption: 'Your everyday essentials', to: '/productpage?category=Operating%20System', icon: ComputerDesktopIcon, tint: 'bg-[#e6efff] text-[#4f7edb] dark:bg-[#263b61]' },
  { label: 'Creative software', caption: 'Make something brilliant', to: '/productpage?category=Video%20Editor', icon: PaintBrushIcon, tint: 'bg-[#ffe7ee] text-[#de6b8f] dark:bg-[#4d2b42]' }
]
</script>
<template>
  <section id="categories" class="py-10 sm:py-14" aria-labelledby="categories-heading">
    <div class="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div><p class="eyebrow">Explore by interest</p><h2 id="categories-heading" class="mt-2 text-2xl font-bold sm:text-3xl">Find your kind of brilliant</h2></div>
      <NuxtLink to="/productpage" class="flex items-center gap-2 text-sm font-bold text-[var(--accent)]">All categories <UiSimpleArrow class="size-4" /></NuxtLink>
    </div>
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <NuxtLink v-for="group in groups" :key="group.to" :to="group.to"
        class="surface card-lift group flex min-h-48 flex-col rounded-3xl p-5">
        <span class="mb-auto flex size-12 items-center justify-center rounded-2xl" :class="group.tint">
          <component :is="group.icon" class="size-6" aria-hidden="true" />
        </span>
        <div class="mt-7 flex items-end justify-between gap-3">
          <div><h3 class="text-base font-bold">{{ group.label }}</h3><p class="mt-1 text-xs text-muted">{{ group.caption }}</p></div>
          <UiSimpleArrow class="size-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-[var(--accent)]" aria-hidden="true" />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
