<script setup lang="ts">
// 导入功能区的单个项目
import asideItem from './asideItem'
</script>

<template>
  <div class="aside">
    <!-- 顶部单个板块 -->
    <span v-for="kun in asideItem" :key="kun.index">
      <router-link :to="{ path: kun.router }">{{
        $tm(`mainPage.asideActive['${kun.name}']`)
      }}</router-link>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid var(--kungalgame-blue-4);
  span {
    width: 100%;
    height: 1px;
    flex-grow: 1;
    font-size: 18px;
    border-top: 1px solid var(--kungalgame-blue-4);
    &:first-child {
      border-top: none;
    }
    &:hover {
      transition: 0.2s;
      background-color: var(--kungalgame-trans-blue-2);
    }
    a {
      writing-mode: vertical-lr;
      text-orientation: sideways;
      transform: rotate(180deg);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--kungalgame-blue-5);
    }
  }
}
</style>
