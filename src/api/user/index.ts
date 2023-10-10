import { fetchGet } from '@/utils/request'
import * as User from './types/user'

export async function getUserByUidApi(
  uid: number
): Promise<User.UserInfoResponseData> {
  const url = `/user/${uid}`

  // 调用fetchGet函数
  const response = await fetchGet<User.UserInfoResponseData>(url)

  // 返回获取的用户数据
  return response
}
