import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'

interface UserState {
  id: number
  token: string
  roles: string
}

export const useKUNGalgamerStore = defineStore({
  id: 'kungalgamer',
  persist: true,
  state: (): UserState =>
    shallowReactive({
      id: 0,
      token: '',
      roles: '',
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
