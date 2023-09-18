<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

// 引入 css 动画
import 'animate.css'

// 导入编辑话题的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入回复的 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 导入关键词显示切换按钮
import SwitchButton from './SwitchButton.vue'

// 话题编辑界面 store
const { editorHeight, mode } = storeToRefs(useKUNGalgameEditStore())
// 话题界面的 store，用于回复
const { replyDraft } = storeToRefs(useKUNGalgameTopicStore())

defineProps<{
  isShowSettingsMenu: boolean
}>()

// 当前的路由
const route = useRoute()
// 当前页面路由的名字
const routeName = computed(() => route.name as string)

// 编辑器的模式
const editorMode = computed(() =>
  routeName.value === 'Edit' ? mode.value : replyDraft.value.mode
)

// 是否显示刷新页面
const isRefreshPage = ref(false)

// 点击高级选项时提醒用户刷新页面
watch(
  () => [replyDraft.value.mode, mode.value],
  () => {
    isRefreshPage.value = true
  }
)

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
        <span> {{ $tm('edit.editorHeight') }} </span>
        <span>{{ editorHeight }} px</span>
      </div>

      <!-- 编辑界面 -->
      <div v-if="routeName === 'Edit'" class="editor-height">
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

      <!-- 回复面板 -->
      <div v-if="routeName === 'Topic'" class="editor-height">
        <span>100 px</span>
        <input
          type="range"
          min="100"
          max="500"
          step="1"
          v-model="replyDraft.editorHeight"
        />
        <span>500 px</span>
      </div>

      <!-- 是否显示编辑器高级选项 -->
      <div class="editor-advance">
        <div class="editor-advance-title">
          <Transition mode="out-in" name="slide-up">
            <span v-if="!isRefreshPage"> {{ $tm('edit.editorMode') }} </span>
            <span
              @click="handleRefreshPage"
              class="refresh"
              v-else-if="isRefreshPage"
            >
              {{ $tm('edit.refresh') }}
            </span>
          </Transition>
        </div>

        <!-- 切换按钮 -->
        <select class="select" v-model="editorMode">
          <option value="minimal">{{ $tm('edit.minimal') }}</option>
          <option value="">{{ $tm('edit.default') }}</option>
          <option value="essential">{{ $tm('edit.essential') }}</option>
          <option value="full">{{ $tm('edit.full') }}</option>
        </select>
      </div>

      <!-- 是否显示热门关键词 -->
      <div class="keywords">
        <div class="keywords-title">{{ $tm('edit.tagsHint') }}</div>
        <SwitchButton />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.settings-menu {
  width: 277px;
  padding: 10px;
  z-index: 1009;
  position: absolute;
  margin-bottom: 190px;
  background-color: var(--kungalgame-white);
  border: 1px solid var(--kungalgame-blue-1);
  box-shadow: var(--shadow);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .editor-height-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 17px;
  }

  .editor-advance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 17px;
  }
}

.editor-height {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.editor-advance-title {
  display: flex;
  flex-direction: column;
  .refresh {
    display: flex;
    align-items: center;
    font-size: 17px;
    cursor: pointer;
    color: var(--kungalgame-blue-4);
    &:hover {
      text-decoration: underline;
    }
  }
}

// 编辑器模式的选择框
.select {
  width: 100px;
  font-size: 16px;
  margin-left: 20px;
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-white-9);
  option {
    background-color: var(--kungalgame-white);
  }
}

// 是否显示热门关键词
.keywords {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
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
