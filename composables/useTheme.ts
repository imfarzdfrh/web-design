import { readonly, ref, onMounted } from 'vue'

// Shared state prevents multiple switchers from falling out of sync.
const isDarkMode = ref(false)
export const useTheme = () => {
  onMounted(() => {
    if (!import.meta.client) return
    const savedTheme = localStorage.getItem('theme')
    isDarkMode.value = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  })
  const toggleTheme = () => {
    if (!import.meta.client) return
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }
  return { isDarkMode: readonly(isDarkMode), toggleTheme }
}
