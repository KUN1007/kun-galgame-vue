/**
 * 根据时间戳获取经过的小时数
 */

import dayjs from 'dayjs'

export const hourDiff = (upvote_time: number, hours: number) => {
  // 检查 upvote_time 是否有效，因为后端初始化为 0
  if (upvote_time === 0 || upvote_time === undefined) {
    return false
  }

  // 获取当前时间
  const currentTime = dayjs()

  // 获取 upvote_time，这里假设 upvote_time 是一个 UNIX 时间戳
  const upvoteTime = dayjs(upvote_time)

  // 计算时间差并返回比较结果
  return currentTime.diff(upvoteTime, 'hour') <= hours
}
