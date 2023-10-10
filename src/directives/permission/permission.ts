import type { Directive, DirectiveBinding } from 'vue'
import { useRouter } from 'vue-router'
import message from '@/components/alert/Message'
import { currentUserInfo } from '@/utils/getCurrentUserInfo'

const currentUserRoles = currentUserInfo.roles

// 鉴权
export const permission: Directive = {
  mounted(element: HTMLElement, binding: DirectiveBinding) {
    // 获取传过来的角色要求
    const roles: number[] = binding.value

    // 用户的角色，游客：0，普通用户：1，管理员：2，超级管理员：3
    if (!roles.includes(currentUserRoles)) {
      element.parentNode?.removeChild(element)
      message(
        'You do not have sufficient permissions!',
        '您没有足够的权限！',
        'error',
        5000
      )
      useRouter().push('/admin')
    }
  },
}
