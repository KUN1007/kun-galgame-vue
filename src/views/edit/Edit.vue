<script setup lang="ts">
import KUNGalgameEditor from '@/components/editor/KUNGalgameEditor.vue'
import Tags from './components/Tags.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 内容区容器 -->
      <div class="content">
        <!-- 标题 -->
        <Header />
        <!-- 编辑器 -->
        <KUNGalgameEditor />
      </div>

      <!-- 内容区的底部 -->
      <div class="content-footer">
        <!-- 话题的 Tag -->
        <Tags />
        <!-- 话题的 Footer -->
        <Footer />
      </div>
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
}

/* 内容部分的总容器 */
.container {
  transition: all 0.2s;
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
  /* 容器的阴影 */
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-2);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
  padding: 10px;
  backdrop-filter: blur(5px);
}

.content {
  margin: 0 auto;
  border: 1px solid var(--kungalgame-blue-4);
}

.content-footer {
  /* 距离内容区的距离 */
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
</style>
