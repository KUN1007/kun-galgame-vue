import Cookies from 'js-cookie'

export const getToken = () => {
  return Cookies.get('kungalgame-token')
}
export const setToken = (token: string) => {
  Cookies.set('kungalgame-token', token)
}
export const removeToken = () => {
  Cookies.remove('kungalgame-token')
}
