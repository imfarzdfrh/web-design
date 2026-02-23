import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: number
  name: string
  title: string
  description: string
  price: string
  image: string
  logo: string
  logodark: string
  categories: string[]
}

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Chatgpt',
      title: 'Advanced software for data analysis',
      description: 'Advanced software for data analysis',
      price: '12$',
      image: '/temp/pic/chatgpt-banner.jpg',
      logo: '/temp/pic/chatgpt.png',
      logodark: '/temp/pic/chatgptdark.png',
      categories: ['AI Chatbot', 'Popular', 'Top Sellers']
    },
    {
      id: 2,
      name: 'DeepSeek',
      title: 'Automated chatbot',
      description: 'Automated chatbot',
      price: '29$',
      image: '/temp/pic/deepseek-banner.png',
      logo: '/temp/pic/deepseek.png',
      logodark: '/temp/pic/deepseekdark.png',
      categories: ['AI Chatbot', 'Popular']
    },
    {
      id: 3,
      name: 'Grok',
      title: 'Advanced software smart ai',
      description: 'Advanced software smart ai ',
      price: '15$',
      image: '/temp/pic/grok-banner.png',
      logo: '/temp/pic/grok.png',
      logodark: '/temp/pic/grokdark.png',
      categories: ['AI Chatbot', 'Top Sellers']
    },
    {
      id: 4,
      name: 'Runaway',
      title: 'Generate video with AI',
      description: 'Generate video with AI',
      price: '54$',
      image: '/temp/pic/runaway-banner.png',
      logo: '/temp/pic/runaway.png',
      logodark: '/temp/pic/runawaydark.png',
      categories: ['AI Video', 'Popular', 'Top Sellers']
    },
    {
      id: 5,
      name: 'Netflix',
      title: 'all movie world best quality',
      description: 'all movie world best quality',
      price: '66$',
      image: '/temp/pic/netflix-banner.png',
      logo: '/temp/pic/netfilix.png',
      logodark: '/temp/pic/netfilix.png',
      categories: ['Movie', 'Popular', 'Top Sellers']
    },
    {
      id: 6,
      name: 'CapCut',
      title: 'CapCut Video Editor',
      description: 'capcut video editor',
      price: '120$',
      image: '/temp/pic/capcut-banner.png',
      logo: '/temp/pic/capcut.png',
      logodark: '/temp/pic/capcut.png',
      categories: ['Video Editor']
    },
    {
      id: 7,
      name: 'Windows11',
      title: 'Microsoft latest operating system',
      description: `Windows 11 is Microsoft’s current operating system, featuring a modern, centered,
and rounded-corner design (Fluent Design) with enhanced productivity tools
like Snap Layouts, improved virtual desktops, and integrated AI via Copilot.

Key Features and Enhancements

Design & UI:
- A centered Taskbar and Start menu
- Refreshed, translucent, rounded aesthetic

Productivity:
- Snap Layouts for window organization
- File Explorer with tabs

AI Integration:
- Built-in Copilot for AI-driven tasks
- Generative erase in Photos
- AI-driven Smart App Control

Gaming:
- DirectStorage for faster load times
- Auto HDR support

Security:
- Requires TPM 2.0 and Secure Boot
- Windows Hello biometric authentication

System Requirements:
Processor: 1 GHz or faster, 2+ cores (64-bit)
RAM: 4 GB or more
Storage: 64 GB or larger
Firmware: UEFI, Secure Boot capable
TPM: Trusted Platform Module (TPM 2.0)
`,
      price: '70$',
      image: '/temp/pic/windows11-banner.jpg',
      logo: '/temp/pic/windows11-icon.png',
      logodark: '/temp/pic/windows11-icon.png',
      categories: ['Operating System', 'Popular', 'Top Sellers']
    },
    {
      id: 8,
      name: 'Windows10',
      title: 'Microsoft Operating Best for Game',
      description: 'Microsoft Operating Best for Game',
      price: '60$',
      image: '/temp/pic/windows10-banner.jpg',
      logo: '/temp/pic/windows-10-icon.png',
      logodark: '/temp/pic/windows-10-icon.png',
      categories: ['Operating System', 'Top Sellers']
    },
    {
      id: 9,
      name: 'Windows8.1',
      title: 'Microsoft Operating 8.1',
      description: 'Microsoft Operating 8.1',
      price: '50$',
      image: '/temp/pic/windows8.1-banner.jpg',
      logo: '/temp/pic/windows8.1-logo.png',
      logodark: '/temp/pic/windows8.1-logo.png',
      categories: ['Operating System', 'Top Sellers']
    },
    {
      id: 10,
      name: 'Windows7',
      title: 'Microsoft Operating 7',
      description: 'Microsoft Operating 7',
      price: '30$',
      image: '/temp/pic/windows7-banner.jpg',
      logo: '/temp/pic/windows7-logo.png',
      logodark: '/temp/pic/windows7-logo.png',
      categories: ['Operating System', 'Popular', 'Top Sellers']
    }
  ])
  const selectedCategory = ref<string | null>(null)

  const filteredProducts = computed(() => {
    if (!selectedCategory.value) {
      return products.value
    }

    return products.value.filter(product => product.categories.includes(selectedCategory.value!))
  })

  function setCategory(category: string) {
    selectedCategory.value = category
  }

  function searchProducts(query: string) {
    const list = filteredProducts.value
    return list.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
  }

  return {
    products,
    selectedCategory,
    filteredProducts,
    setCategory,
    searchProducts
  }
})
