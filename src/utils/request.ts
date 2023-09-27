// 操作 cookie 的函数
import { getToken } from '@/utils/cookie'
// 错误处理函数
import { onRequestError } from '@/error/onRequestError'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type FetchOptions = {
  method: HttpMethod
  credentials: 'include'
  headers?: Record<string, string>
  body?: BodyInit
}

// fetch 请求函数
const kunFetchRequest = async <T>(
  url: string,
  options: FetchOptions
): Promise<T> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const fullUrl = `${baseUrl}${url}`

  // 在请求头中添加 token
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${getToken()}`,
  }

  const response = await fetch(fullUrl, { ...options, headers })

  // 处理错误，token 过期
  await onRequestError(response)

  const data: T = await response.json()
  return data
}

const fetchGet = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'GET',
    credentials: 'include',
    headers: headers,
  }

  return await kunFetchRequest<T>(url, options)
}

const fetchPost = async <T>(
  url: string,
  body?: Record<string, any>,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  }

  return await kunFetchRequest<T>(url, options)
}

const fetchPut = async <T>(
  url: string,
  body?: Record<string, any>,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  }

  return await kunFetchRequest<T>(url, options)
}

const fetchDelete = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'DELETE',
    credentials: 'include',
    headers: headers,
  }

  return await kunFetchRequest<T>(url, options)
}

export { fetchGet, fetchPost, fetchPut, fetchDelete }
