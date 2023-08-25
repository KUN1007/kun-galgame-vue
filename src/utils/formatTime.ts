import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const languageOptions = {
  en: {
    second: 'second',
    seconds: 'seconds',
    minute: 'minute',
    minutes: 'minutes',
    hour: 'hour',
    hours: 'hours',
    day: 'day',
    days: 'days',
    week: 'week',
    weeks: 'weeks',
    month: 'month',
    months: 'months',
    year: 'year',
    years: 'years',
    ago: 'ago',
  },
  zh: {
    second: '秒',
    seconds: '秒',
    minute: '分钟',
    minutes: '分钟',
    hour: '小时',
    hours: '小时',
    day: '天',
    days: '天',
    week: '周',
    weeks: '周',
    month: '月',
    months: '月',
    year: '年',
    years: '年',
    ago: '前',
  },
}

// 格式化时间差
export function formatTimeDifference(pastTime: number, language: string) {
  const now = dayjs()
  const diffInSeconds = now.diff(pastTime, 'second')
  const hint = language === 'en' ? ' ago' : ' 前'

  const languageOption =
    (languageOptions as Record<string, any>)[language] || languageOptions.en

  // 使用 dayjs 的相对时间插件进行相对时间的格式化
  const time = (): string => {
    if (diffInSeconds < 60) {
      return now.to(pastTime, true)
    } else if (diffInSeconds < 3600) {
      return now.to(pastTime, true)
    } else if (diffInSeconds < 86400) {
      return now.to(pastTime, true)
    } else if (diffInSeconds < 2592000) {
      return now.to(pastTime, true)
    } else if (diffInSeconds < 31536000) {
      return now.to(pastTime, true)
    } else {
      return now.to(pastTime, true)
    }
  }
}
