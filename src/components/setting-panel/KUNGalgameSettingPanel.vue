<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Loli from './components/Loli.vue'
import Background from './components/Background.vue'
import SwitchButton from './components/SwitchButton.vue'
// 导入设置面板 store
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsPanelStore()
let { showSettings, showFixedLoli } = storeToRefs(settingsStore)
const handleClose = () => {
  showSettings.value = false
}
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">
        <span>设置面板</span><Icon class="settings-icon" icon="uiw:setting-o" />
      </div>
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
          <span>61.8%</span><input class="main" type="range" value="0" /><span
            >90%</span
          >
        </div>
      </div>
      <!-- 背景设置组件 -->
      <Background />
      <div class="fix-loli"><span>是否固定看板娘</span><SwitchButton /></div>
      <div><button class="reset">恢复所有设置为默认</button></div>
    </div>
    <!-- 看板娘组件 -->
    <Loli class="loli" />
    <!-- 关闭面板 -->
    <div class="close"><Icon @click="handleClose" icon="line-md:close" /></div>
  </div>
</template>

<style lang="less" scoped>
/* 根容器 */
.root {
  width: 600px;
  top: 65px;
  right: 0;
  position: fixed;
  background-color: @kungalgame-trans-white-5;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  z-index: 1007;
  display: flex;
}
.container {
  position: relative;
  margin: 20px;
  font-size: 17px;
}
.title {
  font-size: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settings-icon {
  animation: settings 3s linear infinite;
}
@keyframes settings {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.mode {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mode-container {
  font-size: 25px;
  width: 60%;
  display: flex;
  justify-content: space-around;
  li {
    cursor: pointer;
  }
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
  span {
    margin-top: 15px;
  }
}
/* 主页页面宽度滑动条 */
.main {
  width: 100%;
  height: 10px;
  margin: 20px 0;
}
/* 固定看板娘 */
.fix-loli {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.reset {
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  border: 1px solid @kungalgame-red-4;
  background-color: @kungalgame-trans-red-1;
  width: 100%;
  height: 30px;
  &:hover {
    background-color: @kungalgame-red-3;
    color: @kungalgame-white;
  }
}
.close {
  font-size: 25px;
  width: 100%;
  display: flex;
  justify-content: end;
  margin: 20px;
  cursor: pointer;
}
@media (max-width: 700px) {
  .loli {
    display: none;
  }
  .root {
    width: 300px;
    transition: 0.3s;
  }
}
@media (max-height: 600px) {
  .root {
    right: -600px;
    transition: 0.5s;
  }
}
</style>
