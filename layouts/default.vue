<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-dvh pb-[72px]">
    <LayoutsNavBar class="flex-none" />
    <slot />
    <LayoutsFooter class="flex-none" />
  </div>
</template>
