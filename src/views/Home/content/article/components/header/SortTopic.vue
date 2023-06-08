<script setup lang="ts">
// 导入图标
import { Icon } from '@iconify/vue'

interface Sort {
  index: number
  icon: string
  name: string
  event: string
}

const navSortItem: Sort[] = [
  {
    index: 1,
    icon: 'svg-spinners:clock',
    name: '按照时间排序',
    event: 'handleTimeSort',
  },
  {
    index: 2,
    icon: 'ic:outline-remove-red-eye',
    name: '按照浏览数排序',
    event: 'handelViewSort',
  },
  {
    index: 3,
    icon: 'line-md:thumbs-up-twotone',
    name: '按照点赞数排序',
    event: 'handleLikeSort',
  },
  {
    index: 4,
    icon: 'fa-regular:comment-dots',
    name: '按评论数排序',
    event: 'handleCommentSort',
  },
  {
    index: 5,
    icon: 'bi:fire',
    name: '按照热度值排序',
    event: 'handleHotSort',
  },
]
</script>

<template>
  <div class="container">
    <span>筛选</span>
    <Icon class="filter" icon="bi:sort-down" />
    <!-- 排序的二级菜单 -->
    <div class="sort-container">
      <div class="sort-submenu">
        <div v-for="kun in navSortItem" :key="kun.index">
          <Icon class="icon-item" :icon="kun.icon" />{{ kun.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 筛选、搜索帖子、更多 */
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
  background-color: var(--kungalgame-trans-red-3);
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
  font-size: 18px;
  margin-left: 5px;
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
  font-size: 17px;
}
</style>
