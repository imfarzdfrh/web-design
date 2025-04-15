<script setup lang="ts">
import CardProduct from '@/components/ui/ProductCard.vue'
const products = [
  {
    id: 1,
    name: 'chatgpt',
    image: '/temp/pic/chatgpt.png',
    title: 'ChatGpt',
    description: 'Ai Chat Smart',
    price: 700000
  },
  {
    id: 2,
    name: 'deepseek',
    image: '/temp/pic/deepseek.png',
    title: 'DeepSeek',
    description: 'Ai Chat Smart',
    price: 700000
  },
  {
    id: 3,
    name: 'grok',
    image: '/temp/pic/grok.png',
    title: 'Grok',
    description: 'Ai Chat Smart',
    price: 700000
  },
  {
    id: 1,
    name: 'runaway',
    image: '/temp/pic/runaway.png',
    title: 'Runaway',
    description: 'Ai Create Video',
    price: 700000
  },
  {
    id: 1,
    name: 'claude',
    image: '/temp/pic/claude.png',
    title: 'Claude',
    description: 'Ai Create Video',
    price: 700000
  },
 
]

</script>

<template>
  <div class="dark:bg-darkBackground dark:text-darkText">
    <div class="pt-10">
      <h1 class="font-bold text-3xl px-40">Top Sellers</h1>
    </div>

      <div class="flex flex-wrap justify-center py-12 space-x-6">
        <CardProduct
          v-for="item in products"
          :key="item.id"
          :name="item.name"
          :src="item.image"
          :title="item.title"
          :description="item.description"
          :price="item.price"
        />
      </div>
  </div>
</template>



<style>
.hover\:scale-105:hover {
  transform: scale(1.1);
}

.transition-transform {
  transition: transform 0.2s ease-in-out;
}

.transition-colors {
  transition: background-color 0.5s ease;
}
</style>
