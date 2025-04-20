import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'AI Software',
      description: 'Advanced software for data analysis',
      price: 99,
      image: '/temp/pic/chatgpt-banner.jpg'
    },
    {
      id: 2,
      name: 'Chatbot AI',
      description: 'Automated chatbot for customer support',
      price: 59,
      image: '/temp/pic/chatgpt-banner.jpg'
    },
    {
      id: 3,
      name: 'Image Generator',
      description: 'Generate images with AI',
      price: 120,
      image: '/temp/pic/chatgpt-banner.jpg'
    }
  ])

  // جستجو در محصولات
  const searchProducts = (query: string) => {
    return products.value.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  return {
    products,
    searchProducts
  }
})
