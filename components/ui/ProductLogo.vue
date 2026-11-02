<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  name: string
  logo: string
  logodark?: string | null
  loading?: 'lazy' | 'eager'
}>(), {
  logodark: null,
  loading: 'lazy'
})

// A single image is enough for products with no dark-specific asset.
const hasDarkVariant = computed(() =>
  Boolean(props.logodark && props.logodark !== props.logo)
)
</script>

<template>
  <span class="inline-flex items-center justify-center">
    <template v-if="hasDarkVariant">
      <img
        :src="logo"
        :alt="`${name} logo`"
        :loading="loading"
        decoding="async"
        class="block size-full object-contain dark:hidden"
      />
      <img
        :src="logodark!"
        :alt="`${name} logo`"
        :loading="loading"
        decoding="async"
        class="hidden size-full object-contain dark:block"
      />
    </template>
    <img
      v-else
      :src="logo"
      :alt="`${name} logo`"
      :loading="loading"
      decoding="async"
      class="size-full object-contain"
    />
  </span>
</template>
