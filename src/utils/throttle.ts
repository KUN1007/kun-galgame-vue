/**
 * Throttle（节流）函数
 * 在一段时间内，无论触发多少次函数，都只执行一次
 */

/**
 * @param {T} executeCallback - 要应用 throttle 函数的代码
 * @param {number} delay - throttle 的时间
 * @param {T | undefined} delayedCallback - 用户在 throttle 时间未到执行了 execute 函数产生的回调
 */
export function throttle<T extends (...args: any[]) => void>(
  executeCallback: T,
  delay: number,
  delayedCallback?: T | undefined
) {
  let lastExecution = 0
  let timeout: NodeJS.Timeout | null = null

  const throttled = (...args: Parameters<T>) => {
    const now = Date.now()

    if (!lastExecution || now - lastExecution >= delay) {
      executeCallback(...args)
      lastExecution = now
    } else {
      if (!timeout && delayedCallback) {
        delayedCallback(...args)
        timeout = setTimeout(() => {
          timeout = null
        }, delay)
      }
    }
  }

  return throttled as (...args: Parameters<T>) => void
}
