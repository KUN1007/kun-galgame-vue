<script setup lang="ts">
import { Icon } from '@iconify/vue'
import KUNGalgameSearchBox from '@/components/KUNGalgameSearchBox.vue'
</script>

<template>
  <!-- 文章区顶部交互区 -->
  <div class="nav-article">
    <!-- 排序区域容器 -->
    <div class="nav-article-sort-container">
      <span>筛选</span>
      <Icon class="filter" icon="bi:sort-down" />
      <!-- 排序的二级菜单 -->
      <div class="sort-container">
        <div class="sort-submenu">
          <div>
            <Icon class="icon-item" icon="svg-spinners:clock" />按照时间排序
          </div>
          <div>
            <Icon
              class="icon-item"
              icon="ic:outline-remove-red-eye"
            />按浏览数排序
          </div>
          <div>
            <Icon
              class="icon-item"
              icon="line-md:thumbs-up-twotone"
            />按点赞数排序
          </div>
          <div>
            <Icon
              class="icon-item"
              icon="fa-regular:comment-dots"
            />按评论数排序
          </div>
          <div><Icon class="icon-item" icon="bi:fire" />按热度值排序</div>
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    <KUNGalgameSearchBox />
    <!-- 交互区域进入全部话题 -->
    <div class="nav-article-more-topic">
      <span>全部帖子</span>
      <Icon class="all-topic" icon="line-md:chevron-triple-right" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 文章顶部交互栏 */
.nav-article {
  width: 100%;
  height: 40px;
  /* 整体弹性 */
  display: flex;
  flex-shrink: 0;
  /* 交互区距离外面半透明总容器的距离 */
  margin-top: 5px;
}
/* 筛选、搜索帖子、更多 */
.nav-article-sort-container {
  height: 100%;
  width: 1px;
  /* 居中弹性盒 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  white-space: nowrap;
}
/* 筛选 */
.nav-article-sort-container {
  background-color: $kungalgame-trans-red-3;
  flex-grow: 1;
  border-radius: 5px 0 0 0;
  position: relative;
  border-bottom: 1px solid $kungalgame-trans-blue-4;
  box-sizing: border-box;
  cursor: pointer;
}
.nav-article-sort-container:hover {
  background-color: $kungalgame-trans-white-2;
}
.sort-container {
  width: 100%;
  top: 100%;
  position: absolute;
}
.filter {
  font-size: 18px;
  margin-left: 5px;
}
.sort-submenu {
  display: none;
  flex-direction: column;
  box-shadow: 1px 2px 1px 1px $kungalgame-trans-blue-4;
}
.nav-article-sort-container:hover .sort-submenu {
  display: flex;
}
.sort-submenu > div {
  padding: 10px 0;
  background-color: $kungalgame-trans-white-2;
  font-size: 14px;
  color: $kungalgame-font-color-3;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 单个二级菜单 hover */
.sort-submenu > div:hover {
  background-color: $kungalgame-red-1;
}
.sort-submenu > div:active {
  background-color: $kungalgame-red-2;
}
.icon-item {
  color: $kungalgame-font-color-2;
  padding-right: 3px;
}
/* 更多 */
.nav-article-more-topic {
  height: 100%;
  width: 1px;
  /* 居中弹性盒 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  white-space: nowrap;
  background-color: $kungalgame-trans-purple-3;
  flex-grow: 1;
  border-radius: 0 5px 0 0;
  cursor: pointer;
  border-bottom: 1px solid $kungalgame-trans-blue-4;
  box-sizing: border-box;
}
.nav-article-more-topic:hover {
  background-color: $kungalgame-trans-white-2;
}
.nav-article-more-topic:active {
  background-color: $kungalgame-trans-red-3;
}
.all-topic {
  font-size: 18px;
}
</style>
