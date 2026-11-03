import { defineStore } from 'pinia'

export interface CartItem {
  id: number
  name: string
  title: string
  image: string
  logo: string
  logodark?: string
  price: number
  quantity: number
}

type CartProduct = {
  id: number
  name: string
  title?: string
  image?: string
  logo?: string
  logodark?: string
  price: number | string
}

export const useCartStore = defineStore('cart', {
  state: (): { cartItems: CartItem[] } => ({
    cartItems: []
  }),
  getters: {
    itemCount: state => state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: state => state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
  actions: {
    addToCart(product: CartProduct, quantity = 1) {
      const count = Math.max(1, Math.floor(Number(quantity) || 1))
      const item = this.cartItems.find(i => i.id === product.id)
      if (item) {
        item.quantity += count
        // Refresh theme-specific metadata when upgrading an older saved cart.
        if (product.logodark) item.logodark = product.logodark
        return
      }
      const price = Number(String(product.price).replace(/[^0-9.]/g, ''))
      this.cartItems.push({
        id: product.id,
        name: product.name,
        title: product.title ?? product.name,
        image: product.image ?? product.logo ?? '',
        logo: product.logo ?? product.image ?? '',
        logodark: product.logodark,
        price: Number.isFinite(price) ? price : 0,
        quantity: count
      })
    },
    setQuantity(id: number, value: number) {
      const item = this.cartItems.find(i => i.id === id)
      if (item) item.quantity = Math.max(1, Math.min(99, Math.floor(Number(value) || 1)))
    },
    removeFromCart(id: number) {
      this.cartItems = this.cartItems.filter(i => i.id !== id)
    },
    clearCart() {
      this.cartItems = []
    }
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage()
  }
})
