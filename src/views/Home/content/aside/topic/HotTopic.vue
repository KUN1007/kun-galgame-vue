<script lang="ts">
export default {
    name:'HotTopic'
};
</script>

<template>
  <!-- 侧边栏动态推送今日热度帖子 -->
  <div class="top-topic-wrap">
    <!-- 今日热度帖子的标题名 -->
    <div class="top-topic-title-name">今日热门话题</div>
    <!-- 热门帖子的目录 -->
    <div class="top-topic-content">
      <!-- 单个热门帖子 （10 个）-->
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">
          鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲
        </div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
      <div class="hot-topic">
        <!-- 热门帖子的标题 -->
        <div class="top-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="top-topic-number">
          <i class="fa-solid fa-fire"></i>
          <span>1007</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 侧边栏动态推送帖子的总容器 */
.top-topic-wrap {
  width: 100%;
  height: 1px;
  /* 设置今日热门帖子占侧边栏的比例 */
  flex-grow: 12.5;
  /* 热门帖子距离最新帖子的距离 */
  margin-bottom: 5px;
  /* 今日热门帖子区域为竖直弹性盒 */
  display: flex;
  flex-direction: column;
}
.top-topic-title-name,
.top-topic-content {
  width: 100%;
  height: 1px;
}
/* “今日热门话题”六个字的样式 */
.top-topic-title-name {
  /* 设置盒子的 border 在内侧显示 */
  box-sizing: border-box;
  border: 3px dashed var(--kungalgame-trans-blue-1);
  border-bottom: none;
  /* 设置（今日热门话题）居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 设置（今日热门话题占整个热门区域的宽度） */
  flex-grow: 1;
  color: var(--kungalgame-font-color-3);
  /* 设置页面缩小到最小时该行不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 展示热门帖子标题的区域 */
.top-topic-content {
  background-color: var(--kungalgame-trans-blue-1);
  /* 热门帖子标题区域占整个左侧页面中部的比例 */
  flex-grow: 10;
  /* 热门帖子标题部分为弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 单个热门帖子的样式 */
.hot-topic {
  display: flex;
  /* 设置空白左右居中 */
  justify-content: space-between;
  /* 设置每个帖子高度相等 */
  flex-grow: 1;
  color: var(--kungalgame-font-color-3);
  align-items: center;
}
/* 单个帖子的标题样式 */
.top-topic-title {
  /* 单个帖子标题左侧的一段距离 */
  padding-left: 10px;
  /* 设置页面变化时不换行，显示省略号 */
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 2; /* 显示两行文本 */
  /* 设置帖子的字体大小 */
  font-size: smaller;
}
/* 设置单个帖子右侧的热度值盒子 */
.top-topic-number {
  /* 热度值距离右侧的距离 */
  margin-right: 10px;
  display: flex;
  white-space: nowrap;
  align-items: center;
}
.top-topic-number i {
  /* 设置 fa 图标字体的颜色 */
  color: var(--kungalgame-red-4);
}
.top-topic-number span {
  width: 38px;
  font-size: small;
  margin-left: 5px;
}
</style>
