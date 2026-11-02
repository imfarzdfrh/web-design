export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'MySite — Digital tools, made simple',
      meta: [
        { name: 'description', content: 'Discover AI tools, creative software and digital products in one curated marketplace.' },
        { name: 'theme-color', content: '#0d1120' }
      ]
    }
  }
})
