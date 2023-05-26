<script setup lang="ts">
import MainPageAside from './aside/MainPageAside.vue'
import MainPageArticle from './article/MainPageArticle.vue'
// 导入设置面板 store
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'
// 使用设置面板的 store
const settingsStore = useSettingsPanelStore()
const { showMainPageWidth } = storeToRefs(settingsStore)
const width = computed(() => {
  return showMainPageWidth.value + '%'
})
</script>

<template>
  <!-- 主体部分 -->
  <div class="main">
    <!-- 主容器 -->
    <div class="main-container">
      <!-- 内容区容器 -->
      <div class="content-container">
        <MainPageAside />
        <MainPageArticle />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 主体部分配置 */
.main {
  width: 100%;
  height: 1px;
  flex-grow: 21;
}
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* 可视内容部分宽度 */
.content-container {
  width: v-bind(width);
  /* 可视页面的最小宽度 */
  min-width: 700px;
  height: 100%;
  margin: 0 auto;
  /* 可视内容区为弹性盒 */
  display: flex;
  /* 可视内容区居中 */
  align-items: center;
  /* 设置背景毛玻璃效果 */
  backdrop-filter: blur(5px);
  background-color: $kungalgame-trans-white-5;
  /* 设置背景边框和圆角 */
  border-radius: 5px;
  padding: 5px;
}
</style>
