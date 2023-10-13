import type { Directive, DirectiveBinding } from 'vue'
import Message from '@/components/alert/Message'
import { currentUserInfo } from '@/utils/getCurrentUserInfo'
import router from '@/router'

// 当前用户 uid
const currentUserUid = currentUserInfo.uid
// 当前用户 roles
const currentUserRoles = currentUserInfo.roles

// 用户权限，游客 0，用户 1，管理员 2，超级管理员 3，用户自己 4
enum UserRole {
  Guest = 0,
  User = 1,
  Admin = 2,
  SuperAdmin = 3,
  Self = 4,
}

/**
 * @roles 可以访问该资源的用户类型
 * @uid 需要鉴权的用户 id
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
      // 用户自己
      if (uid === currentUserUid) {
        return true
      }

      // 用户有访问权限
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
