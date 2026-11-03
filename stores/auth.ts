import { defineStore } from 'pinia'
import { useCookie } from '#app'

// Frontend-only demonstration session. Never treat this as real authentication.
// A secure production implementation requires a backend-issued, HttpOnly session.
const DEMO_TOKEN = 'fake-token'
const DEMO_EMAIL = 'test@test.com'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { email: string },
    token: null as string | null
  }),

  actions: {
    async login(email: string, password: string) {
      // Intentionally unavailable in production until a real auth API is connected.
      if (!import.meta.dev || email !== DEMO_EMAIL || password !== '123456') {
        return false
      }

      this.user = { email: DEMO_EMAIL }
      this.token = DEMO_TOKEN
      const token = useCookie<string | null>('token', { sameSite: 'lax' })
      token.value = DEMO_TOKEN
      return true
    },

    logout() {
      this.user = null
      this.token = null
      const token = useCookie<string | null>('token')
      token.value = null
    },

    fetchUser() {
      const token = useCookie<string | null>('token')
      if (import.meta.dev && token.value === DEMO_TOKEN) {
        this.user = { email: DEMO_EMAIL }
        this.token = DEMO_TOKEN
      } else {
        this.user = null
        this.token = null
      }
    }
  },

  getters: {
    isLoggedIn: state => !!state.user
  }
})
