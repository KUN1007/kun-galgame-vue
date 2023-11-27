import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { requestRefresh } from './requestRefresh'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type FetchOptions = {
  method: HttpMethod
  credentials: 'include'
  headers?: Record<string, string>
  body?: BodyInit
}

const kunFetchRequest = async <T>(
  url: string,
  options: FetchOptions
): Promise<T> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const fullUrl = `${baseUrl}${url}`

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${useKUNGalgameUserStore().getToken()}`,
  }

  const response = await fetch(fullUrl, { ...options, headers })

  if (response.status === 205) {
    const newResponseData = await requestRefresh(fullUrl, options)
    const data: T = await newResponseData.json()
    return data
  } else {
    const data: T = await response.json()
    return data
  }
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

const fetchPostWithFormData = async <T>(
  url: string,
  formData: FormData,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'POST',
    credentials: 'include',
    headers: {
      ...headers,
    },
    body: formData,
  }

  return await kunFetchRequest<T>(url, options)
}

export { fetchGet, fetchPost, fetchPut, fetchDelete, fetchPostWithFormData }
