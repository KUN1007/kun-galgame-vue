import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import { LoginData, LoginResponseData } from '@/api/type'
import { postLoginDataApi } from '@/api/login/index'

interface UserState {
  id: Ref<number>
  token: Ref<string>
  roles: Ref<string>
}

export const useKUNGalgamerStore = defineStore({
  id: 'kungalgamer',
  persist: true,
  state: (): UserState => ({
    id: ref<number>(0),
    token: ref<string>('KUNGalgamer'),
    roles: ref<string>(''),
  }),
  getters: {},
  actions: {
    setToken(token: string): void {
      this.token = token
    },
    login(loginData: LoginData): Promise<LoginResponseData> {
      return new Promise((resolve, reject) => {
        // 这里是向后端发请求的函数
        postLoginDataApi({
          username: loginData.username,
          password: loginData.password,
        })
          .then((res) => {
            if (res.token) {
              this.setToken(res.token)
            } else {
              throw new Error('500 Server ERROR')
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
