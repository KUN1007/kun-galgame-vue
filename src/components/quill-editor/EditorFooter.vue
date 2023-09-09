<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'

// 导入路由
import { useRouter } from 'vue-router'

// 引入图标字体
import { Icon } from '@iconify/vue'

// 异步引入编辑器设置面板
const EditorSettingsMenu = defineAsyncComponent(
  () => import('./EditorSettingsMenu.vue')
)

// 引入 css 动画
import 'animate.css'

// 接受传入的编辑器计数
/**
 * @param {number} - 编辑器文字计数
 * @param {boolean} - 是否显示编辑器设置
 */
defineProps<{
  textCount: number
  isShowSettings: boolean
}>()

const router = useRouter()

// 是否显示编辑器设置面板
const isShowSettingsMenu = ref(false)
// 设置面板被激活后的样式
const settingsPanelActive = ref('')
// 根据鼠标的坐标调整背景色
const x = ref(0)
// 是否显示信息提示
const isShowInfo = ref(false)

// 当鼠标移动时
const onMousemove = (e: MouseEvent) => {
  x.value = e.clientX
}

// 点击设置按钮
const handelClickSettings = () => {
  isShowSettingsMenu.value = !isShowSettingsMenu.value
  if (isShowSettingsMenu.value) {
    settingsPanelActive.value = 'settings-icon-active'
  } else {
    settingsPanelActive.value = ''
  }
}
</script>

<template>
  <div class="footer">
    <!-- 显示设置按钮 -->
    <div class="settings">
      <span
        @click="handelClickSettings"
        class="settings-icon"
        :class="settingsPanelActive"
        v-if="isShowSettings"
      >
        <Icon icon="uiw:setting-o" />
      </span>

      <span class="help" @click="isShowInfo = true">
        <Icon icon="line-md:question-circle" />
      </span>
      <div
        v-if="isShowInfo"
        @mousemove="onMousemove"
        @mouseleave="isShowInfo = false"
        class="info"
        :style="{ backgroundColor: `hsl(${x}, 77%, 77%)` }"
      >
        <ul>
          <li>{{ $tm('edit.help1') }}</li>
          <li>{{ $tm('edit.help2') }}</li>
          <li>{{ $tm('edit.help3') }}</li>
          <li>{{ $tm('edit.help4') }}</li>
          <li>
            {{ $tm('edit.help5') }}
            <span @click="router.push('/contact')">
              {{ $tm('edit.contact') }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 文字计数 -->
    <span class="count">{{ textCount + ` ${$tm('edit.word')}` }}</span>

    <!-- 设置面板 -->
    <EditorSettingsMenu :isShowSettingsMenu="isShowSettingsMenu" />
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 10px 17px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.settings {
  color: var(--kungalgame-font-color-1);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .settings-icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .help {
    cursor: pointer;
    margin-left: 20px;
    color: var(--kungalgame-font-color-1);
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info {
    padding: 3px;
    color: var(--kungalgame-font-color-2);
    position: absolute;
    left: 200px;
    transition: 0.3s background-color ease;
    border-radius: 5px;
    margin-bottom: 100px;
    ul {
      display: flex;
      flex-direction: column;
      background-color: var(--kungalgame-white);
      padding: 5px;
      border-radius: 5px;
      li {
        &::before {
          content: '❆ ';
          color: var(--kungalgame-pink-3);
        }
        cursor: default;
        font-size: 15px;
        line-height: 27px;
        span {
          cursor: pointer;
          color: var(--kungalgame-blue-4);
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.count {
  color: var(--kungalgame-font-color-0);
  background-color: var(--kungalgame-trans-white-9);
}

// 激活时使设置按钮保持旋转
.settings-icon-active {
  color: var(--kungalgame-blue-4);
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
</style>
