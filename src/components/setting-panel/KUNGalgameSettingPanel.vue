<!-- 设置面板组件，展示整个论坛的设置面板 -->
<script setup lang="ts">
// 引入 vue 函数
import { ref, watch, onMounted } from 'vue'
// 引入图标字体
import { Icon } from '@iconify/vue'
// 引入看板娘组件
import Loli from './components/Loli.vue'
// 引入背景设置组件
import Background from './components/Background.vue'
// 导入设置面板 store
import { useSettingsPanelStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
// 导入 i18n
import { useI18n } from 'vue-i18n'

/*
 * 网站的语言设置
 */
const { locale } = useI18n({ useScope: 'global' })
const selectedLocale = ref(locale.value)

// 监听selectedLocale的变化，并更新Vue I18n的locale
watch(selectedLocale, (newVal) => {
  locale.value = newVal
})

// 在页面加载时从localStorage中读取保存的语言设置
onMounted(() => {
  const savedLocale = localStorage.getItem('KUNGalgame-locale')
  if (savedLocale) {
    selectedLocale.value = savedLocale
  }
})

// 监听语言变化，并将语言设置保存到localStorage
watch(locale, (newVal) => {
  localStorage.setItem('KUNGalgame-locale', newVal)
})

const changeLanguage = () => {
  locale.value = selectedLocale.value
}

/*
 * 设置面板显示切换
 */
// 使用设置面板的 store
const settingsStore = useSettingsPanelStore()
const { showSettings } = storeToRefs(settingsStore)

// 展示设置面板
const handleClose = () => {
  showSettings.value = false
}
</script>

<template>
  <!-- 根元素 -->
  <div class="root">
    <div class="container">
      <div class="title">
        <span>设置面板</span>
        <span><Icon class="settings-icon" icon="uiw:setting-o" /></span>
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
      <div class="set-lang">
        <span>网站语言设置</span>
        <select
          class="select"
          v-model="selectedLocale"
          $change="changeLanguage"
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
      <div>
        <!-- 设置主页的宽度 -->
        <div class="width-container">
          <span>主页页面宽度设置</span>
          <span>61.8%</span>
        </div>
        <div class="page-width">
          <span>61.8%</span><input class="main" type="range" value="0" /><span
            >90%</span
          >
        </div>
      </div>
      <!-- 背景设置组件 -->
      <Background />

      <div><button class="reset">恢复所有设置为默认</button></div>
    </div>

    <!-- 看板娘组件 -->
    <Loli class="loli" />

    <!-- 关闭面板 -->
    <div class="close">
      <Icon $click="handleClose" icon="line-md:close" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 根容器 */
.root {
  top: 65px;
  right: 0;
  position: absolute;
  background-color: $kungalgame-trans-white-5;
  backdrop-filter: blur(5px);
  box-shadow: $shadow;
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
    color: $kungalgame-red-4;
  }
  li:nth-child(2) {
    color: $kungalgame-blue-4;
  }
}
// 语言设置
.set-lang {
  display: flex;
  justify-content: space-between;
}
// 语言的选择框
.select {
  width: 100px;
  font-size: 16px;
  border: 1px solid $kungalgame-blue-4;
  background-color: $kungalgame-trans-white-9;
  option {
    background-color: $kungalgame-trans-white-9;
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
.set-lang {
  margin-bottom: 20px;
}
.width-container {
  display: flex;
  justify-content: space-between;
}
.reset {
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  border: 1px solid $kungalgame-red-4;
  background-color: $kungalgame-trans-red-1;
  width: 100%;
  height: 30px;
  &:hover {
    background-color: $kungalgame-red-3;
    color: $kungalgame-white;
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
