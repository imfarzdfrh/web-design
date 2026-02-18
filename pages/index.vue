<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isContentLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isContentLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="relative">
    <!-- 🔝 Banner | Full Width -->
    <LayoutsMainBanner />

    <!-- 🧩 Content with Sidebar -->
    <div class="flex max-w-screen-2xl mx-auto">
      <LayoutsSidebar />

      <main class="flex-1 px-6 py-8">
        <LayoutsMainProduct />
        <LayoutsListProduct />
        <LayoutsCategory />
        <LayoutsOverviewSection />
      </main>
    </div>

    <!-- 🔻 Footer | Full Width -->
    <LayoutsFooter v-if="isContentLoaded" />
  </div>
</template>

