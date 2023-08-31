<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 右侧部分 -->
  <div class="bar">
    <!-- 对话题进行排序 -->
    <div class="sort">
      <div>排序</div>
      <!-- 左侧部分 -->
      <div class="func">
        <!-- 按照浏览数排序 -->
        <div><Icon icon="ic:outline-remove-red-eye" /> 按照浏览数排序</div>
        <!-- 按照点赞数排序 -->
        <div><Icon icon="line-md:thumbs-up-twotone" /> 按照点赞数排序</div>
        <!-- 按照时间排序 -->
        <div>
          <Icon class="hourglass" icon="eos-icons:hourglass" /> 按照时间排序
        </div>
      </div>
      <div><Icon icon="bi:sort-down" /></div>
    </div>
    <!-- 返回顶部 -->
    <div class="top">
      <div>顶部</div>
      <div><Icon icon="line-md:arrow-close-up"></Icon></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 右侧的功能栏 */
.bar {
  /* 位置 fix */
  position: fixed;
  bottom: 50px;
  right: 17px;
  z-index: 7;
  /* 居中 */
  display: flex;
  flex-direction: column;
}

/* 功能栏的左侧 */
.func {
  position: absolute;
  white-space: nowrap;
  right: 51px;
  cursor: pointer;
  display: none;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  top: 0;
}
.func > div {
  padding: 8px;
}
.func > div:hover {
  background-color: var(--kungalgame-trans-pink-1);
}
/* 排序 hover 出现 */
.sort:hover .func {
  display: block;
}
/* 图标字体的颜色 */
.func i {
  margin-right: 10px;
  color: var(--kungalgame-red-4);
}
/* 最后一个排序的样式 */
.func div:last-child i {
  margin-right: 14px;
}
/* 排序 */
.sort,
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  padding: 0 9px;
  box-shadow: var(--shadow);
  cursor: pointer;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-3);
}
.top {
  margin-top: 11px;
}
.sort i,
.top i {
  margin-top: 5px;
  color: var(--kungalgame-red-4);
}
</style>
