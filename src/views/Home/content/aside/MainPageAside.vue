<script setup lang="ts">
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 Vue 函数
import { ref } from 'vue'
import AsideActive from './components/AsideActive.vue'
// 导入 animate css
import 'animate.css'
import Aside from './components/Aside.vue'

// 用户点击折叠左侧区域
// localStorage.setItem('KUNGalgameMainPageAsideBar', 'true')
// const asideBarStatus =
//   localStorage.getItem('KUNGalgameMainPageAsideBar') || true
const isActive = ref(false)
const asideWidth = ref('40px')
const handleFold = () => {
  if (isActive.value) {
    asideWidth.value = '40px'
  } else {
    asideWidth.value = '240px'
  }
  isActive.value = !isActive.value
}
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
      <span v-if="isActive" class="animate__animated animate__rotateInDownRight"
        >折叠左侧区域</span
      >
    </div>
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__bounceOutLeft"
    >
      <div class="item" v-if="isActive">
        <AsideActive :isActive="isActive" />
      </div>
    </Transition>
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__bounceOutLeft"
    >
      <div class="item" v-if="!isActive">
        <Aside :isActive="!isActive" v-if="!isActive" />
      </div>
    </Transition>
  </div>
</template>

<style lang="less" scoped>
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
  height: 38px;
  /* 内容居中（折叠左侧区域） */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* 字体设置 */
  font-size: small;
  color: @kungalgame-font-color-3;
  cursor: pointer;
}
.item {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
