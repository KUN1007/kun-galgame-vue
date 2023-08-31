<!-- 
  这里是话题部分的功能区，有返回顶部等功能
 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

// 顶部导航栏单个项目的接口
interface navItem {
  index: number
  icon: string
  name: string
}

// 顶部导航栏的项目
const asideNavItem: navItem[] = [
  { index: 1, icon: 'line-md:arrow-close-up', name: 'top' },
  { index: 2, icon: 'svg-spinners:clock', name: 'timeSort' },
  { index: 3, icon: 'line-md:thumbs-up-twotone', name: 'likeSort' },
  { index: 4, icon: 'fa-regular:comment-dots', name: 'commentSort' },
]
</script>

<template>
  <div class="nav">
    <!-- 交互区容器 -->
    <ul>
      <li v-for="kun in asideNavItem" :key="kun.index">
        <Icon class="icon" :icon="kun.icon" />{{
          $tm(`topic.aside['${kun.name}']`)
        }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 话题详情页的交互 */
.nav {
  height: 100px;
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
