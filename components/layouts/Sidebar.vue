<script setup lang="ts">
const categories = [
  { name: 'Home', icon: '🏠' },
  { name: 'New In', icon: '⚡', active: true },
  { name: 'Coats' },
  { name: 'Tops' },
  { name: 'Knitwear' },
  { name: 'Dresses' },
]
</script>

<template>
  <aside
    class="hidden mt-10 lg:flex w-56 shrink-0 flex-col gap-4 rounded-2xl
         bg-lightBackground dark:bg-darkBackground border border-white/5 px-5 py-6
         sticky top-24 h-fit"
  >
    <div class="text-xl font-bold mb-6">
      Categories
    </div>

    <nav class="flex flex-col gap-2">
      <button
        v-for="item in categories"
        :key="item.name"
        class="flex items-center gap-3 px-4 py-3 rounded-xl
               text-sm font-medium transition
               hover:bg-gray-100"
        :class="item.active ? 'bg-purple-500 text-darkText dark:text-lightText' : 'text-darkText dark:text-lightText'"
      >
        <span v-if="item.icon">{{ item.icon }}</span>
        {{ item.name }}
      </button>
    </nav>
  </aside>
</template>
