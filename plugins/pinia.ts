import { createPinia } from 'pinia'
import { defineNuxtPlugin } from '#app'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(({ vueApp }) => {
  const pinia = createPinia()
  vueApp.use(pinia)
  pinia.use(piniaPluginPersistedstate)
})