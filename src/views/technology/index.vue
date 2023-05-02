<script setup lang="ts"></script>

<template>
  <div class="root">
    <!-- 头部 -->
    <div class="header">
      <!-- 顶部左侧交互栏 -->
      <div class="nav-top">
        <div class="kungal-info">
          <img src="../img/favicon.png" alt="KUNgal" />
          <span>KUNGalgame</span>
        </div>
        <div class="top-bar">
          <ul>
            <li>所有帖子</li>
            <li>发布帖子</li>
            <li>技术交流</li>
            <li>数据统计</li>
            <div class="top-bar-box"></div>
          </ul>
        </div>
      </div>
      <div class="kungalgamer-info">
        <img src="../img/KUN.jpg" alt="KUN" />
        <span>KUN</span>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content">
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
          <!-- 热门标签池 -->
          <div class="tags-container">
            <div>热门标签</div>
            <!-- 单个帖子容器 -->
            <ul class="tags">
              <!-- 单个标签，最大输入文字为 10 个 -->
              <li>
                <i class="fa-solid fa-tag"></i><span>啊这可海星啊这可海星</span>
              </li>
              <li>
                <i class="fa-solid fa-tag"></i><span>KUN KUN KUN KUN</span>
              </li>
              <li><i class="fa-solid fa-tag"></i><span>啊海星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这可海星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这可星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这海星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这星</span></li>
              <li>
                <i class="fa-solid fa-tag"></i><span>啊这啊这可海星可海星</span>
              </li>
              <li><i class="fa-solid fa-tag"></i><span>啊这可海</span></li>
              <li>
                <i class="fa-solid fa-tag"></i><span>啊这可海星啊这可海星</span>
              </li>
            </ul>
          </div>
          <!-- 版权 -->
          <div class="copyright">
            <span>Copyright © 2023</span>
            <span>KUNgalgame</span>
            <span>All rights reserved</span>
            <span>Version 0.01</span>
          </div>
        </div>
      </div>
      <!-- 文章容器 -->
      <div class="article">
        <!-- 所有文章的容器 -->
        <div class="article-container">
          <!-- 单个帖子 -->
          <div class="topic">
            <!-- 帖子 hover 后的边 -->
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容预览 -->
            <div class="topic-content">
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <!-- 单个标签 -->
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1</div>
              <!-- 帖子的点赞数 -->
              <div class="like"><i class="fa-regular fa-thumbs-up"></i>1</div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
          <div class="topic">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <!-- 帖子的标题 -->
            <div class="topic-title">啊这可海星</div>
            <!-- 帖子的内容 预览 -->
            <div class="topic-content">
              <!-- 这里设定为最大展示 177 个字符 -->
              <p>
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
                啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星啊这可海星
              </p>
            </div>
            <!-- 帖子的状态 -->
            <div class="topic-status">
              <!-- 帖子的点击数 -->
              <div class="view"><i class="fa-regular fa-eye"></i>1007</div>
              <!-- 帖子的点赞数 -->
              <div class="like">
                <i class="fa-regular fa-thumbs-up"></i>1007
              </div>
              <!-- 帖子的回复数 -->
              <div class="reply">
                <i class="fa-regular fa-comment-dots"></i>1007
              </div>
            </div>
            <!-- 帖子的标签 -->
            <div class="topic-tags">
              <span><i class="fa-solid fa-tag"></i>啊这可海星啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
              <span>啊这可海星</span>
            </div>
          </div>
        </div>
        <!-- 下一页 -->
        <div class="page-switch">
          <button>上一页</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>10</button>
          <button>下一页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
