<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

const subtotal = computed(() =>
  cart.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function removeItem(id) {
  cart.removeFromCart(id)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Title -->
      <h1 class="text-3xl font-light text-center mb-10 text-darkText dark:text-lightText">
        Your Shopping Cart
      </h1>

      <!-- Steps -->
      <div class="flex justify-center gap-10 mb-16">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-full bg-black dark:bg-gray-600/50 text-white flex items-center justify-center">1</span>
          <span class="font-medium">Shopping cart</span>
        </div>
        <div class="flex items-center gap-2 text-gray-400">
          <span class="w-8 h-8 rounded-full bg-gray-200 dark:text-darkText flex items-center justify-center">2</span>
          <span>Checkout details</span>
        </div>
        <div class="flex items-center gap-2 text-gray-400">
          <span class="w-8 h-8 rounded-full bg-gray-200 dark:text-darkText flex items-center justify-center">3</span>
          <span>Order complete</span>
        </div>
      </div>

      <div class="py-6 px-4">
        <h2 class="text-xl font-bold">Your Carts</h2>
      </div>

      <!-- Main layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-6">

          <div
            v-for="item in cart.cartItems"
            :key="item.id"
            class="bg-white dark:bg-gray-800/80 rounded-2xl px-5 py-8 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <!-- Product info -->
            <div class="flex items-center gap-4">
              <img
                :src="item.logo"
                :alt="item.name"
                class="w-32 h-32 rounded-full bg-gray-100 dark:invert p-2"
              />

              <div>
                <h3 class="font-semibold text-lg text-darkText dark:text-lightText">
                  {{ item.name }}
                </h3>
                <p>{{ item.title }}</p>
                <p class="font-bold text-gray-500 py-6">${{ item.price }}</p>
              </div>
            </div>

            <!-- Actions -->
            <div class="fle flex-col items-center gap-6">

                <!-- Remove -->
              <button @click="removeItem(item.id)" class="text-red-500 hover:scale-110 transition">
                🗑
              </button>

              <!-- Quantity -->
              <div class="flex items-center border rounded-full overflow-hidden">
                <button
                  @click="item.quantity > 1 && item.quantity--"
                  class="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-lg"
                >
                  −
                </button>

                <input
                  type="number"
                  min="1"
                  v-model.number="item.quantity"
                  class="w-14 text-center outline-none border-x bg-transparent"
                />

                <button
                  @click="item.quantity++"
                  class="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-lg"
                >
                  +
                </button>
              </div>

             

            
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow h-fit text-darkText dark:text-lightText"
        >
          <h2 class="text-xl font-semibold mb-6">Order Summary</h2>

          <div class="space-y-4 text-sm">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
          </div>

          <hr class="my-6 dark:border-gray-700" />

          <div class="flex justify-between text-lg font-semibold mb-6">
            <span>Total</span>
            <span>${{ (subtotal + 5).toFixed(2) }}</span>
          </div>

          <UiBaseButton class="w-full">
            Proceed to Checkout →
          </UiBaseButton>
        </div>

      </div>
    </div>
  </div>
</template>