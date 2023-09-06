<script setup lang="ts">
import { ref, watch } from 'vue'
// 引入图标字体
import { Icon } from '@iconify/vue'
// 导入模式切换按钮
import SwitchButton from './SwitchButton.vue'

// 引入 css 动画
import 'animate.css'

// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

// 使用编辑界面的 store
const settingsStore = useKUNGalgameEditStore()
const { mode } = storeToRefs(settingsStore)

const { editorHeight } = storeToRefs(useKUNGalgameEditStore())

defineProps<{
  isShowSettingsMenu: boolean
}>()

// 是否显示刷新页面
const isRefreshPage = ref(false)

// 点击高级选项时提醒用户刷新页面

const handleRefreshPage = () => location.reload()
</script>

<template>
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
        <div class="editor-advance">
          <Transition mode="out-in" name="slide-up">
            <span v-if="!isRefreshPage"> 编辑器模式 </span>
            <span
              @click="handleRefreshPage"
              class="refresh"
              v-else-if="isRefreshPage"
            >
              <span>刷新页面生效</span>
              <Icon icon="line-md:rotate-270" />
            </span>
          </Transition>
        </div>
        <!-- 切换按钮 -->
        <SwitchButton />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.settings-menu {
  padding: 10px;
  z-index: 1009;
  position: absolute;
  top: 470px;
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
}

.editor-height {
  margin-bottom: 20px;
}

.editor-advance {
  display: flex;
  flex-direction: column;
  .refresh {
    display: flex;
    align-items: center;
    font-size: 23px;
    cursor: pointer;
    &:hover {
      color: var(--kungalgame-blue-4);
    }
    span {
      margin-right: 10px;
      font-size: 17px;
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
