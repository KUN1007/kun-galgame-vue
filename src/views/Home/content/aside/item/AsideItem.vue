<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 侧边栏交互 -->
  <div class="nav-aside">
    <!-- fa 箭头图标字体 -->
    <Icon icon="line-md:arrow-left" />
    折叠左侧区域
  </div>
  <!-- 侧边栏功能区 -->
  <div class="item-box">
    <!-- 发布新文章 -->
    <div class="new-article">
      <!-- 发布新文章的按钮 -->
      <button class="btn-new-article">发布帖子</button>
    </div>
    <!-- 功能盒子容器 -->
    <div class="item-box-container">
      <!-- 模式切换容器 -->
      <div class="kungalgame-model-container">
        模式切换
        <ul class="kungalgame-model">
          <li>
            <Icon
              class="sun"
              icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
            />白天
          </li>
          <li>
            <Icon
              class="moon"
              icon="line-md:sunny-outline-to-moon-loop-transition"
            />黑夜
          </li>
        </ul>
      </div>
      <div>其它游戏</div>
      <div>排行榜</div>
      <!-- 背景容器 -->
      <div class="kungalgame-background">
        背景设置
        <ul class="kungalgame-background-container">
          <li>
            <span>使用我们的预设的背景</span>
            <!-- 预设背景集 -->
            <ul class="kungalgame-reset-bg">
              <li><img src="../../../../../assets/images/bg/bg1-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg2-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg3-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg4-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg5-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg6-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg7-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg8-m.png" /></li>
              <li><img src="../../../../../assets/images/bg/bg9-m.png" /></li>
            </ul>
          </li>
          <!-- 用户自定义背景 -->
          <li>
            <span>自定义背景</span>
            <div class="kungalgamer-bg">
              <span>请在这里粘贴图片url</span>
              <div class="bg-url-input">
                <input type="text" required />
                <button>确定</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>加入我们</div>
      <div>帖子池</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 侧边栏交互 */
.nav-aside {
  width: 100%;
  height: 1px;
  /* 折叠区相当于侧边栏的占比 */
  flex-grow: 1;
  /* 内容居中（折叠左侧区域） */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* 字体设置 */
  font-size: small;
  color: @kungalgame-font-color-3;
  /* 页面缩小到最小时不换行 */
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
/* 侧边栏功能区 */
.item-box {
  width: 100%;
  height: 1px;
  /* 功能区相对于侧边栏的占比 */
  flex-grow: 6;
  /* 设置六个功能（模式、排行、背景等）分布的弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 发布帖子 */
.new-article {
  width: 100%;
  /* 发布帖子的按钮相对于功能区盒子的占比 */
  flex-grow: 2;
}
/* 发布按钮样式 */
.new-article button {
  height: 100%;
  width: 100%;
  background-color: @kungalgame-red-0;
  border: 1px solid @kungalgame-red-3;
  border-radius: 5px;
  cursor: pointer;
  color: @kungalgame-red-3;
  font-weight: bold;
  font-size: larger;
  /* 页面缩小到最小时不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 发布按钮 hover 效果 */
.new-article button:hover {
  font-size: xx-large;
  background-color: @kungalgame-red-3;
  color: @kungalgame-red-0;
  /* 效果过渡时长 */
  transition: 0.3s;
}
/* 功能区容器 */
/* 功能区容器 */
.item-box-container {
  /* 两行三列 grid 布局 */
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 40px);
  font-size: 14px;
  /* 字体颜色 */
  color: @kungalgame-font-color-3;
  /* 相对定位 */
  position: relative;
}
/* 六个功能之间的距离 */
.item-box-container > div {
  /* 设置六个功能（模式、排行、背景等）之间的间距 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: @kungalgame-font-color-2;
}
/* 模式切换 */
.kungalgame-model {
  position: absolute;
  top: 50%;
  /* 模式切换的高度 */
  height: 77px;
  width: 80px;
  display: none;
  flex-direction: column;
  background-color: @kungalgame-blue-0;
  z-index: 7;
}
/* hover 时菜单出现 */
.kungalgame-model-container:hover .kungalgame-model {
  display: flex;
}
/* 白天/黑夜设置居中 */
.kungalgame-model li {
  height: 1px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 图标字体距离文字的位置 */
.sun {
  margin-right: 5px;
  font-size: x-large;
  color: @kungalgame-red-4;
}
.moon {
  margin-right: 5px;
  font-size: x-large;
  color: @kungalgame-blue-4;
}
/* 每一个模式切换的 hover */
.kungalgame-model li:hover {
  background-color: @kungalgame-red-1;
}
/* 设置六个功能（模式、排行、背景等）的 hover */
.item-box-container > div:hover {
  color: @kungalgame-font-color-3;
  background-color: @kungalgame-blue-0;
  cursor: pointer;
}
/* hover 时展示背景功能板块 */
.kungalgame-background:hover .kungalgame-background-container {
  display: block;
}
/* 背景容器 */
.kungalgame-background-container {
  display: none;
  /* 背景菜单的高度 */
  height: 300px;
  /* 相对于功能区绝对定位 */
  position: absolute;
  top: 100%;
  left: 0%;
  background-color: @kungalgame-blue-0;
  box-shadow: 1px 2px 1px 1px @kungalgame-trans-red-3;
  font-size: 15px;
  font-weight: normal;
  color: @kungalgame-font-color-3;
}
/* 背景容器的标题字体 */
.kungalgame-background-container span {
  height: 30px;
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 背景图片略缩图三行三列 grid */
.kungalgame-reset-bg {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 50px);
  color: @kungalgame-font-color-3;
  position: relative;
  /* 距离下方区域的距离 */
  margin-bottom: 17px;
}
/* 单个图片居中 */
.kungalgame-reset-bg li {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 单个图片的距离 */
.kungalgame-reset-bg img {
  width: 70px;
}
/* 图片的 hover */
.kungalgame-reset-bg img:hover {
  width: 200px;
  transition: 0.2s;
  z-index: 7;
}
.kungalgamer-bg {
  display: flex;
  flex-direction: column;
}
/* url 的粘贴框 */
.bg-url-input {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-url-input input {
  padding-left: 5px;
  height: 25px;
  border: 1px solid @kungalgame-blue-4;
}
/* 粘贴框的 focus */
.bg-url-input input:focus {
  outline: none;
  background-color: @kungalgame-trans-red-0;
}
/* 确定按钮 */
.bg-url-input button {
  padding: 0 10px;
  height: 25px;
  box-sizing: border-box;
  border: 1px solid @kungalgame-blue-4;
  border-left: none;
  background-color: @kungalgame-trans-white-5;
  cursor: pointer;
}
/* 确定按钮的 hover */
.bg-url-input button:hover {
  background-color: @kungalgame-trans-blue-0;
}
/* 确定按钮的 active */
.bg-url-input button:active {
  background-color: @kungalgame-trans-red-3;
}
</style>
