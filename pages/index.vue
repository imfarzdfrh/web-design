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
    <div class="flex max-w-screen-2xl mx-20 ">
      <LayoutsSidebar />

      <main class="flex-1 px-6 py-8">
        <LayoutsMainProduct />
        <LayoutsListProduct title="All Products" :categories="[]"/>
        <LayoutsListProduct title="Operating System" category="Operating System"  />
        <LayoutsListProduct title="AI Video" category="AI Video"  />


        <LayoutsCategory />
        <LayoutsOverviewSection />
      </main>
    </div>

    <!-- 🔻 Footer | Full Width -->
    <LayoutsFooter v-if="isContentLoaded" />
  </div>
</template>



