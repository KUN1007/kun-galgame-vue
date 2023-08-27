/** 所有 api 接口的响应数据都为该格式 */
interface KUNGalgameResponseData<T> {
  code: number
  message: string
  data: T
}
