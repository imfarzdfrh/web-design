// stores/cart.ts
import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),

  actions: {
    addToCart(product) {
      this.cartItems.push(product)
    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
    }
  },

  persist: true // 👈 همین خط جادویی
})
