<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: '1',
  },
  type: {
    type: String,
    default: 'email',
  },
  placeholder: {
    type: String,
    default: 'Enter your email',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits();

const email = ref(props.modelValue);

const updateEmail = () => {
  emit('update:modelValue', email.value);
};
</script>

<template>
  <div class="flex w-full max-w-xs">
    <label :for="id" class="block  text-sm font-semibold text-gray-700 dark:text-gray-300">
    </label>
    <input
      :type="type"
      :id="id"
      v-bind="$attrs"
      v-model="email"
      :placeholder="placeholder"
      class="w-full px-4 py-3 border border-gray-400/50 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
      required
    >
  </div>
</template>
