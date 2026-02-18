<script setup lang="ts">
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'

const productStore = useProductStore()

const products = computed(() => productStore.products)
</script>

<template>
  <div class="py-10 bg-lightBackground dark:bg-darkBackground dark:text-lightText">
    

    <div class="flex flex-wrap justify-center py-10 space-x-6">
      <!-- Loop over products from Pinia store -->
      <UiMainCard
        v-for="item in products"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :logo="item.logo"        
        :logodark="item.logodark" 
        :title="item.name"
        :description="item.description"
        :price="item.price"
      />
    </div>
  </div>
</template>
