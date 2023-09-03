<script setup lang="ts">
import { ref } from 'vue'
// 引入图标字体
import { Icon } from '@iconify/vue'
// 导入模式切换按钮
import SwitchButton from './SwitchButton.vue'

// 引入 css 动画
import 'animate.css'

// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

const { editorHeight } = storeToRefs(useKUNGalgameEditStore())

defineProps<{
  textCount: number
}>()

// 是否显示编辑器设置面板
const isShowSettingsMenu = ref(true)

// 点击设置按钮
const handelClickSettings = () => {
  isShowSettingsMenu.value = !isShowSettingsMenu.value
}
</script>

<template>
  <div class="footer">
    <!-- 显示设置按钮 -->
    <div class="settings">
      <span @click="handelClickSettings" class="settings-icon">
        <Icon icon="uiw:setting-o" />
      </span>

      <span class="help">
        <Icon icon="line-md:question-circle" />
      </span>
    </div>

    <!-- 文字计数 -->
    <span class="count">{{ textCount + ` ${$tm('edit.word')}` }}</span>

    <Transition
      enter-active-class="animate__animated animate__jackInTheBox animate__faster"
      leave-active-class="animate__animated animate__rollOut animate__faster"
    >
      <!-- 设置菜单 -->
      <div v-if="isShowSettingsMenu" class="settings-menu">
        <!-- 编辑器高度设置 -->
        <div class="editor-height-title">
          <span> 编辑器高度 </span>
          <span>{{ editorHeight }} px</span>
        </div>
        <div class="editor-height">
          <span>300 px</span>
          <input
            type="range"
            min="300"
            max="500"
            step="1"
            v-model="editorHeight"
          />
          <span>500 px</span>
        </div>

        <!-- 是否显示编辑器高级选项 -->
        <div class="editor-advance-title">
          <span> 高级选项 </span>
          <!-- 切换按钮 -->
          <SwitchButton />
        </div>
      </div>
    </Transition>
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

.settings-menu {
  padding: 10px;
  z-index: 1009;
  position: absolute;
  bottom: 50px;
  background-color: var(--kungalgame-white);
  border: 1px solid var(--kungalgame-blue-1);
  box-shadow: var(--shadow);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .editor-height-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 17px;
  }

  .editor-advance-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 17px;
  }

  .editor-height {
    margin-bottom: 20px;
  }
}

.count {
  color: var(--kungalgame-font-color-0);
  background-color: var(--kungalgame-trans-white-9);
}
</style>
