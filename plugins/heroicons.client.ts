import { defineNuxtPlugin } from '#app'
import * as SolidIcons from '@heroicons/vue/24/solid'
import * as OutlineIcons from '@heroicons/vue/24/outline'

export default defineNuxtPlugin(nuxtApp => {
  // ثبت همه آیکون‌های outline
  for (const [name, comp] of Object.entries(OutlineIcons)) {
    nuxtApp.vueApp.component(name, comp)
  }
  // ثبت همه آیکون‌های solid
  for (const [name, comp] of Object.entries(SolidIcons)) {
    nuxtApp.vueApp.component(name, comp)
  }
})
