<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

const testAdd = () => {
  cart.addToCart({
    id: 1,
    name: 'تیشرت تستی',
    price: 100000
  })
}
</script>

<template>
  <div>
    <h1>سبد خرید</h1>
    <button @click="testAdd" class="bg-green-500 text-white px-4 py-2 rounded mb-4">افزودن تستی</button>
    <div v-if="cart.items.length === 0">هیچی تو سبد نیست 😢</div>
    <ul>
      <li v-for="item in cart.items" :key="item.id">
        {{ item.name }} × {{ item.quantity }} = {{ item.price * item.quantity }} تومان
      </li>
    </ul>
    <p><strong>جمع کل:</strong> {{ cart.total }} تومان</p>
  </div>
</template>
