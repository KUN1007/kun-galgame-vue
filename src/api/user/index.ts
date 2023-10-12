import { fetchGet, fetchPut, fetchPost } from '@/utils/request'
import * as User from './types/user'

// 获取单个用户信息
export async function getUserByUidApi(
  uid: number
): Promise<User.UserInfoResponseData> {
  const url = `/user/${uid}`

  // 调用fetchGet函数
  const response = await fetchGet<User.UserInfoResponseData>(url)

  // 返回获取的用户数据
  return response
}

// 更新用户 bio
export async function updateUserBioApi(
  request: User.UserUpdateBioRequestData
): Promise<User.UserUpdateBioResponseData> {
  const url = `/user/${request.uid}/bio`
  const response = await fetchPut<User.UserUpdateBioResponseData>(url, request)
  return response
}

// 获取用户邮箱
export async function getUserEmailApi(
  uid: number
): Promise<User.UserGetUserEmailResponseData> {
  const url = `/user/${uid}/email`
  const response = await fetchGet<User.UserGetUserEmailResponseData>(url)
  return response
}

// 发送重置邮箱验证码
export async function getUserResetEmailCodeApi(
  email: string
): Promise<User.UserGetEmailRestCodeResponseData> {
  const url = `/auth/email/reset`

  const postData = {
    email: email,
  }

  const response = await fetchPost<User.UserGetEmailRestCodeResponseData>(
    url,
    postData
  )
  return response
}

// 更新邮箱
export async function updateUserEmailApi(
  request: User.UserUpdateEmailRequestData
): Promise<User.UserUpdateEmailResponseData> {
  const url = `/user/:uid/email`

  const response = fetchPut<User.UserUpdateEmailResponseData>(url, request)

  return response
}
