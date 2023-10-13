<script setup lang="ts">
// 导入 vue 函数
import { ref } from 'vue'

// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'

// 全局消息组件（顶部）
import Message from '@/components/alert/Message'

import backgroundImages from './background'

import { restoreBackground } from '@/hooks/useBackgroundPicture'

// 使用设置面板的 store
const settingsStore = useKUNGalgameSettingsStore()
const { showKUNGalgameBackground, showKUNGalgameCustomBackground } =
  storeToRefs(settingsStore)

// 更改背景图片
const handelChangeImage = (index: number) => {
  showKUNGalgameBackground.value = index.toString()
}

/* 测试图片: 
  https://s3.bmp.ovh/imgs/2023/05/30/1ee99996d0eb2646.png
  https://s3.bmp.ovh/imgs/2023/05/30/87d94be5e004547a.png
  https://s3.bmp.ovh/imgs/2023/05/30/2a639bd15113b570.png
  https://s3.bmp.ovh/imgs/2023/05/30/b7c73a1643bdc55b.png
  https://s3.bmp.ovh/imgs/2023/05/30/ee67fdadd4104bbd.png
  https://s3.bmp.ovh/imgs/2023/05/30/30aacd3045496498.png
  https://s3.bmp.ovh/imgs/2023/05/30/ab2da01971cc1629.png
  https://s3.bmp.ovh/imgs/2023/05/30/ed196495796482e4.png
  https://s3.bmp.ovh/imgs/2023/05/30/a6dcdae0afe118f0.png
  https://s3.bmp.ovh/imgs/2023/05/30/7aa57120cc6977a1.png
  */

// 自定义背景
const url = ref('')

const handleCustomBackground = () => {
  if (url.value) {
    showKUNGalgameCustomBackground.value = url.value
    showKUNGalgameBackground.value = '1007'
    url.value = ''
  } else {
    Message('Please input valid image url', '请输入合法的图片链接', 'warn')
  }
}
// 恢复空白背景
</script>

<template>
  <div class="kungalgame-background">
    <div class="bg-settings">{{ $tm('header.settings.background') }}</div>
    <ul class="kungalgame-background-container">
      <li>
        <span>{{ $tm('header.settings.preset') }}</span>
        <!-- 预设背景集 -->
        <ul class="kungalgame-restore-bg">
          <li v-for="kun in backgroundImages" :key="kun.index">
            <img
              :src="kun.image"
              :alt="kun.alt"
              @click="handelChangeImage(kun.index)"
            />
          </li>
        </ul>
      </li>

      <!-- 用户自定义背景 -->
      <li>
        <!-- 标题 -->
        <span>{{ $tm('header.settings.custom') }}</span>

        <!-- 输入框 -->
        <div class="kungalgamer-bg">
          <div class="bg-url-input">
            <input
              :placeholder="`${$tm('header.settings.url')}`"
              type="text"
              v-model="url"
              required
            />

            <!-- 确定背景 url -->
            <button @click="handleCustomBackground">
              {{ $tm('header.settings.confirm') }}
            </button>
          </div>
        </div>

        <!-- 重置空白背景 -->
        <button class="restore-bg" @click="restoreBackground">
          {{ $tm('header.settings.restore') }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 背景设置 */
.kungalgame-background-container {
  display: block;
  /* 背景菜单的高度 */
  height: 100%;
  font-size: 15px;
  font-weight: normal;
  color: var(--kungalgame-font-color-3);
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
.kungalgame-restore-bg {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 50px);
  position: relative;
  /* 距离下方区域的距离 */
  margin-bottom: 10px;
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
/* url 的粘话题框 */
.bg-url-input {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  input {
    width: 100%;
    padding-left: 5px;
    height: 25px;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    color: var(--kungalgame-font-color-3);
    /* 粘话题框的 focus */
    &:focus {
      outline: none;
      background-color: var(--kungalgame-trans-blue-0);
    }
  }
  /* 确定按钮 */
  button {
    flex-shrink: 0;
    padding: 0 10px;
    height: 25px;
    width: 70px;
    color: var(--kungalgame-font-color-3);
    border: 1px solid var(--kungalgame-blue-4);
    border-left: none;
    background-color: var(--kungalgame-trans-white-5);
    cursor: pointer;
    /* 确定按钮的 hover */
    &:hover {
      background-color: var(--kungalgame-trans-red-1);
      /* 确定按钮的 active */
      &:active {
        background-color: var(--kungalgame-trans-red-3);
      }
    }
  }
}
.restore-bg {
  font-size: 15px;
  cursor: pointer;
  height: 30px;
  width: 100%;
  margin-top: 10px;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-blue-1);
  transition: all 0.2s;
  &:hover {
    background-color: var(--kungalgame-trans-blue-2);
  }
}
</style>
