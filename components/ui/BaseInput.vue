<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  type?: string
  placeholder?: string
  modelValue?: string | number | null
}>(), {
  type: 'text',
  placeholder: ''
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="w-full">
    <label v-if="id" :for="id" class="sr-only">{{ placeholder || id }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue ?? ''"
      :placeholder="placeholder"
      v-bind="$attrs"
      class="w-full rounded-2xl border border-[var(--stroke)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[#8175ec] focus:ring-4 focus:ring-[#8175ec]/10"
      @input="onInput"
    />
  </div>
</template>
