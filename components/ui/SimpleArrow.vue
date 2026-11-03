<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  direction?: 'right' | 'left' | 'up' | 'down'
}>(), {
  direction: 'right'
})

const rotation = computed(() => ({
  right: '',
  left: 'rotate-180',
  up: '-rotate-90',
  down: 'rotate-90'
})[props.direction])
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
    class="inline-block size-5 shrink-0 transform-gpu"
    :class="rotation"
  >
    <path
      d="M8 4L16 12L8 20"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
