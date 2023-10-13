/**
 * 目前所有指令均未启用
 */

import { type App } from 'vue'
// 图片点击放大指令
import { zoom } from './zoom/zoom'
// 权限指令
import { permission } from './permission/permission'

// 挂载 directives
export function setupKUNGalgameDirectives(app: App) {
  app.directive('zoom', zoom)
  app.directive('permission', permission)
}
