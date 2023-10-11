// 根据 uid 获取获取当前用户的角色
// 用户权限，游客 0，用户 1，管理员 2，超级管理员 3，用户自己 4

import { currentUserInfo } from './getCurrentUserInfo'

const currentUserUid = currentUserInfo.uid
const currentUserRoles = currentUserInfo.roles

export const getCurrentUserRole = (uid?: number) => {
  const userID = uid ? uid : currentUserUid

  // 当前用户自己
  if (currentUserUid === userID) {
    return 4
  }
  return currentUserRoles
}
