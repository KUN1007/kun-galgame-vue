<script setup lang="ts">
// 导入图标
import { Icon } from '@iconify/vue'

// 导入动画
import 'animate.css'

// 导入 Vue 异步函数
import { computed, defineAsyncComponent } from 'vue'

// 导入编辑器
const QuillEditor = defineAsyncComponent(
  () => import('@/components/quill-editor/QuillEditor.vue')
)

// 异步导入话题标签
const Tags = defineAsyncComponent(
  () => import('@/views/edit/components/Tags.vue')
)

// 导入回复按钮
import ReplyPanelBtn from './ReplyPanelBtn.vue'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 使用话题页面的 store
const { isShowAdvance, isEdit, replyDraft, replyPanelWidth } = storeToRefs(
  useKUNGalgameTopicStore()
)

const position = computed(() => {
  return replyDraft.value.to_floor === 0 ? 'master' : 'reply'
})

const panelWidth = computed(() => `${replyPanelWidth.value}%`)

const handelClosePanel = () => {
  isShowAdvance.value = false
  isEdit.value = false
}
</script>

<template>
  <Teleport to="body" :disabled="isEdit">
    <Transition
      enter-active-class="animate__animated animate__bounceInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown animate__faster"
    >
      <div class="root" v-if="isEdit">
        <div class="container" :style="`width: ${panelWidth}`">
          <!-- 回复面板回复给谁 -->
          <div class="title">
            <h3>
              <span>{{ $tm('topic.panel.to') + ' @' }}</span>
              <span>{{ replyDraft.replyUserName }}</span>
              <span>
                <span class="emoji">(⋈◍＞◡＜◍)。✧♡ </span>
                {{ `${$tm(`topic.panel.${position}`)} ${replyDraft.to_floor}` }}
              </span>
            </h3>
            <Icon
              @click="handelClosePanel"
              class="close"
              icon="line-md:close"
            />
          </div>
          <!-- 回复的编辑器 -->
          <div class="content">
            <QuillEditor
              :is-show-toolbar="isShowAdvance"
              :is-show-title="false"
            />
          </div>
          <!-- 回复的页脚 -->
          <div class="footer">
            <Tags
              style="margin-top: 10px; padding: 10px"
              v-if="isShowAdvance"
            />
            <ReplyPanelBtn />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.close {
  font-size: 30px;
  cursor: pointer;
  color: var(--kungalgame-font-color-1);
}
.root {
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.92;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}
.container {
  transition: all 0.2s;
  max-width: 1000px;
  max-height: 77vh;
  overflow-y: scroll;
  color: var(--kungalgame-font-color-3);
  background-color: var(--kungalgame-white);
  border-radius: 5px;
  border: 1px solid var(--kungalgame-blue-4);
  box-shadow: var(--shadow);
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
  span {
    &:nth-child(2) {
      margin: 0 5px;
      cursor: pointer;
      color: var(--kungalgame-pink-3);
      border-bottom: 2px solid var(--kungalgame-white-9);
      &:hover {
        border-bottom: 2px solid var(--kungalgame-pink-3);
      }
    }
    &:nth-child(3) {
      margin-left: 40px;
    }

    .emoji {
      color: var(--kungalgame-pink-3);
    }
  }
}

/* 适配手机端 */
@media (max-width: 700px) {
  .emoji {
    display: none;
  }
}
</style>
