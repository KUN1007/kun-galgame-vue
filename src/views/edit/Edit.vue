<script setup lang="ts">
import WangEditor from '@/components/wang-editor/WangEditor.vue'
import Tags from './components/Tags.vue'
import Footer from './components/Footer.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 编辑器 -->
      <WangEditor
        class="editor"
        :height="500"
        :isShowToolbar="true"
        :isShowAdvance="true"
        :isShowTitle="true"
      />

      <!-- 内容区的底部 -->
      <div class="content-footer">
        <Tags />

        <Footer />
      </div>
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto; padding-top: 20px" />
    <span style="margin: 0 auto; color: var(--kungalgame-font-color-3)"
      >Editor powered by wangEditor</span
    >
  </div>
</template>

<style lang="scss" scoped>
.root {
  margin-top: 20px;
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
  background-color: var(--kungalgame-trans-white-5);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
}

.content-footer {
  padding: 10px;
  /* 距离内容区的距离 */
  padding-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--kungalgame-trans-white-5);
  backdrop-filter: blur(5px);
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
</style>
