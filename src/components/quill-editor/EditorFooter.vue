<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
// 导入路由
import { useRoute } from 'vue-router'

// 引入图标字体
import { Icon } from '@iconify/vue'

// 异步引入编辑器设置面板
const EditorSettingsMenu = defineAsyncComponent(
  () => import('./EditorSettingsMenu.vue')
)
// 引入 css 动画
import 'animate.css'

// 导入编辑话题的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 话题编辑界面 store
const { textCount } = storeToRefs(useKUNGalgameEditStore())
// 话题界面的 store，用于回复和调整回复面板宽度
const { replyDraft, replyPanelWidth } = storeToRefs(useKUNGalgameTopicStore())

// 当前的路由
const route = useRoute()
// 当前页面路由的名字
const routeName = computed(() => route.name as string)

const textCountNumber = computed(() =>
  routeName.value === 'Edit' ? textCount.value : replyDraft.value.textCount
)

// 是否显示编辑器设置面板
const isShowSettingsMenu = ref(false)
// 设置面板被激活后的样式
const settingsPanelActive = ref('')

// 点击设置按钮
const handelClickSettings = () => {
  isShowSettingsMenu.value = !isShowSettingsMenu.value
  if (isShowSettingsMenu.value) {
    settingsPanelActive.value = 'settings-icon-active'
  } else {
    settingsPanelActive.value = ''
  }
}

// 关闭面板 emits
const handelCloseSettingsMenu = () => {
  isShowSettingsMenu.value = false
  settingsPanelActive.value = ''
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
      >
        <Icon icon="uiw:setting-o" />
      </span>

      <!-- 帮助插槽 -->
      <slot name="help" />
      <input
        v-if="routeName === 'Topic'"
        class="panel-width"
        type="range"
        min="50"
        max="100"
        step="1"
        v-model="replyPanelWidth"
      />
    </div>

    <!-- 文字计数 -->
    <span class="count">{{ textCountNumber + ` ${$tm('edit.word')}` }}</span>

    <!-- 设置面板 -->
    <EditorSettingsMenu
      @close="handelCloseSettingsMenu"
      :isShowSettingsMenu="isShowSettingsMenu"
    />
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
  .panel-width {
    margin-left: 20px;
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
