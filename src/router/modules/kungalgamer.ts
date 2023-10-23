import { type RouteRecordRaw } from 'vue-router'
// Current user's information
import { currentUserInfo } from '@/utils/getCurrentUserInfo'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

// ATTENTION! All route names must be unique!
// User roles: Guest 0, User 1, Admin 2, Super Admin 3, User Self 4
const kungalgamer: RouteRecordRaw[] = [
  // KUNGalgame user page
  {
    path: '/kungalgamer',
    component: Layout,
    // Access defaults to the current user's main page
    redirect: `/kungalgamer/${currentUserInfo.uid}/info`,
    children: [
      {
        path: ':uid',
        redirect: `/kungalgamer/${currentUserInfo.uid}/info`,
        component: () => import('@/views/kungalgamer/KUNGalgamer.vue'),
        children: [
          {
            name: 'KUNGalgamerInfo',
            path: 'info',
            component: () => import('@/views/kungalgamer/content/Info.vue'),
            meta: {
              title: 'userInfo',
            },
          },
          {
            name: 'KUNGalgamerSettings',
            path: 'settings',
            component: () => import('@/views/kungalgamer/content/Settings.vue'),
            meta: {
              title: 'userSettings',
              permission: [4],
            },
          },
          {
            name: 'KUNGalgamerPassword',
            path: 'password',
            component: () => import('@/views/kungalgamer/content/Password.vue'),
            meta: {
              title: 'userPassword',
              permission: [4],
            },
          },
          {
            name: 'KUNGalgamerPublishedTopic',
            path: 'published-topic',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userPublished',
            },
          },
          {
            name: 'KUNGalgamerLikedTopic',
            path: 'liked-topic',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userLiked',
              permission: [2, 3, 4],
            },
          },
          {
            name: 'KUNGalgamerUpvoteTopic',
            path: 'upvote-topic',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userUpvote',
              permission: [2, 3, 4],
            },
          },
          {
            name: 'KUNGalgamerReply',
            path: 'reply',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userReply',
            },
          },
          {
            name: 'KUNGalgamerComment',
            path: 'comment',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userComment',
            },
          },
        ],
      },
    ],
  },
]

export default kungalgamer
