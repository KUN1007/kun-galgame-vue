<script setup lang="ts">
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 Vue 函数
import { ref, watch } from 'vue'
import AsideActive from './components/AsideActive.vue'

import Aside from './components/Aside.vue'

// 用户点击折叠左侧区域
const asideBarStatus = (): boolean => {
  if (localStorage.getItem('KUNGalgame-main-page-aside') === 'true') {
    return true
  } else {
    return false
  }
}

const isActive = ref<boolean>(asideBarStatus())
const asideWidth = ref('240px')
const handleFold = () => {
  isActive.value = !isActive.value
}
watch(
  isActive,
  () => {
    localStorage.setItem(
      'KUNGalgame-main-page-aside',
      isActive.value.toString()
    )
    asideWidth.value = isActive.value ? '240px' : '40px'
  },
  { immediate: true }
)
</script>

<template>
  <!-- 侧边栏 -->
  <div class="aside">
    <!-- 侧边栏交互 -->
    <div class="nav-aside" @click="handleFold">
      <!-- fa 箭头图标字体 -->
      <Icon icon="line-md:arrow-left" style="font-size: 17px" v-if="isActive" />
      <Icon
        icon="line-md:arrow-right"
        style="font-size: 17px"
        v-if="!isActive"
      />
      <span v-if="isActive">{{ $t('mainPage.asideActive.fold') }}</span>
    </div>
    <div class="item-active" v-if="isActive">
      <AsideActive :isActive="isActive" />
    </div>

    <div class="item" v-if="!isActive">
      <Aside :isActive="!isActive" v-if="!isActive" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 侧边栏部分 */
.aside {
  /* 侧边栏距离文章区域的距离 */
  margin-right: 5px;
  width: v-bind('asideWidth');
  /* 侧边栏相对于整体可视部分的占比 */
  /* 侧边栏高度 */
  height: 100%;
  /* 设置侧边栏为弹性盒子 */
  display: flex;
  /* 方向为竖向 */
  flex-direction: column;
  transition: 0.5s;
  span {
    white-space: nowrap;
  }
}
/* 侧边栏交互 */
.nav-aside {
  height: 40px;
  /* 内容居中（折叠左侧区域） */
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* 字体设置 */
  font-size: small;
  color: $kungalgame-font-color-3;
  cursor: pointer;
}
/* 激活后的左侧区域 */
.item-active {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
/* 未激活的左侧区域 */
.item {
  height: 96.6%;
}
</style>
