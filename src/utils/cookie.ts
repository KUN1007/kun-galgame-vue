import Cookies from 'js-cookie'

export const getToken = () => {
  return Cookies.get('kungalgame-moemoe-access-token')
}
export const setToken = (token: string) => {
  Cookies.set('kungalgame-moemoe-access-token', token)
}
export const removeToken = () => {
  Cookies.remove('kungalgame-moemoe-access-token')
}
