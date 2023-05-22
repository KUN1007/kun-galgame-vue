<script setup lang="ts">
import AsideItem from './item/AsideItem.vue'
import NewTopic from './topic/NewTopic.vue'
import HotTopic from './topic/HotTopic.vue'
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 Vue 函数
import { ref } from 'vue'
// 用户点击折叠左侧区域
const asideWidth = ref(240)
const asideWidthStyle = `${asideWidth.value}px`
const handleFold = () => {
  asideWidth.value = 40
  console.log(asideWidth.value)
}
</script>

<template>
  <!-- 侧边栏 -->
  <div class="aside">
    <!-- 侧边栏交互 -->
    <div class="nav-aside" @click="handleFold">
      <span>{{ asideWidth }}</span>
      <!-- fa 箭头图标字体 -->
      <Icon icon="line-md:arrow-left" />
      <span>折叠左侧区域</span>
    </div>
    <AsideItem />
    <HotTopic />
    <NewTopic />
  </div>
</template>

<style lang="less" scoped>
/* 侧边栏部分 */
.aside {
  /* 侧边栏距离文章区域的距离 */
  margin-right: 5px;
  width: v-bind('asideWidthStyle');
  /* 侧边栏相对于整体可视部分的占比 */
  /* 侧边栏高度 */
  height: 100%;
  /* 设置侧边栏为弹性盒子 */
  display: flex;
  /* 方向为竖向 */
  flex-direction: column;
}
/* 侧边栏交互 */
.nav-aside {
  width: 100%;
  height: 1px;
  /* 折叠区相当于侧边栏的占比 */
  flex-grow: 1;
  /* 内容居中（折叠左侧区域） */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* 字体设置 */
  font-size: small;
  color: @kungalgame-font-color-3;
  /* 页面缩小到最小时不换行 */
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
</style>
