/*
 * 用户的信息存储
 */
import { defineStore } from 'pinia'
import { LoginRequestData, LoginResponseData } from '@/api/index'
import { postLoginDataApi } from '@/api/index'

interface UserState {
  uid: number
  name: string
  avatar: string
  token: string
  refreshToken: string
}

// 这里用了 pinia-plugin-persistedstate，直接存储 token 即可
export const useKUNGalgameUserStore = defineStore({
  id: 'kungalgamer',
  persist: true,
  state: (): UserState => ({
    uid: 0,
    name: '',
    avatar: '',
    token: '',
    refreshToken: '',
  }),
  getters: {},
  actions: {
    setUserInfo(uid: number, name: string, avatar: string): void {
      this.uid = uid
      this.name = name
      this.avatar = avatar
    },
    setToken(token: string, refreshToken: string): void {
      this.token = token
      this.refreshToken = refreshToken
    },
    login(LoginRequestData: LoginRequestData): Promise<LoginResponseData> {
      return new Promise((resolve, reject) => {
        // 这里是向后端发请求的函数
        postLoginDataApi({
          name: LoginRequestData.name,
          password: LoginRequestData.password,
        })
          .then((res) => {
            if (res.data) {
              this.setUserInfo(res.data.uid, res.data.name, res.data.avatar)
              this.setToken(res.data.token, res.data.refreshToken)
            } else
              (e: any) => {
                throw new Error('500 Server ERROR', e)
              }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
