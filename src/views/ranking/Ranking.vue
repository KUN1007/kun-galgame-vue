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
}
/* 内容区 */
.article {
  /* 固定高度 */
  width: 90%;
  height: 800px;
  /* 渐变背景色 */
  background: linear-gradient(
    $kungalgame-trans-pink-1,
    $kungalgame-trans-blue-1
  );
  /* 调和背景色 */
  background-color: $kungalgame-trans-white-4;
  /* 模糊 */
  backdrop-filter: blur(5px);
  border: 1px solid $kungalgame-pink-4;
  box-shadow: $shadow;
  border-radius: 7px;
  margin: auto;
  display: flex;
  padding: 10px;
  color: $kungalgame-font-color-3;
}
</style>
