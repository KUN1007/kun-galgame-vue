import { fetchGet, fetchPut } from '@/utils/request'
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
export async function updateUserBioApi(request: User.UserUpdateBioRequestData) {
  const url = `/user/${request.uid}/bio`
  const response = await fetchPut<User.UserUpdateBioResponseData>(url, request)
  return response
}

// 获取用户邮箱
export async function getUserEmailApi(uid: number) {
  const url = `/user/${uid}/email`
  const response = await fetchGet<User.UserGetUserEmailResponseData>(url)
  return response
}
