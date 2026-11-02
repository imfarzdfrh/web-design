<script setup lang="ts">
useSeoMeta({
  title: 'MySite — Discover digital tools for every idea',
  description: 'Explore curated AI assistants, creative apps and digital essentials.'
})
</script>

<template>
  <div>
    <LayoutsMainBanner />
    <div class="page-shell">
      <LayoutsCategory />
      <LayoutsMainProduct />
      <LayoutsListProduct id="featured" title="Popular right now" subtitle="Start with the tools everyone's exploring" category="Popular" />
      <LayoutsListProduct title="AI assistants" subtitle="Make the most of every idea" category="AI Chatbot" />
      <LayoutsListProduct title="Software essentials" subtitle="The foundations for your next project" category="Operating System" />
      <LayoutsOverviewSection />
    </div>
  </div>
</template>
