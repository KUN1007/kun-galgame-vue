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
        <span>{{ $tm('user.profile.name') }}: {{ user.name }}</span>
        <!-- 萌萌点 -->
        <span>
          {{ $tm('user.profile.moemoepoint') }}: {{ user.moemoepoint }}
        </span>
        <!-- 注册序号 -->
        <span>{{ $tm('user.profile.register') }}: {{ user.uid }}</span>
        <!-- 角色 -->
        <span>{{ $tm('user.profile.roles') }}: {{ rolesName() }}</span>
        <!-- 状态 -->
        <span>{{ $tm('user.profile.status') }}: {{ statusName() }}</span>
        <!-- 被推数 -->
        <span>{{ $tm('user.profile.upvote') }}: {{ user.upvote }}</span>
        <!-- 被赞数 -->
        <span>{{ $tm('user.profile.like') }}: {{ user.like }}</span>
        <!-- 被踩数 -->
        <span>{{ $tm('user.profile.dislike') }}: {{ user.dislike }}</span>
        <!-- 今日发布话题数 -->
        <span>
          {{ $tm('user.profile.today') }}: {{ user.daily_topic_count }}
        </span>
        <!-- 发布话题数 -->
        <span>{{ $tm('user.profile.topic') }}: {{ user.topic.length }}</span>
        <!-- 发布回复数 -->
        <span>{{ $tm('user.profile.reply') }}: {{ user.reply.length }}</span>
        <!-- 发布评论数 -->
        <span>
          {{ $tm('user.profile.comment') }}: {{ user.comment.length }}
        </span>

        <!-- 注册时间 -->
        <span>
          {{ $tm('user.profile.time') }}:
          {{ dayjs(user.time).format('YYYY/MM/DD') }}
        </span>
      </div>
      <!-- 用户签名 -->
      <div class="bio">
        <div>{{ $tm('user.profile.bio') }}:</div>
        <div v-if="user.bio">{{ user.bio }}</div>
        <div v-if="!user.bio" class="null">{{ $tm('user.profile.null') }}</div>
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

/* 签名为空 */
.null {
  color: var(--kungalgame-blue-2);
  font-style: oblique;
}
</style>
