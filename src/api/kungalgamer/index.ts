import { KUNGalgamer } from './types/kungalgamer'
import { fetchGet } from '@/utils/request'

export async function getSingleKUNGalgamerApi(
  id: number
): Promise<KUNGalgamer> {
  try {
    const url = `/kungalgamer/${id}`

    // 调用fetchGet函数
    const response = await fetchGet<KUNGalgamer>(url)

    // 返回获取的用户数据
    return response
  } catch (error) {
    // 处理错误
    console.error(error)
    throw new Error('Failed to fetch user data')
  }
}
