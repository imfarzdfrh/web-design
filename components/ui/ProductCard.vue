<script setup lang="ts">

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number, 
    required: true
  }
})

</script>

<template>
  <div
    class="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-lg w-60 hover:scale-105">
    <img :src="src" alt="Product 1" class="object-cover p-5" />
    <div class="p-4">
      <h3 class="mb-2 text-xl font-bold text-gray-800">{{ title }}</h3>
      <p class="mb-4 text-gray-600">{{ description }}</p>
      <div class="flex items-center justify-between">
        <span class="text-lg font-semibold text-gray-800">{{ price }}</span>
        <UiBaseButton color="primary">buy</UiBaseButton>
      </div>
    </div>
  </div>
</template>
