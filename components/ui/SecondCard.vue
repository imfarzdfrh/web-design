
<script setup lang="ts">
defineProps<{
  products: Array<any>
  onView: (id: number) => void
}>()
</script>

<template>
  <div
    v-if="products.length"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
  >
    <div
      v-for="product in products"
      :key="product.id"
      class="group rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      @click="onView(product.id)"
    >
      <!-- Image -->
      <div class="relative overflow-hidden">
        <img
          :src="product.image"
          alt="product image"
          class="w-full h-48 transform group-hover:scale-105 transition duration-300"
        />

        <!-- Price Badge -->
        <span
          class="absolute top-3 right-3 bg-black/80 text-white text-sm px-3 py-1 rounded-full"
        >
          {{ product.price }}
        </span>
      </div>

      <!-- Content -->
      <div class="p-4 flex flex-col h-full">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
          {{ product.name }}
        </h2>

        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
          {{ product.title }}
        </p>

        <!-- Button -->
        <UiBaseButton
          class="mt-4 w-full opacity-90 group-hover:opacity-100 transition"
          @click.stop
        >
          Buy Now
        </UiBaseButton>
      </div>
    </div>
  </div>

  <div
    v-else
    class="text-center text-gray-400 text-lg mt-12"
  >
    No products found.
  </div>
</template>
