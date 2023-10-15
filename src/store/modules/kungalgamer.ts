/*
 * 用户的信息存储
 */
import { defineStore } from 'pinia'

import type {
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

import type {
  UserInfoResponseData,
  UserUpdateAvatarRequestData,
  UserUpdateAvatarResponseData,
  UserUpdateBioRequestData,
  UserUpdateBioResponseData,
  UserGetUserEmailResponseData,
  UserGetEmailRestCodeResponseData,
  UserUpdateEmailRequestData,
  UserUpdateEmailResponseData,
  UserUpdatePasswordRequestData,
  UserUpdatePasswordResponseData,
  UserGetUserTopicRequestData,
  UserGetUserTopicResponseData,
  UserGetUserReplyRequestData,
  UserGetUserReplyResponseData,
  UserGetUserCommentRequestData,
  UserGetUserCommentResponseData,
  UserResetPasswordByEmailRequestData,
  UserResetPasswordByEmailResponseData,
} from '@/api'

import {
  getUserByUidApi,
  updateUserAvatarApi,
  updateUserBioApi,
  getUserEmailApi,
  getUserResetEmailCodeApi,
  updateUserEmailApi,
  updateUserPasswordApi,
  getUserTopicApi,
  getUserReplyApi,
  getUserCommentApi,
  updateUserPasswordByEmailApi,
} from '@/api'

// kungalgame store 类型
import { KUNGalgamerStore } from '../types/kungalgamer'

// 这里用了 pinia-plugin-persistedstate，直接存储即可
export const useKUNGalgameUserStore = defineStore({
  id: 'KUNGalgameUser',
  persist: true,
  state: (): KUNGalgamerStore => ({
    uid: 0,
    name: '',
    avatar: '',
    avatarMin: '',
    moemoepoint: 0,
    moemoeAccessToken: '',
    roles: 0,
  }),
  getters: {},
  actions: {
    // 设置用户信息
    setUserInfo(
      uid: number,
      name: string,
      avatar: string,
      moemoepoint: number,
      roles: number
    ): void {
      this.uid = uid
      this.name = name
      this.avatar = avatar
      this.avatarMin = avatar.replace(/\.webp$/, '-77.webp')
      this.moemoepoint = moemoepoint
      this.roles = roles
    },
    setToken(moemoeAccessToken: string) {
      this.moemoeAccessToken = moemoeAccessToken
    },
    getToken() {
      return this.moemoeAccessToken
    },
    removeToken() {
      this.moemoeAccessToken = ''
    },
    // 登陆
    async login(request: LoginRequestData): Promise<LoginResponseData> {
      const res = await postLoginDataApi(request)
      if (res.code === 200) {
        this.setUserInfo(
          res.data.uid,
          res.data.name,
          res.data.avatar,
          res.data.moemoepoint,
          res.data.roles
        )
        this.setToken(res.data.token)
      } else if (res.code === 500) {
        console.log(res.message)
      } else {
        throw new Error('500 Server ERROR')
      }
      return res
    },
    // 发送验证码
    async sendCode(email: string): Promise<void> {
      const request: VerificationCodeMailRequestData = { email }
      return await sendVerificationCodeMailApi(request)
    },
    // 注册
    async register(request: RegisterRequestData): Promise<LoginResponseData> {
      const res = await postRegisterDataApi(request)

      if (res.code === 200) {
        this.setUserInfo(
          res.data.uid,
          res.data.name,
          res.data.avatar,
          res.data.moemoepoint,
          res.data.roles
        )
        this.setToken(res.data.token)
      } else if (res.code === 500) {
        console.log(res.message)
      } else {
        throw new Error('500 Server ERROR')
      }
      return res
    },

    // 获取单个用户基本信息
    async getUser(uid: number): Promise<UserInfoResponseData> {
      return getUserByUidApi(uid)
    },

    // 更新用户 avatar
    async updateAvatar(
      avatar: FormData
    ): Promise<UserUpdateAvatarResponseData> {
      const request: UserUpdateAvatarRequestData = {
        uid: this.uid,
        avatar: avatar,
      }
      return updateUserAvatarApi(request)
    },

    // 更新用户 bio
    async updateBio(bio: string): Promise<UserUpdateBioResponseData> {
      const request: UserUpdateBioRequestData = {
        uid: this.uid,
        bio,
      }
      return updateUserBioApi(request)
    },

    // 获取用户邮箱
    async getEmail(): Promise<UserGetUserEmailResponseData> {
      const uid = this.uid
      return getUserEmailApi(uid)
    },

    // 获取重置邮箱验证码
    async getResetEmailCode(
      email: string
    ): Promise<UserGetEmailRestCodeResponseData> {
      return getUserResetEmailCodeApi(email)
    },

    // 更新邮箱
    async updateEmail(
      email: string,
      code: string
    ): Promise<UserUpdateEmailResponseData> {
      const requestData: UserUpdateEmailRequestData = {
        uid: this.uid,
        email: email,
        code: code,
      }
      return updateUserEmailApi(requestData)
    },

    // 更新密码
    async updatePassword(
      oldPassword: string,
      newPassword: string
    ): Promise<UserUpdatePasswordResponseData> {
      const requestData: UserUpdatePasswordRequestData = {
        uid: this.uid,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }
      return updateUserPasswordApi(requestData)
    },

    // 获取用户的话题
    async getTopics(tidArray: number[]): Promise<UserGetUserTopicResponseData> {
      const requestData: UserGetUserTopicRequestData = {
        uid: this.uid,
        tidArray: tidArray,
      }
      return getUserTopicApi(requestData)
    },

    // 获取用户回复
    async getReplies(
      ridArray: number[]
    ): Promise<UserGetUserReplyResponseData> {
      const requestData: UserGetUserReplyRequestData = {
        uid: this.uid,
        ridArray: ridArray,
      }
      return getUserReplyApi(requestData)
    },

    // 获取用户评论
    async getComments(
      cidArray: number[]
    ): Promise<UserGetUserCommentResponseData> {
      const requestData: UserGetUserCommentRequestData = {
        uid: this.uid,
        cidArray: cidArray,
      }
      return getUserCommentApi(requestData)
    },

    // 根据用户邮箱重置密码
    async updatePasswordByEmail(
      email: string,
      code: string,
      newPassword: string
    ): Promise<UserResetPasswordByEmailResponseData> {
      const requestData: UserResetPasswordByEmailRequestData = {
        email: email,
        code: code,
        newPassword: newPassword,
      }
      return updateUserPasswordByEmailApi(requestData)
    },
  },
})
