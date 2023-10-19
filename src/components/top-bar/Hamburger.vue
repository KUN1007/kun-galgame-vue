<!-- 这个文件为了适配手机端的顶部导航栏 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
// 导入模式切换组件
import Mode from '../setting-panel/components/Mode.vue'
// 导入语言切换组件
import SwitchLanguage from '../setting-panel/components/SwitchLanguage.vue'
// 导入顶部导航栏项目
import { topBarItem } from './topBarItem'
// 向父元素发送关闭命令
defineEmits(['showKUNGalgameHamburger'])
</script>

<template>
  <!-- 总容器 -->
  <div class="container">
    <div class="kungalgame">
      <img src="@/assets/images/favicon.webp" alt="KUNGalgame" />
      <span>{{ $tm('header.name') }}</span>
    </div>
    <!-- 交互栏目 -->
    <div class="item" style="font-size: 17px">
      <span v-for="kun in topBarItem" :key="kun.index">
        <RouterLink :to="kun.router">{{
          $tm(`header['${kun.name}']`)
        }}</RouterLink>
      </span>
    </div>

    <!-- 白天黑夜模式切换组件 -->
    <Mode style="font-size: 20px" />

    <!-- 语言切换组件 -->
    <SwitchLanguage style="font-size: 20px; margin-bottom: 40px" />
    <!-- 关闭按钮 -->
    <div class="close">
      <Icon
        icon="line-md:menu-fold-left"
        @click="$emit('showKUNGalgameHamburger', false)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 400px;
  width: 277px;
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  box-shadow: var(--shadow);
  border-left: none;
  border-top: none;
  border-radius: 0 5px 5px 5px;
  display: flex;
  flex-direction: column;
  color: var(--kungalgame-font-color-3);
  font-size: 25px;
}

.item {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    color: var(--kungalgame-blue-4);
  }
}

.kungalgame {
  display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 10px;
  }
  span {
    font-size: 20px;
  }
}

.close {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
