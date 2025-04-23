import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'AI Software',
      description: 'Advanced software for data analysis',
      price: 99,
      image: '/temp/pic/chatgpt-banner.jpg',
      logo: '/temp/pic/chatgpt.png',
      logodark: '/temp/pic/chatgptdark.png'
    },
    {
      id: 2,
      name: 'Chatbot AI',
      description: 'Automated chatbot for customer support',
      price: 59,
      image: '/temp/pic/deepseek-banner.png',
      logo: '/temp/pic/chatgpt.png'
    },
    {
      id: 3,
      name: 'Image Generator',
      description: 'Generate images with AI',
      price: 120,
      image: '/temp/pic/grok-banner.png',
      logo: '/temp/pic/chatgpt.png'
    },
    {
      id: 4,
      name: 'Image Generator',
      description: 'Generate images with AI',
      price: 120,
      image: '/temp/pic/runaway-banner.png',
      logo: '/temp/pic/chatgpt.png'
    },
    {
      id: 5,
      name: 'Image Generator',
      description: 'Generate images with AI',
      price: 120,
      image: '/temp/pic/chatgpt-banner.jpg',
      logo: '/temp/pic/chatgpt.png'
    },
    {
      id: 6,
      name: 'Image Generator',
      description: 'Generate images with AI',
      price: 120,
      image: '/temp/pic/chatgpt-banner.jpg',
      logo: '/temp/pic/chatgpt.png'
    }
  ])

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
