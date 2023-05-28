import { defineComponent } from 'vue'
import type { RouteRecordRaw, RouteMeta } from 'vue-router'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('@/App.vue')>)
  | (() => Promise<T>)

export interface MetaType extends RouteMeta {
  title: string
  keepAlive?: boolean
  permission?: string
  requiresAuth?: boolean
}

export interface KUNRouteType extends Omit<RouteRecordRaw, 'props'> {
  name: string
  component?: Component | string
  components?: Component
  children?: KUNRouteType[]
  meta?: MetaType
  redirect?: string
}
