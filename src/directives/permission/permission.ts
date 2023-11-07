import type { Directive, DirectiveBinding } from 'vue'
import Message from '@/components/alert/Message'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'
import router from '@/router'

const { roles, uid } = storeToRefs(useKUNGalgameUserStore())

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
    const bindingRoles = [...binding.value.roles]
    const bindingUid = binding.value.uid

    const hasPermission = () => {
      // User Self
      if (bindingUid === uid.value) {
        return true
      }

      // User has access permission
      if (bindingRoles.includes(roles.value)) {
        return true
      }

      return false
    }

    if (!hasPermission()) {
      handleUnauthorizedAccess(element)
    }
  },
}
