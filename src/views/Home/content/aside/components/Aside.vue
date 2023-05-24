<script setup lang="ts">
// 导入功能区的单个项目
import asideItem from '../aside-item'
</script>

<template>
  <div class="aside">
    <!-- 顶部单个板块 -->
    <span v-for="kun in asideItem" :key="kun.index">
      <router-link :to="{ path: kun.router }">{{ kun.name }}</router-link>
    </span>
  </div>
</template>

<style lang="less" scoped>
.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  span {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    font-size: 18px;
    /* 文字竖直显示 */
    writing-mode: vertical-rl;
    text-orientation: upright;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: @kungalgame-blue-5;
      &:hover {
        background-color: @kungalgame-trans-blue-2;
      }
    }
  }
}
</style>
