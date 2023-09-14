<!-- 
  这里是话题部分的功能区，有返回顶部等功能
 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { asideNavItem } from './asideNavItem'

// 导入 topic store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const { replyRequest } = storeToRefs(useKUNGalgameTopicStore())

const handleSortReply = (sortField: string) => {
  replyRequest.value.sortField = sortField
}

const orderAscending = () => {
  replyRequest.value.sortOrder = 'asc'
}

const orderDescending = () => {
  replyRequest.value.sortOrder = 'desc'
}
</script>

<template>
  <div class="nav">
    <!-- 交互区容器 -->
    <ul>
      <li>
        <Icon class="icon" icon="line-md:arrow-close-up" />{{
          $tm('topic.aside.top')
        }}
      </li>
      <li
        v-for="kun in asideNavItem"
        :key="kun.index"
        @click="handleSortReply(kun.sortField)"
      >
        <Icon class="icon" :icon="kun.icon" />{{
          $tm(`topic.aside['${kun.name}']`)
        }}
      </li>
    </ul>
    <div>
      <span @click="orderAscending">升序</span>
      <span @click="orderDescending">降序</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 话题详情页的交互 */
.nav {
  height: 107px;
  display: flex;
  justify-content: center;
  /* 左边第一个部分的边 */
  border: 1px solid var(--kungalgame-trans-red-4);
  box-shadow: var(--shadow);
  border-radius: 5px;
  /* 距离顶部的距离 */
  margin-bottom: 17px;
  /* 隐藏溢出的边角 */
  overflow: hidden;
  ul {
    flex-grow: 1;
    display: flex;
    background-color: var(--kungalgame-trans-blue-0);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > li {
      padding: 0 11px;
      flex-grow: 1;
      display: flex;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      /* 页面变化时不换行 */
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      &::before {
        transform: scaleX(0);
        transform-origin: bottom right;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: 0 0 0 0;
        background-color: var(--kungalgame-red-4);
        z-index: -1;
        transition: transform 0.3s ease;
      }
      &:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
}
.icon {
  margin-right: 4px;
  font-size: 17px;
}
</style>
