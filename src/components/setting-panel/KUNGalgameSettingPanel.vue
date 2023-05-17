<!-- 设置面板组件，展示整个论坛的设置面板 -->
<script setup lang="ts">
// 引入图标字体
import { Icon } from '@iconify/vue'
// 引入看板娘组件
import Loli from './components/Loli.vue'
// 引入背景设置组件
import Background from './components/Background.vue'
// 导入设置面板 store
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
// 导入看板娘 hook
import { useFixedLoli } from '@/hooks/useFixedLoli'

// 获取 localeStorage 中的看板娘信息

// 使用设置面板的 store
const settingsStore = useSettingsPanelStore()

// 使用全局固定看板娘的 hook
const {
  kungalgameLoliStatus,
  kungalgameLoliPositionX,
  kungalgameLoliPositionY,
  setLoli,
  setLoliX,
  setLoliY,
  initLoli,
} = useFixedLoli()

// 初始化看板娘
initLoli()

let { showSettings } = storeToRefs(settingsStore)
const handleClose = () => {
  showSettings.value = false
}

let checked = kungalgameLoliStatus.value === 'true'

// 用户点击固定看板娘
const handleClick = () => {
  if (!checked) {
    setLoli('true')
  } else {
    setLoli('false')
  }
}
// 看板娘的位置数据
let loliPositionX = parseFloat(kungalgameLoliPositionX.value)
let loliPositionY = parseFloat(kungalgameLoliPositionY.value)

// 看板娘的位置样式
const loliPosition = {
  left: `${loliPositionX}px`,
  top: `${loliPositionY}px`,
}
</script>

<template>
  <!-- 根元素 -->
  <div class="root">
    <div class="container">
      <div class="title">
        <span>设置面板</span><Icon class="settings-icon" icon="uiw:setting-o" />
      </div>
      <div class="mode">
        <!-- 白天 / 黑夜模式切换 -->
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
        <!-- 设置主页的宽度 -->
        <span>主页页面宽度设置</span>
        <div class="page-width">
          <span>61.8%</span><input class="main" type="range" value="0" /><span
            >90%</span
          >
        </div>
      </div>
      <!-- 背景设置组件 -->
      <Background />
      <div class="fix-loli">
        <!-- 处理固定看板娘按钮点击事件，点击切换是否固定看板娘 -->
        <span>是否固定看板娘</span>
        <input
          class="switch-input"
          type="checkbox"
          id="switch"
          v-model="checked"
        /><label class="switch-label" @click="handleClick" for="switch"></label>
      </div>
      <div><button class="reset">恢复所有设置为默认</button></div>
    </div>
    <!-- 看板娘组件 -->
    <!-- 此处使用 Teleport，如果固定看板娘，则将看板娘传送到根组件，传送的状态使用全局 store 中的 showFixedLoli -->
    <Teleport to="body" :disabled="kungalgameLoliStatus === 'false'">
      <Loli class="loli" :style="loliPosition" @get-position="getPosition" />
    </Teleport>
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
  position: absolute;
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
.switch-input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.switch-label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 27px;
  background: @kungalgame-trans-blue-2;
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 23px;
    height: 23px;
    background: @kungalgame-white;
    border-radius: 15px;
    transition: 0.3s;
  }
}

.switch-input:checked + .switch-label {
  background: @kungalgame-blue-4;
}

.switch-input:checked + .switch-label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
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
