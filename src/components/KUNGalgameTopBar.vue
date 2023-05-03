<script setup lang="ts">
import { type Ref, ref, handleError } from 'vue'
import 'animate.css'
interface topBar {
  name:string,
  router:string
}
const topBarItem: string[] = [
  '所有帖子',
  '发布帖子',
  '技术交流',
  '关于我们',
  '返回主页',
]
// 初始不展示用户头像点击信息
const isShowInfo = ref(false)

// 初始进入页面 header 没有附加样式
let topicStyle = {}

// 接受父组件的传值
let props = defineProps(['isMainPage', 'isTopicPage'])

const isMain = props.isMainPage
const isTopicPage = props.isTopicPage
// 如果是主页的话删除 “返回主页” 项目
if (isMain) {
  topBarItem.pop()
}
// 如果是帖子页的话定位为 sticky，距离底部 10px
if (isTopicPage) {
  topicStyle = {
    top: 0,
    position: 'sticky',
    /* 设置可视区域内容不覆盖顶部 shadow */
    'margin-bottom': '10px',
  }
}

// 根据导航条的项目个数操作 css 中导航条的宽度
let navItemNum = topBarItem.length
const navItemNumString = navItemNum + '00px'

// 用户点击头像时的操作
</script>

<template>
  <div class="header" :style="topicStyle">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="kungal-info">
        <!-- 网站的名字和网站图标 -->
        <img src="../assets/images/favicon.png" alt="KUNgal" />
        <span>KUNGalgame</span>
      </div>
      <div class="top-bar">
        <ul>
          <!-- 顶部单个板块 -->
          <li v-for="(kun, index) in topBarItem" :key="index">{{ kun }}</li>
          <!-- 顶部板块下部的 hover 效果 -->
          <div class="top-bar-box"></div>
        </ul>
      </div>
    </div>
    <div class="kungalgamer-info">
      <img
        src="../assets/images/KUN.jpg"
        alt="KUN"
        @click="isShowInfo = !isShowInfo"
      />
      <div class="triangle" v-if="isShowInfo"></div>
      <div class="kungalgamer" v-if="isShowInfo">
        <div>用户主页</div>
        <div>更改头像</div>
      </div>
      <span>KUN</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 头部样式 */
.header {
  /* 头部高度 */
  height: 58px;
  /* 头部下方阴影 */
  box-shadow: 0 2px 4px 0 @kungalgame-trans-blue-1;
  /* 头部背景 */
  backdrop-filter: blur(5px);
  background-color: @kungalgame-trans-white-5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1007;
}
.nav-top {
  display: flex;
  align-items: center;
}
.kungal-info {
  display: flex;
  align-items: center;
  img {
    height: 50px;
    margin-left: 50px;
    cursor: pointer;
  }
  span {
    margin-left: 20px;
    margin-right: 7px;
    color: @kungalgame-font-color-3;
    font-weight: bold;
    cursor: pointer;
  }
}

// 顶部交互栏
@navNumber: v-bind(navItemNum);

.top-bar {
  position: relative;
  text-align: center;
  width: v-bind(navItemNumString);
  ul {
    align-items: center;
    display: flex;
    right: 5%;
    .top-bar-box {
      border-radius: 2px;
      bottom: 0;
      height: 7px;
      left: 0;
      position: absolute;
      transition: 0.5s;
      width: calc(100% / @navNumber);
    }
    li {
      color: @kungalgame-blue-5;
      cursor: pointer;
      display: block;
      font-weight: bold;
      line-height: 58px;
      width: 100%;
      &:hover {
        background-color: @kungalgame-blue-0;
        border-radius: 2px;
        transition: 0.5s;
      }
      &:nth-child(1):hover ~ .top-bar-box {
        background-color: @kungalgame-red-3;
        left: calc(100% / @navNumber * 0);
      }

      &:nth-child(2):hover ~ .top-bar-box {
        background-color: @kungalgame-yellow-3;
        left: calc(100% / @navNumber * 1);
      }

      &:nth-child(3):hover ~ .top-bar-box {
        background-color: @kungalgame-blue-3;
        left: calc(100% / @navNumber * 2);
      }

      &:nth-child(4):hover ~ .top-bar-box {
        background-color: @kungalgame-green-3;
        left: calc(100% / @navNumber * 3);
      }
      &:nth-child(5):hover ~ .top-bar-box {
        background-color: @kungalgame-purple-3;
        left: calc(100% / @navNumber * 4);
      }
    }
  }
}

/* 用户个人信息 */

.kungalgamer-info {
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    position: relative;
  }
  > span {
    color: @kungalgame-font-color-2;
    margin-left: 30px;
    padding-right: 50px;
  }
}
.triangle {
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: @kungalgame-trans-white-2;
  top: 50px;
  right: 126px;
}
.kungalgamer {
  top: 70px;
  right: 96px;
  position: absolute;
  background-color: @kungalgame-trans-white-2;
  box-shadow: @shadow;
  div {
    cursor: pointer;
    padding: 7px;
    &:hover {
      background-color: @kungalgame-trans-red-3;
    }
  }
}
</style>
