<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
import Next from './components/Next.vue'
import History from './components/History.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="root" :style="{ backgroundImage: currBackground }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 内容区 -->
      <div class="content">
        <!-- 下个版本计划更新 -->
        <div class="next-ver">
          <!-- 标题 -->
          <div class="title">{{ $t('update.next') }}</div>
          <Next />
        </div>
        <!-- 历史版本 -->
        <div class="history-ver">
          <!-- 标题 -->
          <div class="title">{{ $t('update.history') }}</div>
          <!-- 历史更新的内容 -->
          <History />
        </div>
      </div>
      <!-- 版权 -->
      <KUNGalgameFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 1000px;
  min-height: 650px;
}
/* 内容区容器 */
.container {
  /* 固定宽高 */
  height: 500px;
  width: 900px;
  /* 相对于版权定位 */
  position: relative;
  /* 居中 */
  margin: auto;
  background-color: var(--kungalgame-trans-white-2);
  /* 模糊背景 */
  backdrop-filter: blur(5px);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-trans-blue-2);
  box-shadow: var(--shadow);
}
/* 内容区 */
.content {
  width: 100%;
  height: 100%;
  display: flex;
}
/* 下个版本计划更新 */
.next-ver {
  width: 50%;
}
/* 标题 */
.title {
  height: 40px;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
/* 历史版本 */
.history-ver {
  height: 100%;
  width: 50%;
}
</style>
