/*
 * This function converts an object to request parameters for making requests.
 */

/**
 * @param {object} obj - Request object
 * @param {string} omitKey - Property to omit from the object
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
