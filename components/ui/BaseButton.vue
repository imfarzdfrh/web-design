<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  }
})

const buttonColorClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'bg-gradient-primary text-white'
    case 'danger':
      return 'bg-danger text-white'
    case 'black':
      return 'bg-black text-white'
    case 'success':
      return 'bg-gradiant-success text-black'
    case 'warning':
      return 'bg-warning text-black'
    default:
      return 'bg-gray-200 text-black'
  }
})

const buttonSizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-sm  px-3'
    case 'large':
      return 'text-lg px-6'
    case 'medium':
    default:
      return 'text-base px-5'
  }
})

const buttonHoverClass = computed(() => {
  return 'hover:shadow-[0px_1px_30px_rgba(80,63,205,0.5)]'
})
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out ',
      buttonColorClass,
      buttonSizeClass,
      buttonHoverClass
    ]">
    <slot />
  </button>
</template>
