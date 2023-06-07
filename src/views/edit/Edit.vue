<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
import WangEditor from '@/components/WangEditor.vue'
import Footer from './components/Footer.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
  <div class="root">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 内容区容器 -->
      <div class="content-wrapper">
        <!-- 内容区的头部 -->
        <div class="content-header">
          <!-- 帖子的标题 -->
          <div class="topic-title">
            <input type="text" placeholder="请输入帖子的标题（40字以内）" />
          </div>
        </div>
        <!-- 编辑器 -->
        <WangEditor class="editor" />
      </div>

      <Footer />
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto; margin-bottom: 17px" />
    <span style="margin: 0 auto">Editor powered by wangEditor</span>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  margin: 0 auto;
}
.root {
  height: 100vh;
  min-height: 1100px;
  min-width: 900px;
  display: flex;
  flex-direction: column;
}
/* 内容部分的总容器 */
.container {
  width: 80%;
  height: 100%;
  margin: auto;
  /* 容器的阴影 */
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-2);
  color: var(--kungalgame-font-color-3);
}
/* 容器的顶部 */
.content-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 顶部的固定高度 */
  height: 90px;
}
/* 帖子的发布标题 */
.topic-title {
  width: 97%;
}
/* 帖子标题的输入框 */
.topic-title input {
  color: var(--kungalgame-font-color-2);
  /* 距离外轮廓的距离 */
  padding: 7px;
  /* 内边距盒子 */
  box-sizing: border-box;
  width: 100%;
  /* 标题输入字体大小 */
  font-size: 40px;
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-white-9);
}
/* 标题输入框 focus 之后的样式 */
.topic-title input:focus {
  box-shadow: 0px 0px 5px var(--kungalgame-blue-4);
}
</style>
