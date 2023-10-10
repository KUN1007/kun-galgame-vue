// pinia 只能在 setup 中使用，有时候获取用户信息只能这么做

const userInfoString = localStorage.getItem('KUNGalgameUser')

export const currentUserInfo = userInfoString ? JSON.parse(userInfoString) : {}
