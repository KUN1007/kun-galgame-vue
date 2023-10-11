<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'

import type { UserInfo } from '@/api'

const props = defineProps<{
  user: UserInfo
}>()

const user = computed(() => props.user)

// 角色名
const rolesName = () => {
  const roles = props.user.roles
  if (roles === 1) {
    return 'user'
  }
  if (roles === 2) {
    return 'admin'
  }
  if (roles === 3) {
    return 'SU'
  }
  return ''
}

// 状态名
const statusName = () => {
  const status = props.user.status
  if (status === 0) {
    return 'normal'
  }
  if (status === 1) {
    return 'banned'
  }
  return ''
}
</script>

<template>
  <!-- 右侧内容区 -->
  <div class="article" v-if="user">
    <!-- 用户个人信息 -->
    <div class="info">
      <!-- 用户基本信息 -->
      <div class="basic">
        <!-- 用户名 -->
        <span>用户名: {{ user.name }}</span>
        <!-- 萌萌点 -->
        <span>萌萌点: {{ user.moemoepoint }}</span>
        <!-- 注册序号 -->
        <span>注册序号: {{ user.uid }}</span>
        <span>角色: {{ rolesName() }}</span>
        <span>状态: {{ statusName() }}</span>
        <span>被推数: {{ user.upvote }}</span>
        <span>被赞数: {{ user.like }}</span>
        <span>被踩数: {{ user.dislike }}</span>
        <span>今日发表: {{ user.daily_topic_count }}</span>

        <span>话题数: {{ user.topic.length }}</span>
        <span>回复数: {{ user.reply.length }}</span>
        <span>评论数: {{ user.comment.length }}</span>

        <!-- 注册时间 -->
        <span>注册时间: {{ dayjs(user.time).format('YYYY/MM/DD') }}</span>
      </div>
      <!-- 用户签名 -->
      <div class="bio">
        <div>签名:</div>
        <div>{{ user.bio ? user.bio : 'NULL' }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区 */
.article {
  flex-grow: 1;
  padding: 7px 0;
}
/* 用户个人信息 */
.info {
  display: flex;
  flex-direction: column;
}
/* 用户基本信息 */
.basic {
  font-size: small;
  place-items: center;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(0, 2fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  padding-bottom: 10px;
  border-bottom: 1px solid var(--kungalgame-blue-4);
  span {
    padding: 5px 7px;
    &:last-child {
      grid-column-start: span 3;
    }
  }
}
/* 用户签名 */
.bio {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    &:nth-child(1) {
      margin-bottom: 10px;
    }
  }
}
</style>
