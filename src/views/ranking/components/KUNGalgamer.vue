<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { userIconMap } from './navSortItem'
import type { RankingUsers } from '@/api'

const props = defineProps<{
  field: string
  users: RankingUsers[]
}>()

const users = computed(() => props.users)

// 将传过来的数据转为数值
const parseTopicNumber = (field: string | string[]) => {
  return Array.isArray(field) ? field.length : Math.ceil(parseInt(field))
}
</script>

<template>
  <TransitionGroup name="list">
    <!-- 单个用户 -->
    <div class="single-user" v-for="user in users" :key="user.uid">
      <RouterLink :to="`/kungalgamer/${user.uid}/info`">
        <!-- 用户的名字 -->
        <div class="info">
          <span class="avatar">
            <!-- 用的是 100px 的压缩图片 -->
            <img
              v-if="user.avatar"
              :src="user.avatar.replace(/\.webp$/, '-100.webp')"
              :alt="user.name"
            />
          </span>
          <span class="name">{{ user.name }}</span>
        </div>
        <!-- 用户的其它信息 -->
        <div class="detail">
          <Icon :icon="userIconMap[props.field]" />
          <span>{{ parseTopicNumber(user.field) }}</span>
        </div>
      </RouterLink>
    </div>
  </TransitionGroup>
</template>

<style lang="scss" scoped>
/* 单个话题 */
.single-user {
  a {
    flex-shrink: 0;
    height: 37px;
    margin: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--kungalgame-trans-pink-0);
    border: 1px solid var(--kungalgame-trans-pink-2);
    border-radius: 5px;
    color: var(--kungalgame-font-color-3);
    padding: 0 10px;
    cursor: pointer;

    &:hover {
      transition: all 0.5s;
      background-color: var(--kungalgame-trans-white-9);
      border: 1px solid var(--kungalgame-pink-4);
      color: var(--kungalgame-pink-4);
    }
  }
}
/* 话题的名字 */
.info {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .avatar {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
  }
  .name {
    margin-left: 10px;
  }
}

.detail {
  display: flex;
  align-items: center;
  color: var(--kungalgame-pink-4);
  span {
    color: var(--kungalgame-font-color-3);
    margin-left: 10px;
  }
}

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
