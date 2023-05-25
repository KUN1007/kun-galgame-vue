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

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid $kungalgame-blue-4;
  span {
    width: 100%;
    height: 100%;
    font-size: 18px;
    display: grid;
    grid-auto-rows: minmax(0, 1fr); /* 控制行高度自适应 */
    border-top: 1px solid $kungalgame-blue-4;
    &:first-child {
      border-top: none;
    }
    &:hover {
      transition: 0.2s;
      background-color: $kungalgame-trans-blue-2;
    }
    a {
      writing-mode: vertical-rl;
      text-orientation: upright;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $kungalgame-blue-5;
    }
  }
}
</style>
