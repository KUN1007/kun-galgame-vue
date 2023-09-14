/*
 * 这个函数是将一个对象转为请求参数的函数，用于发请求
 */

/**
 * @param {object} obj - request 对象
 * @param {string} omitKey - 需要在对象里省略的属性
 */
export default function objectToQueryParams(
  obj: { [key: string]: any },
  omitKey?: string
): string {
  const queryParams = new URLSearchParams()

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && key !== omitKey) {
      queryParams.append(key, obj[key])
    }
  }

  return queryParams.toString()
}
