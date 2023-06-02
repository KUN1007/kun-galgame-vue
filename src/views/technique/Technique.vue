<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'
// 导入背景图片
import { currBackground } from '@/hooks/useBackgroundPicture'
import SingleTopic from './components/SingleTopic.vue'
import Pagination from './components/Pagination.vue'
import Aside from './components/Aside.vue'
</script>

<template>
  <div class="root" :style="{ backgroundImage: currBackground }">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区 -->
    <div class="content">
      <Aside />
      <!-- 文章容器 -->
      <div class="article">
        <!-- 所有文章的容器 -->
        <div class="article-container">
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
          <SingleTopic />
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 1500px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 800px;
}
/* 内容区 */
.content {
  /* 距离内部的距离 */
  padding: 10px;
  height: 1400px;
  /* 占总页面的宽度 */
  width: 95%;
  /* 最小宽度 */
  min-width: 700px;
  /* 水平垂直居中 */
  margin: 0 auto;
  display: flex;
  background-color: $kungalgame-trans-white-5;
  /* 全局字体颜色 */
  color: $kungalgame-font-color-3;
  border: 1px solid $kungalgame-trans-blue-2;
  border-radius: 5px;
}
/* 

文章部分

*/
.article {
  height: 100%;
  width: 1px;
  /* 随页面大小变化自增长 */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* 距离左侧交互的距离 */
  margin-left: 10px;
}
/* 所有文章的容器 */
.article-container {
  height: 1px;
  flex-grow: 1;
  display: grid;
  /* 自填充自增长子元素 */
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  /* 固定 5 行，行高固定 */
  grid-template-rows: repeat(5, 255px);
  /* 设置 grid 布局的块间距，gap 取代了之前的 grid-gap */
  gap: 10px;
}
</style>
