<script setup lang="ts">
// 导入功能区的单个项目
import asideItem from '@/types/home/aside-item'
</script>

<template>
  <div class="aside">
    <!-- 顶部单个板块 -->
    <span v-for="kun in asideItem" :key="kun.index">
      <router-link :to="{ path: kun.router }">{{
        $t(`mainPage.asideActive['${kun.name}']`)
      }}</router-link>
    </span>
  </div>
  <!-- 

    TODO:
    <span><Icon icon="line-md:uploading-loop" /></span>
    <span><Icon icon="healthicons:money-bag-outline" /></span>
    <span><Icon icon="solar:ranking-outline" /></span>
    <span><Icon icon="line-md:clipboard-list" /></span>
    <span><Icon icon="fluent-mdl2:contact-list" /></span>
    <span><Icon icon="line-md:alert" /></span>
   -->
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
      writing-mode: vertical-rl;
      text-orientation: upright;
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
