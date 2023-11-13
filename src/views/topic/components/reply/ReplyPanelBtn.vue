<script setup lang="ts">
import { useKUNGalgameMessageStore } from '@/store/modules/message'
import Message from '@/components/alert/Message'

import { usePersistKUNGalgameTopicStore } from '@/store/modules/topic/topic'
import { usePersistKUNGalgameReplyStore } from '@/store/modules/topic/reply'

import { useTempReplyStore } from '@/store/temp/topic/reply'
import { storeToRefs } from 'pinia'

const { isShowAdvance } = storeToRefs(usePersistKUNGalgameTopicStore())
const { isSaveReply, isReplyRewriting, replyRewrite } = storeToRefs(
  usePersistKUNGalgameReplyStore()
)

const { isEdit, tempReplyRewrite } = storeToRefs(useTempReplyStore())

const messageStore = useKUNGalgameMessageStore()

// Click to publish a reply
const handlePublish = async () => {
  const res = await messageStore.alert('AlertInfo.edit.publish', true)
  // Implement user's confirmation or cancel logic here
  if (res) {
    useTempReplyStore().resetPageStatus()
    // Publish the reply
    const responseData = await usePersistKUNGalgameReplyStore().postNewReply()

    if (responseData?.code === 200) {
      // Save the data of the new reply
      useTempReplyStore().tempReply = responseData.data
      // Clear the data because the reply has been successfully posted
      usePersistKUNGalgameReplyStore().resetReplyDraft()
      // Close the panel
      isEdit.value = false
      // Display a success message
      Message('Publish reply successfully!', '发布回复成功！', 'success')
    }
  }
}

// Save the data for reply rewriting
const saveRewriteReply = () => {
  tempReplyRewrite.value.rid = replyRewrite.value.rid
  tempReplyRewrite.value.content = replyRewrite.value.content
  tempReplyRewrite.value.tags = replyRewrite.value.tags
  tempReplyRewrite.value.edited = Date.now()
}

// Handle reply rewriting
const handleRewrite = async () => {
  const res = await messageStore.alert('AlertInfo.edit.rewrite', true)
  // Implement user's confirmation or cancel logic here
  if (res) {
    // Update the reply
    const responseData = await usePersistKUNGalgameReplyStore().updateReply()

    if (responseData?.code === 200) {
      // Change the publish status, the front-end will add data for the new reply

      Message('Reply rewrite successfully', '回复重新编辑成功', 'success')
      // Save the data for the new reply, which is essentially the draft data
      saveRewriteReply()

      // Clear the data because the reply has been updated at this point
      usePersistKUNGalgameReplyStore().resetRewriteReplyData()
      // Close the panel
      isShowAdvance.value = false
      isEdit.value = false
    }
  }
}

// Handle saving a draft
const handleSave = () => {
  // Set the save flag to true
  isSaveReply.value = true
  // Implement the logic for saving the draft here
  Message(
    'The draft has been saved successfully!',
    '草稿已经保存成功',
    'success'
  )
}

// Show advanced editing options
const handleShowAdvance = () => {
  isShowAdvance.value = !isShowAdvance.value
}
</script>

<template>
  <div class="btn-container">
    <!-- Advanced options button -->
    <button class="advance-btn" @click="handleShowAdvance">
      {{ $tm('topic.panel.advance') }}
    </button>

    <!-- Confirm button -->
    <button v-if="!isReplyRewriting" class="confirm-btn" @click="handlePublish">
      {{ $tm('topic.panel.confirm') }}
    </button>

    <!-- Rewrite button -->
    <button v-if="isReplyRewriting" class="rewrite-btn" @click="handleRewrite">
      {{ $tm('topic.panel.rewrite') }}
    </button>

    <!-- Save button -->
    <button class="save-btn" @click="handleSave">
      {{ $tm('topic.panel.save') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-container {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.btn-container button {
  margin: 10px 0;
  height: 40px;
  width: 150px;
  font-size: 17px;
  white-space: nowrap;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
  &:hover {
    color: var(--kungalgame-white);
  }
}

.confirm-btn {
  color: var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-blue-4);

  &:hover {
    background-color: var(--kungalgame-blue-4);
    transition: 0.1s;
  }

  &:active {
    background-color: var(--kungalgame-blue-3);
    transform: scale(0.8);
  }
}

.rewrite-btn {
  color: var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-red-4);

  &:hover {
    background-color: var(--kungalgame-red-4);
    transition: 0.1s;
  }

  &:active {
    background-color: var(--kungalgame-red-3);
    transform: scale(0.8);
  }
}

.save-btn {
  color: var(--kungalgame-pink-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-pink-4);

  &:hover {
    background-color: var(--kungalgame-pink-4);
    transition: 0.1s;
  }

  &:active {
    background-color: var(--kungalgame-pink-3);
    transform: scale(0.8);
  }
}

.advance-btn {
  color: var(--kungalgame-purple-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-purple-4);

  &:hover {
    background-color: var(--kungalgame-purple-4);
    transition: 0.1s;
  }

  &:active {
    background-color: var(--kungalgame-purple-4);
    transform: scale(0.8);
  }
}

@media (max-width: 700px) {
  .advance-btn {
    display: none;
  }
}
</style>
