/*
 * 用户的信息存储
 */
import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import { LoginRequestData, LoginResponseData } from '@/api/type'
import { postLoginDataApi } from '@/api/login/index'

interface UserState {
  uid: Ref<number>
  avatar: Ref<string>
  token: Ref<string>
  refreshToken: Ref<string>
}

// 这里用了 pinia-plugin-persistedstate，直接存储 token 即可
export const useKUNGalgamerStore = defineStore({
  id: 'kungalgamer',
  persist: true,
  state: (): UserState => ({
    uid: ref<number>(0),
    avatar: ref<string>(''),
    token: ref<string>(''),
    refreshToken: ref<string>(''),
  }),
  getters: {},
  actions: {
    setUserInfo(uid: number, avatar: string): void {
      this.uid = uid
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
              this.setUserInfo(res.data.uid, res.data.avatar)
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
