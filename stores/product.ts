import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  logo: string
  logodark: string
  category: string         
}

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Chatgpt',
      description: 'Advanced software for data analysis',
      price: '12$',
      image: '/temp/pic/chatgpt-banner.jpg',
      logo: '/temp/pic/chatgpt.png',
      logodark: '/temp/pic/chatgptdark.png',
      category: 'AI Chatbot'
    },
    {
      id: 2,
      name: 'DeepSeek',
      description: 'Automated chatbot',
      price: '29$',
      image: '/temp/pic/deepseek-banner.png',
      logo: '/temp/pic/deepseek.png',
      logodark: '/temp/pic/deepseekdark.png',
      category: 'AI Chatbot'
    },
    {
      id: 3,
      name: 'Grok',
      description: 'Advanced software smart ai ',
      price: '15$',
      image: '/temp/pic/grok-banner.png',
      logo: '/temp/pic/grok.png',
      logodark: '/temp/pic/grokdark.png',
      category: 'AI Chatbot'
    },
    {
      id: 4,
      name: 'Runaway',
      description: 'Generate video with AI',
      price: '54$',
      image: '/temp/pic/runaway-banner.png',
      logo: '/temp/pic/runaway.png',
      logodark: '/temp/pic/runawaydark.png',
      category: 'AI video'
    },
    {
      id: 5,
      name: 'Netflix',
      description: 'all movie world best quality',
      price: '66$',
      image: '/temp/pic/netflix-banner.png',
      logo: '/temp/pic/netfilix.png',
      logodark: '/temp/pic/netfilix.png',
      category: 'Movie Subscription'
    },
    {
      id: 6,
      name: 'CapCut',
      description: 'capcut video editor',
      price: '120$',
      image: '/temp/pic/capcut-banner.png',
      logo: '/temp/pic/capcut.png',
      logodark: '/temp/pic/capcut.png',
      category: 'AI video'
    },
    {
      id: 7,
      name: 'Windows11',
      description: 'Microsoft latest operating system',
      price: '70$',
      image: '/temp/pic/windows11-banner.jpg',
      logo: '/temp/pic/windows11-icon.png',
      logodark: '/temp/pic/windows11-icon.png',
      category: 'Operating System'
    },
    {
      id: 8,
      name: 'Windows10',
      description: 'Microsoft Operating Best for Game',
      price: '60$',
      image: '/temp/pic/windows10-banner.jpg',
      logo: '/temp/pic/windows-10-icon.png',
      logodark: '/temp/pic/windows-10-icon.png',
      category: 'Operating System'
    },
    {
      id: 9,
      name: 'Windows8.1',
      description: 'Microsoft Operating 8.1',
      price: '50$',
      image: '/temp/pic/windows8.1-banner.jpg',
      logo: '/temp/pic/windows8.1-logo.png',
      logodark: '/temp/pic/windows8.1-logo.png',
      category: 'Operating System'
    },
    {
      id: 10,
      name: 'Windows7',
      description: 'Microsoft Operating 7',
      price: '30$',
      image: '/temp/pic/windows7-banner.jpg',
      logo: '/temp/pic/windows7-logo.png',
      logodark: '/temp/pic/windows7-logo.png',
      category: 'Operating System'
    }
  ])

const selectedCategory = ref<string>('')   // خالی یعنی همه نمایش داده شوند

  const filteredProducts = computed(() => {
    if (!selectedCategory.value) {
      return products.value
    }
    return products.value.filter(p => p.category === selectedCategory.value)
  })

  function setCategory(category: string) {
    selectedCategory.value = category
  }

  // اگر هنوز می‌خواهی search هم داشته باشی
  function searchProducts(query: string) {
    const list = filteredProducts.value // ← روی لیست فیلتر شده جستجو می‌کنیم
    return list.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  return {
    products,
    selectedCategory,
    filteredProducts,
    setCategory,
    searchProducts
  }
})
