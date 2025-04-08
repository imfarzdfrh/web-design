<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'danger'
}>()

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400'
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400'
    default:
      return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400'
  }
})
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold',
      'transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClass,
    ]"
  >
    <slot />
  </button>
</template>
