<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'
import { PlusIcon, CheckIcon } from '@heroicons/vue/24/outline'
const props = defineProps<{
  id: number
  name: string
  logo: string
  logodark?: string
  title: string
  description?: string
  price: string
}>()
const cart = useCartStore()
const added = ref(false)
function handleAddToCart() {
  cart.addToCart({
    id: props.id, name: props.name, title: props.title, logo: props.logo,
    price: props.price
  })
  added.value = true
}
</script>
<template>
  <article class="surface card-lift group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[27px] p-4 sm:p-5">
    <NuxtLink :to="'/product/' + id" class="block" :aria-label="'View ' + name">
      <div class="relative flex aspect-[1.45] items-center justify-center overflow-hidden rounded-[21px] bg-gradient-to-br from-[#eeebff] via-[#f3f6ff] to-[#e6f9fb] dark:from-[#282c49] dark:via-[#242b43] dark:to-[#1e3d49]">
        <span class="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold text-[#6259a1] backdrop-blur">Digital</span>
        <img :src="logo" :alt="name + ' logo'" loading="lazy" class="h-20 w-20 object-contain drop-shadow-xl transition duration-500 group-hover:scale-110 sm:h-24 sm:w-24" />
        <UiSimpleArrow class="absolute right-3 top-3 size-4 text-[#8b8bad]" aria-hidden="true" />
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-bold">{{ name }}</h3>
        <p class="mt-2 min-h-10 text-sm leading-5 text-muted">{{ title }}</p>
      </div>
    </NuxtLink>
    <div class="mt-auto flex items-center justify-between gap-3 border-t border-[var(--stroke)] pt-4">
      <div><p class="text-[11px] text-muted">From</p><p class="text-xl font-bold">${{ Number(price).toFixed(2) }}</p></div>
      <button type="button" class="button-primary inline-flex size-11 items-center justify-center rounded-2xl"
        :aria-label="added ? name + ' added to cart' : 'Add ' + name + ' to cart'" @click="handleAddToCart">
        <CheckIcon v-if="added" class="size-5" /><PlusIcon v-else class="size-5" />
      </button>
    </div>
  </article>
</template>
