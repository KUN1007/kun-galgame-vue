import { defineStore } from 'pinia'

interface UserState {
  token: string
}

/* 模拟数据 */

export const useKUNGalgamerStore = defineStore({
  id: 'kungalgamer',
  persist: true,
  state: (): UserState => ({
    token: 'KUN',
  }),
  getters: {
    getToken(): string {
      return this.token
    },
  },
})
