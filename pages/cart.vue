<script setup>
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
      <LayoutsSteps />

      <div class="py-6 px-4">
        <h2 class="text-xl font-bold">Your Carts</h2>
      </div>

      <!-- Main layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="item in cart.cartItems"
            :key="item.id"
            class="bg-white dark:bg-gray-800/80 rounded-2xl px-5 py-8 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
            <!-- Product info -->
            <div class="flex items-center gap-4 px-2">
              <img
                :src="item.logo"
                :alt="item.name"
                class="w-28 h-28 rounded-3xl shadow-md bg-gray-100/45 dark:invert p-4 " />

              <div class="px-4">
                <h3 class="font-extrabold text-xl text-darkText dark:text-lightText py-2">
                  {{ item.name }}
                </h3>
                <p class="font-light pb-2">{{ item.title }}</p>
                <p class="font-bold text-xl text-gray-500 py-6 dark:text-lightText">${{ item.price }}</p>
              </div>
            </div>

            <!-- Actions -->
            <div class="fle flex-col items-center text-center gap-6">
              <!-- Remove -->
              <button
                @click="removeItem(item.id)"
                class="text-red-500 hover:scale-110 transition py-10 text-2xl">
                🗑
              </button>

              <!-- Quantity -->
              <div class="flex items-center border rounded-full overflow-hidden">
                <button
                  @click="item.quantity > 1 && item.quantity--"
                  class="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-lg dark:text-darkText">
                  −
                </button>

                <input
                  type="number"
                  min="1"
                  v-model.number="item.quantity"
                  class="w-14 text-center outline-none border-x bg-transparent" />

                <button
                  @click="item.quantity++"
                  class="px-4 py-1 bg-gray-100 hover:bg-gray-200 text-lg dark:text-darkText">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow h-fit text-darkText dark:text-lightText">
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

          <UiBaseButton class="w-full"> Proceed to Checkout</UiBaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
