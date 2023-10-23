// Pinia can only be used within the setup function
// Sometimes, this is the only way to retrieve user information.

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
