// The response data format for all API interfaces is as follows

interface KUNGalgameResponseData<T> {
  code: number
  message: string
  data: T
}
