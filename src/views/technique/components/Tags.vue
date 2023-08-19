<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { tagsList } from './tags'
</script>

<template>
  <!-- 热门标签池 -->
  <div class="tags-container">
    <div>热门标签</div>
    <!-- 单个话题容器 -->
    <ul class="tags">
      <!-- 单个标签，最大输入文字为 10 个 -->
      <li v-for="kun in tagsList" :key="kun.index">
        <Icon class="icon" icon="ant-design:tag-twotone" /><router-link
          :to="kun.router"
          >{{ kun.data }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 热门标签池 */
.tags-container {
  /* 左右间距 */
  padding: 10px;
  & > div {
    display: flex;
    justify-content: center;
    font-size: 17px;
    margin: 20px 0;
  }
}

/* 单个标签容器 */
.tags {
  display: flex;
  flex-direction: column;
  & > li {
    height: 30px;
    /* 不换行 */
    white-space: nowrap;
    overflow: scroll;
    display: flex;
    align-items: center;
    & > a {
      color: var(--kungalgame-font-color-3);
      cursor: pointer;
      border-bottom: 2px solid var(--kungalgame-trans-white-9);
      &:hover {
        border-bottom: 2px solid var(--kungalgame-blue-4);
      }
    }
  }
}

/* 标签的图标字体 */
.icon {
  color: var(--kungalgame-red-4);
  font-size: 20px;
  margin-right: 5px;
  flex-shrink: 0;
}
</style>
