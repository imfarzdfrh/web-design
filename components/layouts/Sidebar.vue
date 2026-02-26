<script setup lang="ts">
import { ref } from 'vue'

const categories = ref([
  { name: 'All Products', target: 'all-products' },
  { name: 'AI Tools', target: 'ai-tools' },
  { name: 'Chat AI', target: 'chat-ai' },
  { name: 'Image AI', target: 'image-ai' },
  { name: 'Video AI', target: 'video-ai' },
  { name: 'Software', target: 'software' },
  { name: 'Operating Systems', target: 'operating-systems' },
  { name: 'Best Sellers', target: 'best-sellers' },
  { name: 'Discounts', target: 'discounts' },
])

const activeTarget = ref('all-products')

function scrollTo(target: string) {
  activeTarget.value = target

  const el = document.getElementById(target)
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <aside
    class="hidden mt-16 lg:flex w-56 shrink-0 flex-col gap-5 rounded-2xl
           bg-[#e5e5e5]/40 shadow-xl dark:bg-[#001d3d]/40 border border-white/5
           px-3 py-8 sticky top-24 h-fit"
  >
    <nav class="flex flex-col gap-2">
      <button
        v-for="item in categories"
        :key="item.target"
        @click="scrollTo(item.target)"
        class="flex items-center gap-3 px-5 py-3 rounded-xl
               text-sm font-medium transition"
        :class="activeTarget === item.target
          ? 'bg-[#03045e] text-lightText'
          : 'text-darkText dark:text-lightText hover:bg-gray-300'"
      >
        {{ item.name }}
      </button>
    </nav>
  </aside>
</template>

