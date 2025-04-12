import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { email: string },
    token: null as string | null
  }),

  actions: {
    async login(email: string, password: string) {
      if (email === 'test@test.com' && password === '123456') {
        this.user = { email }
        this.token = 'fake-token'

        const token = useCookie('token')
        token.value = this.token

        return true
      } else {
        return false
      }
    },

    logout() {
      this.user = null
      this.token = null

      const token = useCookie('token')
      token.value = null
    },

    fetchUser() {
      const token = useCookie('token')
      if (token.value) {
        this.token = token.value
        this.user = { email: 'test@test.com' } 
      }
    }
  },

  getters: {
    isLoggedIn: state => !!state.user
  }
})
