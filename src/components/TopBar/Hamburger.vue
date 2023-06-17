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
      <img src="../../assets/images/favicon.png" alt="KUNGalgame" />
      <span>{{ $t('header.name') }}</span>
    </div>
    <!-- 交互栏目 -->
    <div class="item">
      <span v-for="kun in topBarItem" :key="kun.index">
        <RouterLink :to="kun.router">{{
          $t(`header['${kun.name}']`)
        }}</RouterLink>
      </span>
    </div>

    <!-- 白天黑夜模式切换组件 -->
    <Mode />

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
  width: 222px;
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  box-shadow: var(--shadow);
  border-left: none;
  border-top: none;
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
    font-size: 17px;
  }
}

.mode {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
}
.mode-container {
  width: 60%;
  display: flex;
  justify-content: space-around;
  li {
    cursor: pointer;
  }
  li:nth-child(1) {
    color: var(--kungalgame-red-4);
  }
  li:nth-child(2) {
    color: var(--kungalgame-blue-4);
  }
}

.close {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
