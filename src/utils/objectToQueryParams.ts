/*
 * 这个函数是将一个对象转为请求参数的函数，用于发请求
 */

export default function objectToQueryParams(obj: {
  [key: string]: any
}): string {
  const queryParams = new URLSearchParams()

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      queryParams.append(key, obj[key])
    }
  }

  return queryParams.toString()
}
