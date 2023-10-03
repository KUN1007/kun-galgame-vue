<script setup lang="ts">
// 导入图标
import { Icon } from '@iconify/vue'
import { useKUNGalgameHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'

// 导入排序列表的字段
import { navSortItem } from './navSortItem'
import { ref } from 'vue'

// 升序和降序的样式
const ascClass = ref('')

const { sortField, sortOrder } = storeToRefs(useKUNGalgameHomeStore())

const handleSortByField = (field: string) => {
  useKUNGalgameHomeStore().resetPageStatus()
  sortField.value = field
}

const orderAscending = () => {
  useKUNGalgameHomeStore().resetPageStatus()
  sortOrder.value = 'asc'
  // 更改样式
  ascClass.value = 'active'
}

const orderDescending = () => {
  useKUNGalgameHomeStore().resetPageStatus()
  sortOrder.value = 'desc'
  ascClass.value = ''
}

const iconMap: Record<string, string> = {
  updated: 'bi:sort-down',
  time: 'eos-icons:hourglass',
  popularity: 'bi:fire',
  views: 'ic:outline-remove-red-eye',
  likes: 'line-md:thumbs-up-twotone',
  replies: 'ri:reply-line',
  comments: 'fa-regular:comment-dots',
}

const isSortField = () => {
  return Object.keys(iconMap).includes(sortField.value)
}
</script>

<template>
  <div class="container" :class="ascClass">
    <span>{{ $tm('mainPage.header.filter') }}</span>
    <span class="filter">
      <Icon v-if="isSortField()" :icon="iconMap[sortField]" />
    </span>
    <!-- 排序的二级菜单 -->
    <div class="sort-container">
      <div class="sort-submenu">
        <div
          v-for="kun in navSortItem"
          :key="kun.index"
          @click="handleSortByField(kun.sortField)"
        >
          <Icon class="icon-item" :icon="kun.icon" />{{
            $tm(`mainPage.header.${kun.name}`)
          }}
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 筛选、搜索话题、更多 */
.container {
  height: 100%;
  width: 1px;
  /* 居中弹性盒 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  white-space: nowrap;
}
/* 筛选 */
.container {
  background-color: var(--kungalgame-trans-blue-3);
  flex-grow: 1;
  border-radius: 5px 0 0 0;
  position: relative;
  border-right: 1px solid var(--kungalgame-trans-blue-4);
  box-sizing: border-box;
  cursor: pointer;
}
.container:hover {
  background-color: var(--kungalgame-trans-white-5);
}
.sort-container {
  width: 100%;
  top: 100%;
  position: absolute;
}
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-left: 7px;
  color: var(--kungalgame-blue-4);
}
.sort-submenu {
  display: none;
  flex-direction: column;
  box-shadow: 1px 2px 1px 1px var(--kungalgame-trans-blue-4);
}
.container:hover .sort-submenu {
  display: flex;
}
.sort-submenu > div {
  padding: 10px 0;
  background-color: var(--kungalgame-trans-white-2);
  font-size: 14px;
  color: var(--kungalgame-font-color-3);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 单个二级菜单 hover */
.sort-submenu > div:hover {
  background-color: var(--kungalgame-trans-blue-1);
  backdrop-filter: blur(5px);
}
.sort-submenu > div:active {
  background-color: var(--kungalgame-trans-blue-2);
}
.icon-item {
  color: var(--kungalgame-font-color-2);
  padding-right: 3px;
  font-size: 20px;
}

/* 按照升序还是降序排列 */
.sort-order {
  width: 100%;
  display: flex;
  cursor: default;
  span {
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
    &:nth-child(2) {
      border-left: 1px solid var(--kungalgame-trans-blue-4);
    }
  }
}

/* 点击升序后的样式 */
.active {
  background-color: var(--kungalgame-trans-red-3);
  .filter {
    color: var(--kungalgame-red-4);
  }
}
</style>
