import type { Directive, DirectiveBinding } from 'vue'
import Message from '@/components/alert/Message'
import { currentUserInfo } from '@/utils/getCurrentUserInfo'
import router from '@/router'

// Current user's UID
const currentUserUid = currentUserInfo.uid
// Current user's roles
const currentUserRoles = currentUserInfo.roles

// User roles: Guest 0, User 1, Admin 2, SuperAdmin 3, User Self 4
enum UserRole {
  Guest = 0,
  User = 1,
  Admin = 2,
  SuperAdmin = 3,
  Self = 4,
}

/**
 * @roles: User types that can access this resource.
 * @uid: User ID that needs authorization.
 */
interface BindingProps {
  roles: UserRole[]
  uid?: number
}

const handleUnauthorizedAccess = (element: HTMLElement) => {
  element.parentNode?.removeChild(element)

  Message(
    'You do not have sufficient permissions!',
    '您没有足够的权限！',
    'error',
    5000
  )
  router.push('/kungalgame403')
}

export const permission: Directive = {
  mounted(element: HTMLElement, binding: DirectiveBinding<BindingProps>) {
    const roles = [...binding.value.roles]
    const uid = binding.value.uid

    const hasPermission = () => {
      // User Self
      if (uid === currentUserUid) {
        return true
      }

      // User has access permission
      if (roles.includes(currentUserRoles)) {
        return true
      }

      return false
    }

    if (!hasPermission()) {
      handleUnauthorizedAccess(element)
    }
  },
}