*::-webkit-scrollbar {
  display: none;
}
.root {
  height: 1500px;
  display: flex;
  flex-direction: column;
  background-image: url(../img/bg/bg1.png);
  /* background-image: url(./img/bg/bg2.png; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 800px;
  font-family: 'adobe-clean', 'Source Sans Pro', -apple-system,
    'BlinkMacSystemFont', 'Segoe UI,Roboto', sans-serif;
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
  margin: auto;
  display: flex;
  background-color: @kungalgame-trans-white-5;
  /* 全局字体颜色 */
  color: @kungalgame-font-color-3;
  border: 1px solid @kungalgame-trans-blue-1;
  border-radius: 5px;
}
/* 侧边的交互栏 */
.aside {
  /* 固定宽度 */
  width: 200px;
  height: 100%;
  background-color: @kungalgame-trans-white-5;
  border: 1px solid @kungalgame-trans-blue-4;
  box-sizing: border-box;
  border-radius: 5px;
}
/* 侧边栏容器，调透明色用 */
.aside-container {
  height: 100%;
  background: linear-gradient(
    @kungalgame-trans-blue-1,
    @kungalgame-trans-red-1
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
  color: @kungalgame-blue-3;
  font-style: italic;
  text-shadow: 1px 1px 3px @kungalgame-red-4;
}
/* 侧边搜索框 */
.nav-search {
  background-color: @kungalgame-trans-blue-2;
  display: flex;
  box-sizing: border-box;
}
.nav-search:hover {
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
  background-color: @kungalgame-trans-white-9;
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
  border-left: 1px solid @kungalgame-trans-blue-3;
  /* 搜索图标居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 内边距盒子 */
  box-sizing: border-box;
}
/* 搜索按钮的 hover */
.nav-search-btn:hover {
  background-color: @kungalgame-red-2;
}
/* 搜索按钮的 active */
.nav-search-btn:active {
  background-color: @kungalgame-red-3;
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
  border-bottom: 1px solid @kungalgame-trans-blue-4;
  cursor: pointer;
}
.recommend span:hover {
  background-color: @kungalgame-trans-red-2;
}
/* 热门标签池 */
.tags-container {
  /* 左右间距 */
  padding: 10px;
}
/* “热门标签几个字” */
.tags-container > div {
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin: 10px 0;
}
/* 单个标签容器 */
.tags {
  display: flex;
  flex-direction: column;
}
/* 单个标签 */
.tags > li {
  height: 30px;
  /* 不换行 */
  white-space: nowrap;
}
/* 标签的图标字体 */
.tags > li i {
  color: @kungalgame-red-3;
  margin-right: 5px;
}
/* 标签的文字部分 */
.tags > li > span {
  cursor: pointer;
  border-bottom: 2px solid @kungalgame-trans-white-8;
}
.tags > li > span:hover {
  border-bottom: 2px solid @kungalgame-blue-4;
}
/* 版权 */
.copyright {
  /* 绝对定位于侧边栏 */
  position: absolute;
  bottom: 2%;
  left: 13%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 文字间距 */
  letter-spacing: 1px;
  line-height: 20px;
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
/* 单个帖子 */
.topic {
  border: 1px solid @kungalgame-trans-blue-4;
  border-radius: 5px;
  /* 帖子内容距离边的距离 */
  padding: 0 10px;
  background-color: @kungalgame-trans-white-2;
  /* 相对于底部状态的定位 */
  position: relative;
  display: inline-block;
  /* 隐藏 hover 的颜色露出 */
  overflow: hidden;
  box-sizing: border-box;
}
/* 单个帖子 hover */
.topic:hover {
  box-shadow: @shadow;
  /* 放大、旋转 */
  transform: scale(1.2 rotate(1deg));
  transition: 0.2s;
  z-index: 7;
}
/* 帖子边的光效 */
.topic:hover > span {
  position: absolute;
  display: block;
  z-index: 7;
}
.topic:hover > span:nth-child(1) {
  filter: hue-rotate(0deg);
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, @kungalgame-blue-4);
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.topic:hover > span:nth-child(2) {
  filter: hue-rotate(60deg);
  top: -100%;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, @kungalgame-blue-4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.topic:hover > span:nth-child(3) {
  filter: hue-rotate(120deg);
  bottom: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(270deg, transparent, @kungalgame-blue-4);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
    height: 3px;
  }
  50%,
  100% {
    height: 2px;
    right: 100%;
  }
}
.topic:hover > span:nth-child(4) {
  filter: hue-rotate(300deg);
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, @kungalgame-blue-4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
/* 帖子标题 */
.topic-title {
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 帖子内容预览 */
.topic-content {
  font-size: 13px;
  max-height: 200px;
  /* 超过 11 行显示省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 11;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
/* 帖子的状态 */
.topic-status {
  height: 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 相对于帖子绝对定位 */
  position: absolute;
  bottom: 0;
}
/* 图标字体距离数字的距离 */
.topic-status > div > i {
  margin-right: 5px;
}
/* 帖子的标签 */
.topic-tags {
  /* 占满单个帖子区域 */
  width: 100%;
  font-size: 12px;
  padding: 7px;
  position: absolute;
  top: 0;
  right: 0;
  /* 竖直分布 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: @kungalgame-trans-white-9;
  /* 起初看不见文字 */
  opacity: 0;
  cursor: pointer;
}
.topic-tags > span {
  display: block;
  margin-bottom: 3px;
}
.topic-tags > span > i {
  color: @kungalgame-red-4;
  margin-right: 5px;
}
/* 单个帖子 hover 时显示帖子标签 */
.topic:hover .topic-tags {
  background-color: @kungalgame-trans-blue-0;
  backdrop-filter: blur(5px);
  /* 放大、旋转回正 */
  transform: scale(1.1 rotate(-1deg));
  /* 完全不透明，可视 */
  opacity: 1;
  transition: 0.2s;
}
/* 切换页数 */
.page-switch {
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 切换按钮 */
.page-switch > button {
  /* 宽高固定 */
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border: 1px solid @kungalgame-blue-4;
  background-color: @kungalgame-trans-blue-0;
}
.page-switch > button:hover {
  background-color: @kungalgame-blue-4;
  color: @kungalgame-white;
}
.page-switch > button:active {
  background-color: @kungalgame-blue-3;
}
/* 上一页和下一页两个按钮更宽 */
.page-switch > button:first-child {
  width: 60px;
}
.page-switch > button:last-child {
  width: 60px;
}
</style>
