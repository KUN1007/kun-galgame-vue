<script setup lang="ts">
// Import icons
import { Icon } from '@iconify/vue'
// Import animations
import 'animate.css'
// Import Vue asynchronous functions
import { computed, defineAsyncComponent } from 'vue'

const MilkdownEditor = defineAsyncComponent(
  () => import('@/components/milkdown/MilkdownEditorWrapper.vue')
)
const Tags = defineAsyncComponent(
  () => import('@/views/edit/components/Tags.vue')
)
import ReplyPanelBtn from './ReplyPanelBtn.vue'

import { useKUNGalgameMessageStore } from '@/store/modules/message'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const messageStore = useKUNGalgameMessageStore()
// Use the topic page store
const { isShowAdvance, isEdit, replyDraft, replyRewrite, replyPanelWidth } =
  storeToRefs(useKUNGalgameTopicStore())

const position = computed(() => {
  return replyDraft.value.to_floor === 0 ? 'master' : 'reply'
})

const panelWidth = computed(() => `${replyPanelWidth.value}%`)

const handleClosePanel = async () => {
  // If currently rewriting a reply
  if (replyRewrite.value.isReplyRewriting) {
    const res = await messageStore.alert('AlertInfo.edit.closePanel', true)
    // Implement user's confirmation or cancel logic here
    if (res) {
      // Clear data because the reply has been updated at this point
      useKUNGalgameTopicStore().resetRewriteTopicData()
    } else {
      return
    }
  }
  isShowAdvance.value = false
  isEdit.value = false
}
</script>

<template>
  <Teleport to="body" :disabled="isEdit">
    <Transition
      enter-active-class="animate__animated animate__fadeInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown animate__faster"
    >
      <div class="root" v-if="isEdit">
        <div class="container" :style="`width: ${panelWidth}`">
          <!-- Reply panel - reply to whom -->
          <div class="title">
            <h3>
              <span>{{ $tm('topic.panel.to') + ' @' }}</span>
              <span>{{ replyDraft.toUserName }}</span>
              <span>
                <span class="emoji">(⋈◍＞◡＜◍)。✧♡ </span>
                {{ `${$tm(`topic.panel.${position}`)} ${replyDraft.to_floor}` }}
              </span>
            </h3>
            <Icon
              @click="handleClosePanel"
              class="close"
              icon="line-md:close"
            />
          </div>

          <!-- Reply editor -->
          <div class="content">
            <MilkdownEditor :is-show-menu="isShowAdvance" />
          </div>

          <!-- Reply footer -->
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

@media (max-width: 700px) {
  .emoji {
    display: none;
  }
}
</style>
