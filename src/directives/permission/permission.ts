import type { Directive, DirectiveBinding } from 'vue'
import message from '@/components/alert/Message'
import { currentUserInfo } from '@/utils/getCurrentUserInfo'
// 导入路由
import router from '@/router'
const currentUserRoles = currentUserInfo.roles

interface BindingProps {
  roles: number[]
  uid?: number
}

// 鉴权
export const permission: Directive = {
  mounted(element: HTMLElement, binding: DirectiveBinding<BindingProps>) {
    // 获取传过来的角色要求
    const roles = binding.value.roles
    // 路由 meta 中的 permission
    const currentUserUid = binding.value?.uid

    if (currentUserInfo.uid === currentUserUid) {
      roles.push(4)
    }

    const hasPermission = () => {
      return roles.some((number) => number === currentUserUid || number === 4)
    }

    // 用户的角色，游客：0，普通用户：1，管理员：2，超级管理员：3，用户自己本人：4
    if (!hasPermission()) {
      // 将页面删除
      element.parentNode?.removeChild(element)

      message(
        'You do not have sufficient permissions!',
        '您没有足够的权限！',
        'error',
        5000
      )
      router.push('/kungalgame403')
    }
  },
}
