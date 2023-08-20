import dayjs from 'dayjs'

// 读取本地存储中的语言配置
import { KUNGalgameLanguage } from '@/utils/getDefaultEnv'

const language = KUNGalgameLanguage === 'en' ? true : false

/* 这里老问题不可以用 vue-i18n 的 t 函数，因为不在 setup 里面
    mins, years 之类的就不用了，有点丑 */

export const formatTime = (time: number) => {
  const publishTime = dayjs(time)
  const now = dayjs()
  const diffInSeconds = now.diff(publishTime, 'second')

  if (diffInSeconds < 60) {
    return language ? `${diffInSeconds}s ago` : `${diffInSeconds}秒前`
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    return language ? `${diffInMinutes}min ago` : `${diffInMinutes}分钟前`
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600)
    return language ? `${diffInHours}h ago` : `${diffInHours}时前`
  } else if (diffInSeconds < 2592000) {
    const diffInDays = Math.floor(diffInSeconds / 86400)
    return language ? `${diffInDays}day ago` : `${diffInDays}天前`
  } else if (diffInSeconds < 31536000) {
    const diffInMonths = Math.floor(diffInSeconds / 2592000)
    return language ? `${diffInMonths}month ago` : `${diffInMonths}月前`
  } else {
    const diffInMonths = Math.floor(diffInSeconds / 31536000)
    return language ? `${diffInMonths}year ago` : `${diffInMonths}年前`
  }
}
