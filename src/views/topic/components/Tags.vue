<!-- 把所有话题的所有 Tag 组合起来形成的一个区域 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  tags: string[]
}>()
</script>

<template>
  <!-- 话题的标签 -->
  <div class="tags">
    <!-- 标签的图标字体 -->
    <Icon class="tag" icon="mingcute:tag-2-fill" />
    <ul>
      <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 话题的标签 */
.tags {
  display: flex;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  /* 单个标签的盒子 */
  ul {
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    li {
      margin: 3px;
      font-size: small;
      padding: 2px;
      background-color: var(--kungalgame-trans-blue-0);
      border: 1px solid var(--kungalgame-blue-1);
      overflow-y: scroll;
      cursor: pointer;
      &:hover {
        background-color: var(--kungalgame-red-0);
        transition: 0.2s;
      }
    }
  }
}
/* 图标字体 */
.tag {
  font-size: 23px;
  margin: 0 20px;
  color: var(--kungalgame-blue-4);
  flex-shrink: 0;
}
</style>
