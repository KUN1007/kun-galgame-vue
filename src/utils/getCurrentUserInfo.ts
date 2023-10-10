// pinia 只能在 setup 中使用，有时候获取用户信息只能这么做

interface CurrentUserInfo {
  uid: number
  name: string
  avatar: string
  moemoepoint: number
  roles: number
  token: string
}

const userInfoString = localStorage.getItem('KUNGalgameUser')

export const currentUserInfo: CurrentUserInfo = userInfoString
  ? JSON.parse(userInfoString)
  : {}
