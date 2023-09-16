<!-- 
  这里是话题部分的功能区，有返回顶部等功能
 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { asideNavItem } from './asideNavItem'

// 导入 topic store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const { isScrollToTop, replyRequest } = storeToRefs(useKUNGalgameTopicStore())

const handleSortReply = (sortField: string) => {
  // 重置页数，是否加载等页面状态，否则会出现错误
  useKUNGalgameTopicStore().resetPageStatus()
  replyRequest.value.sortField = sortField
}

const orderAscending = () => {
  // 重置页数，是否加载等页面状态，否则会出现错误
  useKUNGalgameTopicStore().resetPageStatus()
  replyRequest.value.sortOrder = 'asc'
}

const orderDescending = () => {
  // 重置页数，是否加载等页面状态，否则会出现错误
  useKUNGalgameTopicStore().resetPageStatus()
  replyRequest.value.sortOrder = 'desc'
}

const handleBackToTop = () => {
  isScrollToTop.value = true
}
</script>

<template>
  <div class="nav">
    <!-- 交互区容器 -->
    <div class="item">
      <span @click="handleBackToTop">
        <Icon class="icon" icon="line-md:arrow-close-up" />{{
          $tm('topic.aside.top')
        }}
      </span>
      <span
        v-for="kun in asideNavItem"
        :key="kun.index"
        @click="handleSortReply(kun.sortField)"
      >
        <Icon class="icon" :icon="kun.icon" />{{
          $tm(`topic.aside['${kun.name}']`)
        }}
      </span>
    </div>
    <div class="sort-order">
      <span @click="orderAscending">
        <Icon icon="tdesign:order-ascending" />
      </span>
      <span @click="orderDescending">
        <Icon icon="tdesign:order-descending" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 话题详情页的交互 */
.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 左边第一个部分的边 */
  border: 1px solid var(--kungalgame-trans-red-4);
  background-color: var(--kungalgame-trans-blue-0);
  box-shadow: var(--shadow);
  border-radius: 5px;
  /* 距离顶部的距离 */
  margin-bottom: 17px;
  /* 隐藏溢出的边角 */
  overflow: hidden;
  .item {
    flex-grow: 1;
    display: flex;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > span {
      height: 40px;
      padding: 0 11px;
      display: flex;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      /* 页面变化时不换行 */
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: 15px;
      &:nth-child(1) {
        color: var(--kungalgame-blue-4);
      }
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

/* 按照升序还是降序排列 */
.sort-order {
  width: 100%;
  display: flex;
  cursor: default;
  span {
    height: 27px;
    color: var(--kungalgame-blue-4);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    &:hover {
      transition: all 0.2s;
      color: var(--kungalgame-red-4);
    }
  }
}
</style>
