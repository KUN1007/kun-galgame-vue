import dayjs from 'dayjs'

export const formatPublishTime = (time: number) => {
  const publishTime = dayjs(time)
  const now = dayjs()
  const diffInSeconds = now.diff(publishTime, 'second')

  if (diffInSeconds < 60) {
    return `${diffInSeconds}秒前`
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    return `${diffInMinutes}分钟前`
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600)
    return `${diffInHours}小时前`
  } else if (diffInSeconds < 2592000) {
    const diffInDays = Math.floor(diffInSeconds / 86400)
    return `${diffInDays}天前`
  } else {
    const diffInMonths = Math.floor(diffInSeconds / 2592000)
    return `${diffInMonths}月前`
  }
}
