import type { RouteRecordRaw, Router } from 'vue-router'
import { createWebHistory, createRouter, createMemoryHistory } from 'vue-router'
import { constantRoutes } from './router'
import { asyncRoutes } from './router'

export const createKUNGalgameRouter = (type: 'client' | 'server'): Router =>
  createRouter({
    history:
      type === 'server'
        ? createMemoryHistory(import.meta.env.BASE_URL)
        : createWebHistory(import.meta.env.BASE_URL),

    routes: [...constantRoutes, ...asyncRoutes] as RouteRecordRaw[],

    // Scroll to the top of the page with a smooth animation on each page navigation
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0, behavior: 'smooth' }
      }
    },
  })
