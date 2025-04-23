import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Chatgpt',
      description: 'Advanced software for data analysis',
      price: 99000,
      image: '/temp/pic/chatgpt-banner.jpg',
      logo: '/temp/pic/chatgpt.png',
      logodark: '/temp/pic/chatgptdark.png'
    },
    {
      id: 2,
      name: 'DeepSeek',
      description: 'Automated chatbot for customer support',
      price: 59000,
      image: '/temp/pic/deepseek-banner.png',
      logo: '/temp/pic/deepseek.png',
      logodark: '/temp/pic/deepseekdark.png'
    },
    {
      id: 3,
      name: 'Grok',
      description: 'Advanced software smart ai ',
      price: 12000,
      image: '/temp/pic/grok-banner.png',
      logo: '/temp/pic/grok.png',
      logodark: '/temp/pic/grokdark.png'
    },
    {
      id: 4,
      name: 'Runaway',
      description: 'Generate video with AI',
      price: 120000,
      image: '/temp/pic/runaway-banner.png',
      logo: '/temp/pic/runaway.png',
      logodark : '/temp/pic/runawaydark.png'
    },
    {
      id: 5,
      name: 'Netflix',
      description: 'all movie world best quality',
      price: 120000,
      image: '/temp/pic/netflix-banner.png',
      logo: '/temp/pic/netfilix.png',
      logodark: '/temp/pic/netfilix.png'
    },
    {
      id: 6,
      name: 'CapCut',
      description: 'capcut video editor',
      price: 120000,
      image: '/temp/pic/capcut-banner.png',
      logo: '/temp/pic/capcut.png',
      logodark: '/temp/pic/capcut.png'
    }
  ])

  // تابع جستجو برای محصولات
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
