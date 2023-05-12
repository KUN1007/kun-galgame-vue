<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
    <!-- 交互区搜索框 -->
    <div class="nav-article-search-container">
      <!-- 搜索框表单 -->
      <form class="article-search-form">
        <!-- 搜索框内容 -->
        <div class="nav-search-content">
          <!-- 框体 -->
          <input
            type="search"
            class="nav-search-input"
            placeholder="搜索帖子"
          />
        </div>
        <!-- 搜索框图标 -->
        <div class="nav-search-btn">
          <Icon icon="line-md:search" />
        </div>
      </form>
      <!-- 搜索历史容器 -->
      <div class="article-search-history">
        <!-- 搜索历史标题 -->
        <div class="search-history-title">
          <span>搜索历史</span>
          <span>清除所有历史</span>
        </div>
        <!-- 搜索历史 -->
        <div class="search-history-container">
          <div>
            <span
              >啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
              />
            </span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
          <div>
            <span
              >啊这可海星<Icon
                class="del-history"
                icon="line-md:close-circle-twotone"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 交互区域进入全部话题 -->
    <div class="nav-article-more-topic">
      <span>全部帖子</span>
      <Icon class="all-topic" icon="line-md:chevron-triple-right" />
    </div>
  </div>
</template>

<style lang="less" scoped>
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
  background-color: @kungalgame-trans-red-3;
  flex-grow: 1;
  border-radius: 5px 0 0 0;
  position: relative;
  border-bottom: 1px solid @kungalgame-trans-blue-4;
  box-sizing: border-box;
  cursor: pointer;
}
.nav-article-sort-container:hover {
  background-color: @kungalgame-trans-white-2;
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
  box-shadow: 1px 2px 1px 1px @kungalgame-trans-blue-4;
}
.nav-article-sort-container:hover .sort-submenu {
  display: flex;
}
.sort-submenu > div {
  padding: 10px 0;
  background-color: @kungalgame-trans-white-2;
  font-size: 14px;
  color: @kungalgame-font-color-3;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 单个二级菜单 hover */
.sort-submenu > div:hover {
  background-color: @kungalgame-red-1;
}
.sort-submenu > div:active {
  background-color: @kungalgame-red-2;
}
.icon-item {
  color: @kungalgame-font-color-2;
  padding-right: 3px;
}
/* 搜索帖子 */
.nav-article-search-container {
  height: 100%;
  width: 1px;
  justify-content: center;
  align-items: center;
  /* 页面缩小不换行 */
  white-space: nowrap;
  background-color: @kungalgame-trans-blue-2;
  flex-grow: 2;
  /* 相对于二级菜单定位 */
  position: relative;
  display: flex;
  border: 1px solid @kungalgame-trans-blue-4;
  box-sizing: border-box;
}
/* 中间搜索菜单的 hover */
.nav-article-search-container:hover {
  background-color: @kungalgame-trans-white-2;
}
/* 搜索框表单 */
.article-search-form {
  display: flex;
  height: 100%;
  /* 随着页面自增长 */
  width: 1px;
  flex-grow: 1;
  /* 居中 */
  justify-content: center;
  align-items: center;
}
/* 搜索内容区 */
.nav-search-content {
  width: 100%;
}
/* 框体 */
.nav-search-input {
  padding: 0 15px;
  height: 40px;
  width: 100%;
  /* 搜索时输入的字体大小 */
  font-size: 16px;
  border: none;
  background-color: @kungalgame-trans-white-8;
}
/* 提示文字“搜索帖子”的文字颜色 */
.nav-search-input::placeholder {
  color: @kungalgame-font-color-2;
}
/* 获取焦点后的框体 */
.nav-search-input:focus {
  outline: none;
}
/* 搜索按钮 */
.nav-search-btn {
  /* 正方形，不缩小 */
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  border-left: 1px solid @kungalgame-trans-blue-4;
  /* 搜索图标居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 内边距盒子 */
  box-sizing: border-box;
  font-size: 18px;
}
/* 搜索按钮的 hover */
.nav-search-btn:hover {
  background-color: @kungalgame-red-2;
}
/* 搜索按钮的 active */
.nav-search-btn:active {
  background-color: @kungalgame-red-3;
}
/* 搜索历史的容器 */
.article-search-history {
  width: 100%;
  /* 相对于 nav 的搜索区域绝对定位 */
  position: absolute;
  /* 紧贴搜索区定位 */
  top: 40px;
  left: 0;
  /* 无 hover 时不显示搜索历史 */
  display: none;
  flex-direction: column;
  background-color: @kungalgame-trans-white-2;
  color: @kungalgame-font-color-3;
  border: 1px solid @kungalgame-red-1;
  border-radius: 7px;
  box-shadow: 0 1px 6px @kungalgame-gray-2;
}
/* hover 时显示搜索历史 */
.nav-article-search-container:hover .article-search-history {
  display: flex;
}
/* 搜索历史 title 的文字 */
.search-history-title {
  display: flex;
  margin: 10px;
  /* 两个提示文字左右分布 */
  justify-content: space-between;
}
.search-history-title span {
  font-size: 14px;
}
.search-history-title span:nth-child(2) {
  cursor: pointer;
  border-bottom: 1.5px solid @kungalgame-trans-white-2;
}
.search-history-title span:nth-child(2):hover {
  border-bottom: 1.5px solid @kungalgame-blue-4;
}
/* 搜索历史 TAG 的存放容器 */
.search-history-container {
  display: flex;
  flex-direction: column;
  /* 单个搜索记录的字体 */
  font-size: 13px;
  /* 搜索记录左右两侧的空白距离 */
  margin: 10px;
}
/* 单个搜索历史 */
.search-history-container > div {
  padding: 7px 3px;
  margin: 2px 0;
  background-color: @kungalgame-trans-gray-1;
  cursor: pointer;
}
/* 单个搜索历史的 hover */
.search-history-container > div:hover {
  background-color: @kungalgame-trans-blue-1;
}
/* 单个搜索按钮 hover 时显示删除按钮 */
.search-history-container > div:hover .del-history {
  display: block;
}
/* 单个搜索历史 */
.search-history-container span {
  position: relative;
  display: flex;
  overflow: hidden;
}
/* 删除按钮 */
.del-history {
  top: 10%;
  right: 1%;
  font-size: medium;
  position: absolute;
  color: @kungalgame-font-color-0;
  display: none;
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
  background-color: @kungalgame-trans-purple-3;
  flex-grow: 1;
  border-radius: 0 5px 0 0;
  cursor: pointer;
  border-bottom: 1px solid @kungalgame-trans-blue-4;
  box-sizing: border-box;
}
.nav-article-more-topic:hover {
  background-color: @kungalgame-trans-white-2;
}
.nav-article-more-topic:active {
  background-color: @kungalgame-trans-red-3;
}
.all-topic {
  font-size: 18px;
}
</style>
