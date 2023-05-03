// 所有的 api 接口响应数据的格式
interface ApiResponseData<T> {
  // 响应代码
  code: number
  // 响应返回数据
  data: T
  // 响应消息
  message: string
}
