<script setup>
</script>

<template>
  <div class="container mx-auto py-12 bg-lightBackground dark:bg-darkBackground text-darkText dark:text-lightText">
    <h1 class="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

    <!-- Cart items table -->
    <div class="overflow-x-auto shadow-lg rounded-lg">
      <table class="min-w-full table-auto">
        <thead>
          <tr class=" border-b">
            <th class="px-6 py-3 text-left text-sm font-medium">Product</th>
            <th class="px-6 py-3 text-left text-sm font-medium">Price</th>
            <th class="px-6 py-3 text-left text-sm font-medium">Quantity</th>
            <th class="px-6 py-3 text-left text-sm font-medium">Total</th>
            <th class="px-6 py-3 text-left text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Cart item 1 -->
          <tr class="border-b hover:bg-gray-50 bg-lightBackground dark:bg-darkBackground text-darkText dark:text-lightText">
            <td class="px-6 py-4 text-sm text-gray-800">
              <div class="flex items-center">
                <img
                  class="w-16 h-16 rounded-lg"
                  src="/temp/pic/chatgpt.png"
                  alt="Product 1" >
                <span class="ml-4">Product 1</span>
              </div>
            </td>
            <td class="px-6 py-4 text-sm bg-lightBackground dark:bg-darkBackground text-darkText dark:text-lightText">$29.99</td>
            <td class="px-6 py-4 text-sm bg-lightBackground dark:bg-darkBackground text-darkText dark:text-lightText">
              <input type="number" value="1" min="1" class="border px-2 py-1 w-16" />
            </td>
            <td class="px-6 py-4 text-sm text-gray-800">$29.99</td>
            <td class="px-6 py-4 text-sm text-darkText dark:text-lightText ">
              <button class="text-danger hover:text-danger">Remove</button>
            </td>
          </tr>

          <!-- Cart item 2 -->
          <tr class="border-b hover:bg-gray-50">
            <td class="px-6 py-4 text-sm text-gray-800">
              <div class="flex items-center">
                <img
                  class="w-16 h-16 rounded-lg"
                  src="/temp/pic/deepseek.png"
                  alt="Product 2" >
                <span class="ml-4">Product 2</span>
              </div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-800">$19.99</td>
            <td class="px-6 py-4 text-sm text-gray-800">
              <input type="number" value="1" min="1" class="border px-2 py-1 w-16" />
            </td>
            <td class="px-6 py-4 text-sm text-gray-800">$19.99</td>
            <td class="px-6 py-4 text-sm text-gray-800">
              <button class="text-red-600 hover:text-red-800">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Cart total section -->
    <div class="flex justify-end mt-6">
      <div class="w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
        <div class="flex justify-between mb-2">
          <span class="text-sm text-gray-600">Subtotal</span>
          <span class="text-sm text-gray-800">$49.98</span>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-sm text-gray-600">Shipping</span>
          <span class="text-sm text-gray-800">$5.00</span>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-lg font-semibold text-gray-800">Total</span>
          <span class="text-lg font-semibold text-gray-800">$54.98</span>
        </div>
        <button class="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Optional: Additional styling can go here */
</style>
