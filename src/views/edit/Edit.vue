<script setup lang="ts">
// 引入编辑器
import QuillEditor from '@/components/quill-editor/QuillEditor.vue'
import Tags from './components/Tags.vue'
import Footer from './components/Footer.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 编辑器 -->
      <QuillEditor
        class="editor"
        :isShowToolbar="true"
        :isShowAdvance="true"
        :isShowTitle="true"
        :isShowSettings="true"
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
      >Editor powered by quill</span
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
  background-color: var(--kungalgame-trans-white-2);
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
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
</style>
