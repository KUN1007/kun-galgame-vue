<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { asideNavItem } from './asideNavItem'

// 导入 topic store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const { replyRequest } = storeToRefs(useKUNGalgameTopicStore())

// 排序
const handleSortReply = (sortField: string) => {
  replyRequest.value.sortField = sortField
}

// 升序排序
const orderAscending = () => {
  replyRequest.value.sortOrder = 'asc'
}

// 降序排序
const orderDescending = () => {
  replyRequest.value.sortOrder = 'desc'
}

// 回到顶端
const handleBackToTop = () => {
  // 使用 window.scrollTo 方法将页面滚动到顶部
  window.scrollTo({
    top: 0, // 滚动到顶部的位置
    behavior: 'smooth', // 平滑滚动效果
  })
}
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__slideInUp animate__faster"
    appear
  >
    <div class="item">
      <span
        v-for="kun in asideNavItem"
        :key="kun.index"
        @click="handleSortReply(kun.sortField)"
      >
        <Icon class="icon" :icon="kun.icon" />
      </span>
      <span class="sort" @click="orderAscending">
        <Icon class="icon" icon="tdesign:order-ascending" />
      </span>
      <span class="sort" @click="orderDescending">
        <Icon class="icon" icon="tdesign:order-descending" />
      </span>
      <span class="top" @click="handleBackToTop">
        <Icon class="icon" icon="line-md:arrow-close-up" />
      </span>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  span {
    margin-top: 20px;
    transition: all 0.2s;
    &:hover {
      color: var(--kungalgame-blue-4);
      margin-top: 25px;
    }
    &:active {
      transition: 0.1s;
      margin-top: 15px;
    }
    &:last-child {
      margin-top: 50px;
    }
  }
  .sort {
    color: var(--kungalgame-blue-4);
    &:hover {
      color: var(--kungalgame-red-4);
    }
  }
}

.icon {
  font-size: 20px;
}
</style>
