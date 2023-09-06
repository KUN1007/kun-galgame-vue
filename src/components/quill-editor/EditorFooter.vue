<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
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

// 是否显示编辑器设置面板
const isShowSettingsMenu = ref(false)

// 点击设置按钮
const handelClickSettings = () => {
  isShowSettingsMenu.value = !isShowSettingsMenu.value
}
</script>

<template>
  <div class="footer">
    <!-- 显示设置按钮 -->
    <div class="settings">
      <span
        @click="handelClickSettings"
        class="settings-icon"
        v-if="isShowSettings"
      >
        <Icon icon="uiw:setting-o" />
      </span>

      <span class="help">
        <Icon icon="line-md:question-circle" />
      </span>
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
  .settings-icon {
    cursor: pointer;
  }
  .help {
    margin-left: 20px;
    color: var(--kungalgame-font-color-1);
    font-size: 23px;
  }
}

.count {
  color: var(--kungalgame-font-color-0);
  background-color: var(--kungalgame-trans-white-9);
}
</style>
