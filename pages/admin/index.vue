<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-800 text-white p-6">
      <div class="flex items-center justify-center mb-8">
        <span class="text-2xl font-semibold">Admin Dashboard</span>
      </div>
      <nav>
        <ul class="space-y-4">
          <li>
            <a href="#" class="flex items-center space-x-3 hover:bg-gray-700 p-4 rounded-lg">
              <i class="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center space-x-3 hover:bg-gray-700 p-4 rounded-lg">
              <i class="fas fa-cogs"></i>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center space-x-3 hover:bg-gray-700 p-4 rounded-lg">
              <i class="fas fa-users"></i>
              <span>Users</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <div class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold">Total Users</h3>
          <p class="text-4xl font-bold text-gray-800">150</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold">Total Sales</h3>
          <p class="text-4xl font-bold text-gray-800">$15,000</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold">Orders</h3>
          <p class="text-4xl font-bold text-gray-800">80</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Sales Data (Last 30 Days)</h3>
        <div class="h-64 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})
</script>

