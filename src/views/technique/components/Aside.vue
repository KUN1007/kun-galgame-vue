<script setup lang='ts'>
import Tags from './Tags.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'
</script>

<template>
      <!-- 侧边的交互栏 -->
      <div class="aside">
        <div class="aside-container">
          <!-- 页面的标题 -->
          <div class="page-title">技术交流</div>
          <!-- 侧边的搜索框 -->
          <div class="nav-search">
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
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
          </div>
          <!-- 推荐标签 -->
          <div class="recommend">
            <span>galgame 汉化相关</span>
            <span>galgame 运行相关</span>
            <span>galgame 制作相关</span>
          </div>
          <!-- 热门标签 -->
          <Tags />
          <!-- 版权 -->
          <KUNGalgameFooter
            style="
              position: absolute;
              bottom: 2%;
              left: 10%;
              font-size: 15px;
              /* 文字间距 */
              letter-spacing: 1px;
              line-height: 20px;
            "
          />
        </div>
      </div>
</template>

<style lang='scss' scoped>
/* 侧边的交互栏 */
.aside {
  /* 固定宽度 */
  width: 200px;
  height: 100%;
  background-color: $kungalgame-trans-white-5;
  border: 1px solid $kungalgame-trans-blue-4;
  box-sizing: border-box;
  border-radius: 5px;
}
/* 侧边栏容器，调透明色用 */
.aside-container {
  height: 100%;
  background: linear-gradient(
    $kungalgame-trans-blue-1,
    $kungalgame-trans-red-1
  );
  display: flex;
  flex-direction: column;
  /* 相对于版权定位 */
  position: relative;
  border-radius: 5px;
}
/* “技术交流几个字” */
.page-title {
  /* 固定高度 */
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: $kungalgame-blue-3;
  font-style: italic;
  text-shadow: 1px 1px 3px $kungalgame-red-4;
}
/* 侧边搜索框 */
.nav-search {
  background-color: $kungalgame-trans-blue-2;
  display: flex;
  box-sizing: border-box;
}
.nav-search:hover {
  background-color: $kungalgame-trans-white-2;
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
  background-color: $kungalgame-trans-white-9;
}
/* 提示文字“搜索帖子”的文字颜色 */
.nav-search-input::placeholder {
  color: $kungalgame-font-color-2;
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
  border-left: 1px solid $kungalgame-trans-blue-3;
  /* 搜索图标居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 内边距盒子 */
  box-sizing: border-box;
}
/* 搜索按钮的 hover */
.nav-search-btn:hover {
  background-color: $kungalgame-red-2;
}
/* 搜索按钮的 active */
.nav-search-btn:active {
  background-color: $kungalgame-red-3;
}
/* 推荐标签 */
.recommend {
  display: flex;
  flex-direction: column;
}
/* 单个推荐标签的样式 */
.recommend span {
  /* 固定高度 */
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid $kungalgame-trans-blue-4;
  cursor: pointer;
}
.recommend span:hover {
  background-color: $kungalgame-trans-red-2;
}
</style>