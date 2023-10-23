<script setup lang="ts">
// Global message component (bottom)
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// Global message component (top)
import Message from '@/components/alert/Message'
// Import topic page store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
// Temporary reply data
import { useTempReplyStore } from '@/store/temp/reply'
import { storeToRefs } from 'pinia'
// Temporary response data for reply rewriting
import { useTempReplyRewriteStore } from '@/store/temp/replyRewrite'

const { rid, replyContent, tags, edited } = storeToRefs(
  useTempReplyRewriteStore()
)
// Use the topic page store
const { isShowAdvance, replyDraft, replyRewrite, isEdit } = storeToRefs(
  useKUNGalgameTopicStore()
)

const messageStore = useKUNGalgameMessageStore()

// Check if the reply is valid
const isValidReply = () => {
  const count = replyDraft.value.textCount
  return count && count < 10007
}

// Function to publish a reply
const publishReply = async () => {
  if (isValidReply()) {
    // Reset page status, load status, and other page settings
    useKUNGalgameTopicStore().resetPageStatus()
    // Publish the reply
    const responseData = await useKUNGalgameTopicStore().postNewReply()

    if (responseData.code === 200) {
      // Save the data of the new reply
      useTempReplyStore().tempReply = responseData.data
      // Clear the data because the reply has been successfully posted
      useKUNGalgameTopicStore().resetReplyDraft()
      // Close the panel
      isEdit.value = false
      // Display a success message
      Message('Publish reply successfully!', '发布回复成功！', 'success')
    } else {
      Message('Publish reply failed!', '发布回复失败！', 'error')
    }
  } else {
    Message('Reply content cannot be empty!', '回复内容不能为空！', 'warn')
  }
}

// Click to publish a reply
const handlePublish = async () => {
  const res = await messageStore.alert('AlertInfo.edit.publish', true)
  // Implement user's confirmation or cancel logic here
  if (res) {
    publishReply()
  } else {
    // Cancel the publish and display a message
    Message('Cancel publish reply', '取消发布回复', 'info')
  }
}

// Save the data for reply rewriting
const saveRewriteReply = () => {
  rid.value = replyRewrite.value.rid
  replyContent.value = replyRewrite.value.content
  tags.value = replyRewrite.value.tags
  edited.value = Date.now()
}

// Handle reply rewriting
const handleRewrite = async () => {
  const res = await messageStore.alert('AlertInfo.edit.rewrite', true)
  // Implement user's confirmation or cancel logic here
  if (res) {
    // Update the reply
    const responseData = await useKUNGalgameTopicStore().updateReply()

    if (responseData.code === 200) {
      // Change the publish status, the front-end will add data for the new reply

      Message('Reply rewrite successfully', '回复重新编辑成功', 'success')
      // Save the data for the new reply, which is essentially the draft data
      saveRewriteReply()

      // Clear the data because the reply has been updated at this point
      useKUNGalgameTopicStore().resetRewriteTopicData()
      // Close the panel
      isShowAdvance.value = false
      isEdit.value = false
    } else {
      Message('Reply rewrite failed!', '回复重新编辑失败！', 'error')
    }
  }
}

// Handle saving a draft
const handleSave = () => {
  // Set the save flag to true
  replyDraft.value.isSaveReply = true
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
  <!-- Button container -->
  <div class="btn-container">
    <!-- Advanced options button -->
    <button class="advance-btn" @click="handleShowAdvance">
      {{ $tm('topic.panel.advance') }}
    </button>

    <!-- Confirm button -->
    <button
      v-if="!replyRewrite.isReplyRewriting"
      class="confirm-btn"
      @click="handlePublish"
    >
      {{ $tm('topic.panel.confirm') }}
    </button>

    <!-- Rewrite button -->
    <button
      v-if="replyRewrite.isReplyRewriting"
      class="rewrite-btn"
      @click="handleRewrite"
    >
      {{ $tm('topic.panel.rewrite') }}
    </button>

    <!-- Save button -->
    <button class="save-btn" @click="handleSave">
      {{ $tm('topic.panel.save') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
/* Button container */
.btn-container {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
/* Style for individual buttons */
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

/* Confirm button style */
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

/* Rewrite button style */
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

/* Save button style */
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

/* Advanced options button style */
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

/* Mobile responsiveness */
@media (max-width: 700px) {
  .advance-btn {
    display: none;
  }
}
</style>
