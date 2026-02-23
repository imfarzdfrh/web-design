<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from '~/components/ui/BaseInput.vue'
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const productId = Number(route.params.id)
const store = useProductStore()

const product = computed(() => store.products.find(p => p.id === productId) ?? null)
const quantity = ref(1)
const discountCode = ref('')
const isFavorite = ref(false)

const totalPrice = computed(() => {
  const base = product.value?.price ?? 0
  const discount = discountCode.value === 'OFF10' ? 0.9 : 1
  return (base * quantity.value * discount).toFixed(2)
})

const cartStore = useCartStore()

function addToCart() {
  if (product.value) {
    cartStore.addToCart(product.value)
    alert(`Added ${quantity.value} of ${product.value.name} to cart.`)
  }
}

function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}

function increaseQty() {
  quantity.value++
}

function decreaseQty() {
  if (quantity.value > 1) quantity.value--
}
</script>

<template>
  <div
    class="relative bg-lightBackground dark:bg-darkBackground h-full text-darkText dark:text-lightText">
    <div class="container mx-auto py-12 px-4">
      <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img :src="product.image" alt="Product Image" class="w-full rounded-2xl shadow-2xl" />
        </div>
        <div>
          <div class="flex justify-between items-start">
            <h1 class="text-4xl font-bold">{{ product.name }}</h1>
            <button @click="toggleFavorite" class="p-2 rounded-full hover:bg-gray-100">
              <HeartIcon />
            </button>
          </div>
          <p class="mt-2">{{ product.title }}</p>

          <div class="font-sans mt-6">
            <span class="text-3xl font-bold text-gray-900 dark:text-lightText">{{ product.price }}</span>
            <span class="text-lg font-medium text-gray-500 dark:text-gray-300">/month</span>
          </div>

          <div class="mt-8">
            <label class="text-xl font-bold block mb-1 py-2">Quantity</label>
            <div class="flex items-center gap-2">
              <button @click="decreaseQty" class="p-2 bg-gray-300 rounded-md hover:bg-gray-300">
                <ChevronDownIcon class="w-4 h-4 text-black" />
              </button>
              <span class="px-4 py-2 border rounded-md w-16 text-center">{{ quantity }}</span>
              <button @click="increaseQty" class="p-2 bg-gray-300 rounded-md hover:bg-gray-300">
                <ChevronUpIcon class="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          <div class="mt-9">
            <label class="text-lg font-bold">Discount Code</label>
            <div class="flex gap-2 items-center mt-4">
              <BaseInput type="text" placeholder="Enter code" />
              <UiBaseButton color="success" class="h-full mt-7">
                <TagIcon class="w-4 h-4" />
                <p class="px-2">Apply</p>
              </UiBaseButton>
            </div>
          </div>

          <div class="flex gap-4 mt-6">
            <UiBaseButton @click="addToCart" size="large">
              <div class="flex flex-1 gap-5"><ShoppingCartIcon class="w-6 h-6" /> Add to Cart</div>
            </UiBaseButton>
            <UiBookMark />
          </div>
        </div>
      </div>

      <div v-else class="text-center text-lg text-gray-500 dark:text-lightText">
        Product not found.
      </div>

      <div v-if="product" class="mt-16">
        <h2 class="text-2xl font-semibold mb-4">Descraption</h2>
        <div class="p-4 bg-gray-200/45 dark:bg-gray-800/50 rounded-lg flex items-start py-10 shadow-sm">
          <div>
            <p class="font-semibold">{{ product.name }}</p>
            <p class="text-sm mt-1">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="product" class="mt-16">
        <h2 class="text-2xl font-semibold mb-4">User Reviews</h2>
        <div class="space-y-4">
          <div
            v-for="i in 3"
            :key="i"
            class="p-4 bg-gray-200/45 dark:bg-gray-800/50 rounded-lg flex items-start gap-4">
            <img
              :src="`https://i.pravatar.cc/40?img=${i}`"
              class="w-10 h-10 rounded-full object-cover"
              alt="User avatar" />
            <div>
              <p class="font-semibold">User {{ i }}</p>
              <p class="text-sm mt-1">Great product, very satisfied!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
