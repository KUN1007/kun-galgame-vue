<script setup lang="ts">
import { Icon } from '@iconify/vue'
/* 导入 loli 数据 */
import {
  loliBodyLeft,
  loliBodyTop,
  loliEyeLeft,
  loliEyeTop,
  loliBrowLeft,
  loliBrowTop,
  loliMouthLeft,
  loliMouthTop,
  loliFaceLeft,
  loliFaceTop,
  lass,
  eye,
  brow,
  mouth,
  face,
} from '@/utils/loli'
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">设置面板</div>
      <div class="mode">
        <span>模式切换</span>
        <div class="mode-container">
          <li>
            <Icon
              class="sun"
              icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
            />
          </li>
          <li>
            <Icon
              class="moon"
              icon="line-md:sunny-outline-to-moon-loop-transition"
            />
          </li>
        </div>
      </div>
      <div>
        <span>主页页面宽度设置</span>
        <div class="page-width">
          <span>61.8%</span><input class="main" type="range" /><span>90%</span>
        </div>
      </div>

      <div class="kungalgame-background">
        背景设置
        <ul class="kungalgame-background-container">
          <li>
            <span>使用我们的预设的背景</span>
            <!-- 预设背景集 -->
            <ul class="kungalgame-reset-bg">
              <li><img src="@/assets/images/bg/bg1-m.png" /></li>
              <li><img src="@/assets/images/bg/bg2-m.png" /></li>
              <li><img src="@/assets/images/bg/bg3-m.png" /></li>
              <li><img src="@/assets/images/bg/bg4-m.png" /></li>
              <li><img src="@/assets/images/bg/bg5-m.png" /></li>
              <li><img src="@/assets/images/bg/bg6-m.png" /></li>
              <li><img src="@/assets/images/bg/bg7-m.png" /></li>
              <li><img src="@/assets/images/bg/bg8-m.png" /></li>
              <li><img src="@/assets/images/bg/bg9-m.png" /></li>
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
      <div class="fix-loli">是否固定看板娘</div>
      <div class="reset">恢复默认设置</div>
    </div>
    <!-- 看板娘 -->
    <div class="loli">
      <!-- 身体 -->
      <img class="lass" :src="lass" alt="ren" />
      <img class="eye" :src="eye" alt="ren" />
      <img class="brow" :src="brow" alt="ren" />
      <img class="mouth" :src="mouth" alt="ren" />
      <img class="face" :src="face" alt="ren" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  width: 300px;
  height: 1100px;
  top: 65px;
  right: 0;
  position: absolute;
  background-color: @kungalgame-trans-white-5;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  z-index: 1007;
}
.container {
  margin: 10px;
  font-size: 17px;
  & > div {
    margin: 10px 0;
  }
}
.title {
  font-size: 23px;
}
.mode {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mode-container {
  font-size: 25px;
  width: 60%;
  display: flex;
  justify-content: space-around;
  li:nth-child(1) {
    color: @kungalgame-red-4;
  }
  li:nth-child(2) {
    color: @kungalgame-blue-4;
  }
}
.page-width {
  font-size: 15px;
  display: flex;
}
.main {
  width: 100%;
}
/* 背景设置 */
.kungalgame-background-container {
  display: block;
  /* 背景菜单的高度 */
  height: 300px;
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
.loli {
  height: 100%;
  margin: auto;
  position: relative;
  left: -148px;
}
.lass {
  position: absolute;
  left: v-bind(loliBodyLeft);
  top: v-bind(loliBodyTop);
}
.eye {
  position: absolute;
  left: v-bind(loliEyeLeft);
  top: v-bind(loliEyeTop);
}
.brow {
  position: absolute;
  left: v-bind(loliBrowLeft);
  top: v-bind(loliBrowTop);
}
.mouth {
  position: absolute;
  left: v-bind(loliMouthLeft);
  top: v-bind(loliMouthTop);
}
.face {
  position: absolute;
  left: v-bind(loliFaceLeft);
  top: v-bind(loliFaceTop);
}
@media (max-height: 1100px) {
  .loli {
    display: none;
  }
  .root {
    height: 400px;
  }
}
</style>
