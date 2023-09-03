<!-- 设置面板组件，展示整个论坛的设置面板 -->
<script setup lang="ts">
// 引入图标字体
import { Icon } from '@iconify/vue'
// 引入看板娘组件
import Loli from './components/Loli.vue'
// 导入模式切换组件
import Mode from './components/Mode.vue'
// 导入语言切换组件
import SwitchLanguage from './components/SwitchLanguage.vue'
// 引入背景设置组件
import Background from './components/Background.vue'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameMainPageWidth } = storeToRefs(settingsStore)

const emits = defineEmits(['close'])

/* 恢复所有设置为默认 */
const handleRecover = () => {
  settingsStore.$reset()
}

/* 关闭设置面板 */
const handelCloseSettingsPanel = () => {
  emits('close', false)
}
</script>

<template>
  <!-- 根元素 -->
  <div class="root">
    <div class="container">
      <div class="title">
        <span>{{ $tm('header.settings.name') }}</span>
        <span><Icon class="settings-icon" icon="uiw:setting-o" /></span>
      </div>

      <!-- 模式切换组件 -->
      <Mode />

      <!-- 语言切换组件 -->
      <SwitchLanguage />

      <div>
        <!-- 设置主页的宽度 -->
        <div class="width-container">
          <span>{{ $tm('header.settings.width') }}</span>
          <span>{{ showKUNGalgameMainPageWidth }}%</span>
        </div>
        <div class="page-width">
          <span>50%</span
          ><input
            class="main"
            min="50"
            max="90"
            step="0.1"
            type="range"
            v-model="showKUNGalgameMainPageWidth"
          /><span>90%</span>
        </div>
      </div>

      <!-- 背景设置组件 -->
      <Background />

      <div>
        <button class="reset" @click="handleRecover">
          {{ $tm('header.settings.recover') }}
        </button>
      </div>
    </div>

    <!-- 看板娘组件 -->
    <Loli class="loli" />

    <!-- 关闭面板 -->
    <div class="close">
      <!-- showKUNGalgamePanel 存在于 settings 里,false 为关闭设置面板 -->
      <Icon @click="handelCloseSettingsPanel" icon="line-md:close" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 根容器 */
.root {
  top: 65px;
  right: 0;
  position: absolute;
  background-color: var(--kungalgame-trans-white-5);
  backdrop-filter: blur(5px);
  box-shadow: var(--shadow);
  border-radius: 10px;
  display: flex;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
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
  span {
    display: flex;
    align-items: center;
  }
}
// 使设置按钮保持旋转
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

.width-container {
  display: flex;
  justify-content: space-between;
}
.reset {
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-red-1);
  width: 100%;
  height: 30px;
  &:hover {
    background-color: var(--kungalgame-red-3);
    color: var(--kungalgame-white);
  }
}
.close {
  font-size: 25px;
  width: 270px;
  display: flex;
  justify-content: end;
  margin: 20px;
  cursor: pointer;
}
@media (max-width: 1000px) {
  .root {
    display: none;
  }
}
@media (max-height: 600px) {
  .root {
    right: -600px;
    transition: 0.5s;
  }
}
</style>
