/**
 * Currently, all directives are not enabled.
 */

import { type App } from 'vue'
// Directive for enlarging images on click
// import { zoom } from './zoom/zoom'
// Permission directive
// import { permission } from './permission/permission'
// Tooltip directive
import { tooltip } from './tooltip/tooltip'

// Mount directives
export function setupKUNGalgameDirectives(app: App) {
  // app.directive('zoom', zoom)
  // app.directive('permission', permission)
  app.directive('tooltip', tooltip)
}
