<script setup>
</script>

<template>
  <div class="flex w-full h-screen bg-lightBackground dark:bg-darkBackground">
    <div class="container mx-auto py-12">
      <h1 class="text-3xl font-bold text-center mb-6 text-darkText dark:text-lightText">
        Shopping Cart
      </h1>

      <!-- Cart items table -->
      <div class="overflow-x-auto shadow-lg rounded-lg bg-lightBackground/85 dark:bg-gray-800/50 my-10">
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
            <tr class="border-b dark:border-none text-darkText ">
              <td class="px-6 py-4 text-sm text-darkText dark:text-lightText">
                <div class="flex items-center">
                  <img class="w-16 h-16 rounded-lg" src="/temp/pic/chatgpt.png" alt="Product 1" />
                  <span class="ml-4">Chatgpt ai</span>
                </div>
              </td>
              <td
                class="px-6 py-4 text-s text-darkText dark:text-lightText">
                $29.99
              </td>
              <td
                class="px-6 py-4 text-sm bg-lightBackgroun text-darkText">
                <input type="number" value="1" min="1" class="border px-2 py-1 w-16" />
              </td>
              <td class="px-6 py-4  text-gray-800 dark:text-lightText">$29.99</td>
              <td class="px-6 py-4  text-darkText dark:text-lightText">
                 <TrashIcon class="h-6 w-6 text-danger" />
              </td>
            </tr>

            <!-- Cart item 2 -->
            <tr class="border-b dark:border-none text-darkText">
              <td class="px-6 py-4 text-sm text-gray-800 dark:text-lightText">
                <div class="flex items-center">
                  <img class="w-16 h-16 rounded-lg" src="/temp/pic/deepseek.png" alt="Product 2" />
                  <span class="ml-4">DeepSeek</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-800 dark:text-lightText">$19.99</td>
              <td class="px-6 py-4 text-gray-800">
                <input type="number" value="1" min="1" class="border px-2 py-1 w-16" />
              </td>
              <td class="px-6 py-4 text-sm text-gray-800 dark:text-lightText">$19.99</td>
              <td class="px-6 py-4 text-sm text-gray-800">
                 <TrashIcon class="h-6 w-6 text-danger" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Cart total section -->
      <div class="flex justify-end mt-6 ">
        <div class="w-1/3 bg-lightBackground/85 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg text-darkText dark:text-lightText">
          <h2 class="text-xl font-semibold  mb-4">Order Summary</h2>
          <div class="flex justify-between mb-2">
            <span class="text-sm ">Subtotal</span>
            <span class="text-sm ">$49.98</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-sm ">Shipping</span>
            <span class="text-sm ">$5.00</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-lg font-semibold ">Total</span>
            <span class="text-lg font-semibold ">$54.98</span>
          </div>
          <UiBaseButton class="w-full py-2 px-4 ">
            Proceed to Checkout
          </UiBaseButton>
        </div>
      </div>
    </div>
  </div>
</template>