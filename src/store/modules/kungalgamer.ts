/*
User Information Storage
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

// KUNGalgamer store type
import { KUNGalgamerStore } from '../types/kungalgamer'

// Here, pinia-plugin-persistedstate is used, so storage is automatic
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
    // Set user information
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
      this.avatarMin = avatar.replace(/\.webp$/, '-100.webp')
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

    // Login
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

    // Send verification code
    async sendCode(email: string): Promise<void> {
      const request: VerificationCodeMailRequestData = { email }
      return await sendVerificationCodeMailApi(request)
    },

    // Register
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

    // Get individual user basic information
    async getUser(uid: number): Promise<UserInfoResponseData> {
      return getUserByUidApi(uid)
    },

    // Update user avatar
    async updateAvatar(
      avatar: FormData
    ): Promise<UserUpdateAvatarResponseData> {
      const request: UserUpdateAvatarRequestData = {
        uid: this.uid,
        avatar: avatar,
      }
      return updateUserAvatarApi(request)
    },

    // Update user bio
    async updateBio(bio: string): Promise<UserUpdateBioResponseData> {
      const request: UserUpdateBioRequestData = {
        uid: this.uid,
        bio,
      }
      return updateUserBioApi(request)
    },

    // Get user email
    async getEmail(): Promise<UserGetUserEmailResponseData> {
      const uid = this.uid
      return getUserEmailApi(uid)
    },

    // Get reset email code
    async getResetEmailCode(
      email: string
    ): Promise<UserGetEmailRestCodeResponseData> {
      return getUserResetEmailCodeApi(email)
    },

    // Update email
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

    // Update password
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

    // Get user topics
    async getTopics(tidArray: number[]): Promise<UserGetUserTopicResponseData> {
      const requestData: UserGetUserTopicRequestData = {
        uid: this.uid,
        tidArray: tidArray,
      }
      return getUserTopicApi(requestData)
    },

    // Get user replies
    async getReplies(
      ridArray: number[]
    ): Promise<UserGetUserReplyResponseData> {
      const requestData: UserGetUserReplyRequestData = {
        uid: this.uid,
        ridArray: ridArray,
      }
      return getUserReplyApi(requestData)
    },

    // Get user comments
    async getComments(
      cidArray: number[]
    ): Promise<UserGetUserCommentResponseData> {
      const requestData: UserGetUserCommentRequestData = {
        uid: this.uid,
        cidArray: cidArray,
      }
      return getUserCommentApi(requestData)
    },

    // Reset password by user email
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
