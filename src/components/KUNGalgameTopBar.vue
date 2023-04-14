<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  name: "KUNGalgameTopBar",
  components: {
    Icon,
  },
  setup() {
    let topBarItem: string[] = ["回到主页", "帖子发布", "技术交流", "关于我们"];
    /* 对象式
    
        let topBarItem: object[] = [
      { id: "001", name: "回到主页" },
      { id: "002", name: "帖子发布" },
      { id: "003", name: "技术交流" },
      { id: "004", name: "关于我们" },
    ];
    
    */
    return {
      topBarItem,
    };
  },
};
</script>

<template>
  <div class="header">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="kungal-info">
        <a href="#"><img src="../assets/images/favicon.png" alt="KUNgal" /></a>
        <a href="#"><span>KUNGalgame</span></a>
      </div>
      <div class="top-bar">
        <ul>
          <li v-for="(kun, index) in topBarItem" :key="index">{{ kun }}</li>
          <div class="top-bar-box"></div>
        </ul>
      </div>
    </div>

    <!-- TODO: 顶部全局搜索框 -->
    <!--     <div class="top-search-bar">
      <Icon icon="line-md:search" :rotate="3" />
    </div> -->
    <!-- 用户个人信息 -->
    <div class="kungalgamer-info">
      <a href="#"><img src="../assets/images/KUN.jpg" alt="KUN" /></a>
      <span>KUN</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 网站名字颜色
@kungalgame: #3a3a3a;
// 导航栏的背景色
@kungalgame-header-background: #ffffff80;
// 导航栏的阴影颜色
@kungalgame-header-shadow: #008cff2b;
// 导航栏的文字颜色
@kungalgame-blue: #0969da;
// 导航栏的文字 hover
@kungalgame-nav-hover: #ecf3ff;
// 导航栏的文字块 hover
@kungalgame-hover-blue: #409eff;
@kungalgame-hover-red: #f56c6c;
@kungalgame-hover-yellow: #ffb900;
@kungalgame-hover-green: #67c23a;
// 用户名颜色
@kungalgamer: #171717;

/* 头部样式 */
.header {
  height: 58px;
  /* 头部下方阴影 */
  box-shadow: 0 2px 4px 0 @kungalgame-header-shadow;
  /* 头部背景 */
  backdrop-filter: blur(5px);
  background-color: @kungalgame-header-background;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
}
.nav-top {
  display: flex;
  align-items: center;
}
.kungal-info {
  display: flex;
  align-items: center;
  // 网站 LOGO
  img {
    height: 50px;
    margin-left: 50px;
  }
  // 网站名称
  span {
    margin-left: 20px;
    margin-right: 7px;
    color: @kungalgame;
    font-weight: bold;
  }
}
/* 顶部导航栏 */
.top-bar {
  width: 400px;
  position: relative;
  text-align: center;
  ul {
    display: flex;
    align-items: center;
    right: 5%;
    .top-bar-box {
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc((100% / 4) * 1);
      height: 7px;
      border-radius: 2px;
      transition: 0.5s;
    }
    li {
      width: 100%;
      color: @kungalgame-blue;
      font-weight: bold;
      display: block;
      width: 100%;
      line-height: 58px;
      cursor: pointer;
      &:hover {
        background-color: @kungalgame-nav-hover;
        transition: 0.5s;
        border-radius: 2px;
      }
      &:nth-child(1) {
        &:hover {
          & ~ .top-bar-box {
            left: calc(100% / 4 * 0);
            background-color: @kungalgame-hover-red;
          }
        }
      }
      &:nth-child(2) {
        &:hover {
          & ~ .top-bar-box {
            left: calc(100% / 4 * 1);
            background-color: @kungalgame-hover-yellow;
          }
        }
      }
      &:nth-child(3) {
        &:hover {
          & ~ .top-bar-box {
            left: calc(100% / 4 * 2);
            background-color: @kungalgame-hover-blue;
          }
        }
      }
      &:nth-child(4) {
        &:hover {
          & ~ .top-bar-box {
            left: calc(100% / 4 * 3);
            background-color: @kungalgame-hover-green;
          }
        }
      }
    }
  }
}

/* 顶部搜索框 */
/* 

TODO:

*/

/* 用户个人信息 */
.kungalgamer-info {
  display: flex;
  align-items: center;
  // 用户头像
  img {
    border-radius: 50%;
    height: 40px;
  }
  // 用户名
  span {
    font-weight: bold;
    color: @kungalgamer;
    margin-left: 20px;
  }
}
</style>
