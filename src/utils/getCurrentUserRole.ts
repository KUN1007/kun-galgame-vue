// Get the current user's role based on their UID.
// User permissions: Guest 0, User 1, Admin 2, Super Admin 3, User themselves 4

import { currentUserInfo } from './getCurrentUserInfo'

const currentUserUid = currentUserInfo.uid
const currentUserRoles = currentUserInfo.roles

export const getCurrentUserRole = (uid?: number) => {
  const userID = uid ? uid : currentUserUid

  // The current user themselves
  if (currentUserUid === userID) {
    return 4
  }
  return currentUserRoles
}
