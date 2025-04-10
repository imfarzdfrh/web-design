<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-lg px-5 py-2 text-m font-semibold',
      'transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
      buttonColorClass,
      buttonSizeClass
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary', 
  },
  size: {
    type: String,
    default: 'medium', 
  },
})

// محاسبه کلاس دینامیک برای رنگ
const buttonColorClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'bg-primary text-white';
    case 'danger':
      return 'bg-danger text-white';
    case 'black':
      return 'bg-black text-white';  
      case 'success':
      return 'bg-success text-white'; 
      case 'warning':
      return 'bg-warning text-black'; 
    default:
      return 'bg-gray-200 text-black'; 
  }
});

const buttonSizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-sm py-1 px-3'; 
    case 'large':
      return 'text-lg py-3 px-6'; 
    case 'medium':
    default:
      return 'text-base py-2 px-5'; 
  }
});
</script>

<style scoped>
</style>
