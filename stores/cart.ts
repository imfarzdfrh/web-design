import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),

  actions: {
    addToCart(product) {
      const item = this.cartItems.find(i => i.id === product.id)

      if (item) {
        item.quantity++
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(i => i.id !== id)
    },

    clearCart() {
      this.cartItems = []
    }
  },

  persist: {
    storage: persistedState.localStorage
  }
})
