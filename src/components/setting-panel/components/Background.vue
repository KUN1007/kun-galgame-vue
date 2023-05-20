<script setup lang="ts">
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsPanelStore()
</script>

<template>
  <div class="kungalgame-background">
    <div class="bg-settings">背景设置</div>
    <ul class="kungalgame-background-container">
      <li>
        <span>点击使用我们的预设的背景</span>
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
        <button class="reset-bg">恢复空白背景</button>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
/* 背景设置 */
.kungalgame-background-container {
  display: block;
  /* 背景菜单的高度 */
  height: 100%;
  font-size: 15px;
  font-weight: normal;
  color: @kungalgame-font-color-3;
  /* 背景容器的标题字体 */
  span {
    height: 30px;
    /* 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.bg-settings {
  margin: 10px 0;
}
/* 背景图片略缩图三行三列 grid */
.kungalgame-reset-bg {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 50px);
  position: relative;
  /* 距离下方区域的距离 */
  margin-bottom: 17px;
  /* 单个图片居中 */
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    /* 单个图片的距离 */
    img {
      cursor: pointer;
      width: 70px;
      /* 图片的 hover */
      &:hover {
        transform: scale(3);
        transition: 0.2s;
        z-index: 7;
      }
    }
  }
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
  input {
    width: 100%;
    padding-left: 5px;
    height: 25px;
    border: 1px solid @kungalgame-blue-4;
    background-color: @kungalgame-trans-white-9;
    /* 粘贴框的 focus */
    &:focus {
      outline: none;
      background-color: @kungalgame-trans-blue-0;
    }
  }
  /* 确定按钮 */
  button {
    flex-shrink: 0;
    padding: 0 10px;
    height: 25px;
    box-sizing: border-box;
    border: 1px solid @kungalgame-blue-4;
    border-left: none;
    background-color: @kungalgame-trans-white-5;
    cursor: pointer;
    /* 确定按钮的 hover */
    &:hover {
      background-color: @kungalgame-trans-red-1;
      /* 确定按钮的 active */
      &:active {
        background-color: @kungalgame-trans-red-3;
      }
    }
  }
}
.reset-bg {
  font-size: 15px;
  cursor: pointer;
  height: 30px;
  width: 100%;
  margin-top: 10px;
  border: 1px solid @kungalgame-blue-4;
  background-color: @kungalgame-trans-blue-1;
  &:hover {
    background-color: @kungalgame-trans-blue-2;
  }
}
</style>
