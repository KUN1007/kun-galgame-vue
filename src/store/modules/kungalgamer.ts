/*
 * 用户的信息存储
 */
import { defineStore } from 'pinia'
import {
  LoginRequestData,
  LoginResponseData,
  RegisterRequestData,
  VerificationCodeMailRequestData,
} from '@/api'
import {
  postLoginDataApi,
  postRegisterDataApi,
  sendVerificationCodeMailApi,
} from '@/api'
// 操作 cookie 的函数
import { setToken } from '@/utils/cookie'

// 用户信息接口
interface UserState {
  uid: number
  name: string
  avatar: string
  token: string
}

// 这里用了 pinia-plugin-persistedstate，直接存储 token 即可
export const useKUNGalgameUserStore = defineStore({
  id: 'kungalgamer',
  persist: true,
  // token 放在 cookie 中, refreshToken 放在 localStorage 中
  state: (): UserState => ({
    uid: 0,
    name: '',
    avatar: '',
    token: '',
  }),
  getters: {},
  actions: {
    // 设置用户信息
    setUserInfo(uid: number, name: string, avatar: string): void {
      this.uid = uid
      this.name = name
      this.avatar = avatar
    },
    // 登陆
    login(request: LoginRequestData): Promise<LoginResponseData> {
      return new Promise((resolve, reject) => {
        // 这里是向后端发请求的函数
        postLoginDataApi(request)
          .then((res) => {
            if (res.data) {
              this.setUserInfo(res.data.uid, res.data.name, res.data.avatar)
              setToken(res.data.token)
            } else
              (error: Error) => {
                throw new Error('500 Server ERROR', error)
              }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 发送验证码
    sendCode(email: string): Promise<void> {
      return new Promise((resolve, reject) => {
        const request: VerificationCodeMailRequestData = { email }
        sendVerificationCodeMailApi(request)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 注册
    register(request: RegisterRequestData): Promise<LoginResponseData> {
      return new Promise((resolve, reject) => {
        postRegisterDataApi(request)
          .then((res) => {
            if (res.data) {
              this.setUserInfo(res.data.uid, res.data.name, res.data.avatar)
              setToken(res.data.token)
            } else
              (error: Error) => {
                throw new Error('500 Server ERROR', error)
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
