<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'chatgpt',
    image: '/temp/pic/chatgpt.png',
    title: 'ChatGpt',
    description: 'Ai Chat Smart',
    price: "30$"
  },
  {
    id: 2,
    name: 'deepseek',
    image: '/temp/pic/deepseek.png',
    title: 'DeepSeek',
    description: 'Ai Chat Smart',
    price: "40$"
  },
  {
    id: 3,
    name: 'grok',
    image: '/temp/pic/grok.png',
    title: 'Grok',
    description: 'Ai Chat Smart',
    price: "100$"
  },
  {
    id: 4,
    name: 'runaway',
    image: '/temp/pic/runaway.png',
    title: 'Runaway',
    description: 'Ai Create Video',
    price: "99$"
  },
  {
    id: 5,
    name: 'claude',
    image: '/temp/pic/claude.png',
    title: 'Claude',
    description: 'Ai Create Video',
    price: "70$"
  },
 
]

</script>

<template>
  <div class="dark:bg-darkBackground dark:text-darkText">
    <div class="pt-10">
      <h1 class="px-40 text-3xl font-bold">Top Sellers</h1>
    </div>

      <div class="flex flex-wrap justify-center py-12 space-x-6">
        <UiProductCard
          v-for="item in products"
          :id="item.id"
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




