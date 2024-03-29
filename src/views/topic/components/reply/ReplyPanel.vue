<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { Icon } from '@iconify/vue'
import 'animate.css'

const MilkdownEditor = defineAsyncComponent(
  () => import('@/components/milkdown/MilkdownEditorWrapper.vue')
)
const Tags = defineAsyncComponent(
  () => import('@/views/edit/components/Tags.vue')
)
import ReplyPanelBtn from './ReplyPanelBtn.vue'

import { useTempMessageStore } from '@/store/temp/message'
import { usePersistKUNGalgameTopicStore } from '@/store/modules/topic/topic'
import { usePersistKUNGalgameReplyStore } from '@/store/modules/topic/reply'

import { useTempReplyStore } from '@/store/temp/topic/reply'
import { storeToRefs } from 'pinia'

const messageStore = useTempMessageStore()
const { isShowAdvance } = storeToRefs(usePersistKUNGalgameTopicStore())
const { isReplyRewriting } = storeToRefs(useTempReplyStore())
const { replyDraft, replyPanelWidth } = storeToRefs(
  usePersistKUNGalgameReplyStore()
)

const { isEdit } = storeToRefs(useTempReplyStore())

const position = computed(() => {
  return replyDraft.value.toFloor === 0 ? 'master' : 'reply'
})

const panelWidth = computed(() => `${replyPanelWidth.value}%`)

const handleClosePanel = async () => {
  if (isReplyRewriting.value) {
    const res = await messageStore.alert('AlertInfo.edit.closePanel', true)

    if (res) {
      useTempReplyStore().resetRewriteReplyData()
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
                {{ `${$tm(`topic.panel.${position}`)} ${replyDraft.toFloor}` }}
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
