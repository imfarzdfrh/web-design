<script setup lang="ts">
import { ICON_SET } from '~/constants/Icons';

const categories = [
  { name: 'All Products', active: true },
  { name: 'AI Tools' },
  { name: 'Chat AI' },
  { name: 'Image AI' },
  { name: 'Video AI' },
  { name: 'Software' },
  { name: 'Operating Systems' },
  { name: 'Design Tools' },
  { name: 'Best Sellers' },
  { name: 'Discounts' },
]
</script>

<template>
  <aside
    class="hidden mt-16 lg:flex w-56 shrink-0 flex-col gap-6 rounded-2xl
         bg-[#e5e5e5]/40 shadow-xl dark:bg-[#001d3d]/40 border border-white/5 px-3 py-8
         sticky top-24 h-fit"
  >
  

    <nav class="flex flex-col gap-2">
      <button
        v-for="item in categories"
        :key="item.name"
        class="flex items-center gap-3 px-5 py-3 rounded-xl
               text-sm font-medium transition
               hover:bg-gray-300 hover:text-darkText dark:hover:text-darkText"
        :class="item.active ? 'bg-[#03045e] text-lightText' : 'text-darkText dark:text-lightText'"
      >
        <span v-if="item.icon">{{ item.icon }}</span>
        {{ item.name }}
      </button>
    </nav>
  </aside>
</template>

