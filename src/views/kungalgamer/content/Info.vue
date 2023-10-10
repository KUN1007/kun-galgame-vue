<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'

import type { UserInfo } from '@/api'
// 导入用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

const user = ref<UserInfo>()
// 从路由参数中获取当前的用户 uid
const uid = computed(() => {
  return parseInt(useRoute().params.uid as string)
})
/* 
  uid: number
  name: string
  avatar: string
  roles: string
  status: number
  time: number
  moemoepoint: number
  bio: string
  upvote: number
  like: number
  dislike: number
  daily_topic_count: number

  topic: number[]
  reply: number[]
  comment: number[] */
// 获取当前用户信息
const getUser = async (uid: number) => {
  const userInfo = await useKUNGalgameUserStore().getUser(uid)
  return userInfo.data
}

// 挂载时获取用户信息
onMounted(async () => {
  user.value = await getUser(uid.value)
})
</script>

<template>
  <!-- 右侧内容区 -->
  <div class="article" v-if="user">
    <!-- 用户个人信息 -->
    <div class="kungalgamer-info">
      <!-- 用户基本信息 -->
      <div class="kungalgamer-basic">
        <!-- 用户名 -->
        <span>用户名: {{ user.name }}</span>
        <!-- 萌萌点 -->
        <span>萌萌点: {{ user.moemoepoint }}</span>
        <!-- 注册序号 -->
        <span>注册序号: {{ user.uid }}</span>
        <!-- 注册时间 -->
        <span>注册时间: {{ dayjs(user.time).format('YYYY/MM/DD') }}</span>
        <span>角色: {{ user.roles }}</span>
        <span>状态: {{ user.status }}</span>
        <span>被推数: {{ user.upvote }}</span>
        <span>被赞数: {{ user.like }}</span>
        <span>被踩数: {{ user.dislike }}</span>
        <span>今日发表: {{ user.daily_topic_count }}</span>

        <span>发表话题数: {{ user.topic.length }}</span>
        <span>发表回复数: {{ user.reply.length }}</span>
        <span>发表评论数: {{ user.comment.length }}</span>
      </div>
      <!-- 用户签名 -->
      <ul class="kungalgamer-sign">
        <div>
          <div>签名:</div>
          <div>{{ user.bio ? user.bio : 'NULL' }}</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区 */
.article {
  flex-grow: 1;
  padding: 7px 27px;
}
/* 用户个人信息 */
.kungalgamer-info {
  display: flex;
  flex-direction: column;
}
/* 用户基本信息 */
.kungalgamer-basic {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 2fr));
  grid-template-rows: repeat(5, minmax(0, 30px));
}
/* 用户签名 */
.kungalgamer-sign {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
