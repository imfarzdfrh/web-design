// stores/cart.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<any[]>([])

  function addToCart(product: any) {
    const existing = cartItems.value.find(p => p.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(id: number) {
    cartItems.value = cartItems.value.filter(item => item.id !== id)
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
  }
},
  {
    persist: {
      storage: process.client ? sessionStorage : null,
    },
  }
)
