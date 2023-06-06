<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
import Form from './components/Form.vue'
import Temp from './components/Temp.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <!-- 根容器 -->
  <div class="root" :style="{ backgroundImage: currBackground }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区 -->
    <div class="article">
      <Form />
      <Temp />
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 20px auto" />
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
  min-height: 1000px;
  background-color: var(--kungalgame-white);
}
/* 内容区 */
.article {
  /* 固定高度 */
  width: 90%;
  height: 800px;
  /* 调和背景色 */
  background-color: var(--kungalgame-trans-white-5);
  /* 模糊 */
  backdrop-filter: blur(5px);
  border: 1px solid var(--kungalgame-pink-4);
  box-shadow: var(--shadow);
  border-radius: 7px;
  margin: auto;
  display: flex;
  padding: 10px;
  color: var(--kungalgame-font-color-3);
}
</style>
