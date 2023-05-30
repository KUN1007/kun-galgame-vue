import { defineStore } from 'pinia'

interface UserState {
  token: string
}

export const useKUNGalgamerStore = defineStore({
  id: 'kungalgamer',
  persist: true,
  state: (): UserState => ({
    // TODO:
    token: 'KUNGalgame',
  }),
  getters: {
    getToken(): string {
      return this.token
    },
  },
  actions: {
    setToken(token: string): void {
      this.token = token
    },
  },
})
