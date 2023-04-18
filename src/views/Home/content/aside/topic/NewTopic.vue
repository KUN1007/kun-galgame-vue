<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  name: "NewTopic",
  components: {
    Icon,
  },
};
</script>

<template>
  <!-- 侧边栏新帖子 -->
  <div class="new-topic-wrap">
    <!-- 今日热度帖子的标题名 -->
    <div class="new-topic-title-name">最新发布话题</div>
    <!-- 热门帖子的目录 -->
    <div class="new-topic-content">
      <!-- 单个热门帖子 （10 个）-->
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">
          鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲鲲
        </div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>1小时前</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>10小时前</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
      <div class="new-topic">
        <!-- 热门帖子的标题 -->
        <div class="new-topic-title">啊这可海星</div>
        <!-- 热门帖子的热度值 -->
        <div class="new-topic-number">
          <Icon icon="svg-spinners:clock" />
          <span>刚刚</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 最新话题 */
.new-topic-wrap {
  width: 100%;
  height: 1px;
  /* 设置今日热门帖子占侧边栏的比例 */
  flex-grow: 12.5;
  /* 今日热门帖子区域为竖直弹性盒 */
  display: flex;
  flex-direction: column;
}
.new-topic-title-name,
.new-topic-content {
  width: 100%;
  height: 1px;
}
.new-topic-title-name {
  /* 设置盒子的 border 在内侧显示 */
  box-sizing: border-box;
  border: 3px dashed var(--kungalgame-trans-pink-1);
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
.new-topic-content {
  background-color: var(--kungalgame-trans-pink-1);
  /* 热门帖子标题区域占整个左侧页面中部的比例 */
  flex-grow: 10;
  /* 热门帖子标题部分为弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 单个新帖子的样式 */
.new-topic {
  display: flex;
  /* 设置空白左右居中 */
  justify-content: space-between;
  /* 设置每个帖子高度相等 */
  flex-grow: 1;
  color: var(--kungalgame-font-color-3);
  align-items: center;
}
/* 单个帖子的标题样式 */
.new-topic-title {
  /* 单个帖子标题左侧的一段距离 */
  padding-left: 10px;
  /* 设置页面变化时不换行，显示省略号 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 2; /* 显示两行文本 */
  /* 设置帖子的字体大小 */
  font-size: smaller;
}
/* 设置单个帖子右侧的热度值盒子 */
.new-topic-number {
  /* 热度值距离右侧的距离 */
  margin-right: 10px;
  display: flex;
  /* 右侧热度区域不换行 */
  white-space: nowrap;
  align-items: center;
}
/* 时钟图标的颜色 */
.new-topic-number {
  /* 设置 fa 图标字体的颜色 */
  color: var(--kungalgame-purple-4);
}
/* 右侧区域的大小 */
.new-topic-number span {
  width: 36px;
  font-size: xx-small;
  /* 右侧区域距离最右侧的距离 */
  margin-left: 5px;
  color: var(--kungalgame-font-color-3);
}
</style>
