// request.ts

export async function request(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const response = await fetch(url, options)
  return response
}
