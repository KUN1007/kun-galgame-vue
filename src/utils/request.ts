type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type FetchOptions = {
  method: HttpMethod
  headers?: Record<string, string>
  body?: BodyInit
}

const fetchRequest = async <T>(
  url: string,
  options: FetchOptions
): Promise<T> => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const fullUrl = `${baseUrl}${url}`

    const response = await fetch(fullUrl, options)

    if (!response.ok) {
      throw new Error('Request Error!')
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    throw new Error('Request Error!')
  }
}

const fetchGet = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'GET',
    headers: headers,
  }

  return await fetchRequest<T>(url, options)
}

const fetchPost = async <T>(
  url: string,
  body?: Record<string, any>,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  }

  return await fetchRequest<T>(url, options)
}

const fetchPut = async <T>(
  url: string,
  body?: Record<string, any>,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  }

  return await fetchRequest<T>(url, options)
}

const fetchDelete = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> => {
  const options: FetchOptions = {
    method: 'DELETE',
    headers: headers,
  }

  return await fetchRequest<T>(url, options)
}

export { fetchGet, fetchPost, fetchPut, fetchDelete }
