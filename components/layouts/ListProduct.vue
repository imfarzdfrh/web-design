<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { computed, ref } from 'vue'

// تعریف props با تایپ کامل
const props = defineProps<{
  title: string
  category?: string          // اختیاری باشه
}>()

const productStore = useProductStore()

// حالا props.category کاملاً معتبره
if (props.category) {
  productStore.setCategory(props.category)
}

const displayedProducts = computed(() => productStore.filteredProducts)

const currentIndex = ref(0)
const visibleCount = 4
const cardWidth = 280

const next = () => {
  if (currentIndex.value < displayedProducts.value.length - visibleCount) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
<template>
  <div class="py-16 bg-lightBackground dark:bg-darkBackground dark:text-lightText">
    <h2 class="text-xl font-bold p-7 text-darkText dark:text-lightText">
      {{ title }}
    </h2>
    <div class="relative max-w-7xl mx-auto px-7 group">
      <!-- Left Button -->
      <button
        @click="prev"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ◀
      </button>

      <!-- Slider -->
     <div class="overflow-hidden">
        <div
          class="flex gap-5 py-6 transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }">
          <UiMainCard
            v-for="item in displayedProducts"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :logo="item.logo"
            :logodark="item.logodark"
            :title="item.name"
            :description="item.description"
            :price="item.price"
            class="w-[250px] flex-shrink-0"
          />
        </div>
      </div>
      <!--  Right Button -->
      <button
        @click="next"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ▶
      </button>
    </div>
  </div>
</template>
