import { type RouteRecordRaw } from 'vue-router'
// 当前用户的信息
import { currentUserInfo } from '@/utils/getCurrentUserInfo'

const Layout = () => import('@/layout/KUNGalgameAPP.vue')

// 用户权限，游客 0，用户 1，管理员 2，超级管理员 3，用户自己 4
const kungalgamer: RouteRecordRaw[] = [
  // KUNGalgame 用户页
  {
    path: '/kungalgamer',
    component: Layout,
    // 访问默认跳转到当前用户的主页
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
            // 所有路由的命名是不能重复的！！！！
            name: 'KUNGalgamerPublishedTopic',
            path: 'published-topic',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userPublished',
            },
          },
          {
            // 所有路由的命名是不能重复的！！！！
            name: 'KUNGalgamerLikedTopic',
            path: 'liked-topic',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userLiked',
              permission: [2, 3, 4],
            },
          },
          {
            // 所有路由的命名是不能重复的！！！！
            name: 'KUNGalgamerUpvoteTopic',
            path: 'upvote-topic',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userUpvote',
              permission: [2, 3, 4],
            },
          },
          {
            // 所有路由的命名是不能重复的！！！！
            name: 'KUNGalgamerReply',
            path: 'reply',
            component: () => import('@/views/kungalgamer/content/Topic.vue'),
            meta: {
              title: 'userReply',
            },
          },
          {
            // 所有路由的命名是不能重复的！！！！
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
