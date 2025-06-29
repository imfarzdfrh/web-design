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
  <div class="flex w-full h-screen bg-lightBackground dark:bg-darkBackground">
    <div class="container mx-auto py-12">
      <h1 class="text-3xl font-bold text-center mb-6 text-darkText dark:text-lightText">
        Shopping Cart
      </h1>

      <!-- Cart items table -->
      <div
        class="overflow-x-auto shadow-lg rounded-lg bg-lightBackground/85 dark:bg-gray-800/50 my-10">
        <table class="min-w-full table-auto mt-4">
          <thead>
            <tr class="border-b dark:border-none dark:text-lightText">
              <th class="px-6 py-3 text-left font-medium">Product</th>
              <th class="px-6 py-3 text-left font-medium">Price</th>
              <th class="px-6 py-3 text-left font-medium">Quantity</th>
              <th class="px-6 py-3 text-left font-medium">Total</th>
              <th class="px-6 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Cart item 1 -->
            <tr
              v-for="item in cart.cartItems"
              :key="item.id"
              class="border-b dark:border-none text-darkText">
              <td class="px-6 py-4 text-sm text-darkText dark:text-lightText">
                <div class="flex items-center">
                  <img :src="item.logo" class="w-16 h-16 rounded-lg" :alt="item.name" >
                  <span class="ml-4">{{ item.name }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-s text-darkText dark:text-lightText">${{ item.price }}</td>
              <td class="px-6 py-4 text-sm bg-lightBackground text-darkText">
                <input
                  type="number"
                  v-model.number="item.quantity"
                  min="1"
                  class="border px-2 py-1 w-16" >
              </td>
              <td class="px-6 py-4 text-gray-800 dark:text-lightText">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </td>
              <td class="px-6 py-4 text-darkText dark:text-lightText">
                <TrashIcon class="h-6 w-6 text-danger" @click="removeItem(item.id)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Cart total section -->
      <div class="flex justify-end mt-6">
        <div
          class="w-1/3 bg-lightBackground/85 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg text-darkText dark:text-lightText">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
          <div class="flex justify-between mb-2">
            <span class="text-sm">Subtotal</span>
            <span class="text-sm">${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-sm">Shipping</span>
            <span class="text-sm">$5.00</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-lg font-semibold">Total</span>
            <span class="text-sm">${{ subtotal.toFixed(2) }}</span>
          </div>
          <UiBaseButton class="w-full py-2 px-4"> Proceed to Checkout </UiBaseButton>
        </div>
      </div>
    </div>
  </div>
</template>