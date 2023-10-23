<script setup lang="ts">
// Global message component (at the bottom)
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// Import the store for editing topics
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'
// Import the router
import { useRouter } from 'vue-router'

const router = useRouter()

const { isSaveTopic, topicRewrite } = storeToRefs(useKUNGalgameEditStore())
const messageStore = useKUNGalgameMessageStore()

// Publish a topic
const handlePublish = async () => {
  const res = await messageStore.alert('AlertInfo.edit.publish', true)
  // Implement user's confirmation or cancellation logic here
  if (res) {
    // Backend returns the created topic data
    const res = await useKUNGalgameEditStore().createNewTopic()

    console.log(res)

    if (res?.code === 200) {
      // Get the tid of the created topic
      const tid = res.data.tid

      // Push the user to the corresponding topic details page
      router.push({
        name: 'Topic',
        params: {
          tid: tid,
        },
      })

      messageStore.info('AlertInfo.edit.publishSuccess')
      // Clear data and no longer save it, as the topic has been published at this point
      useKUNGalgameEditStore().resetTopicData()
    }
  } else {
    messageStore.info('AlertInfo.edit.publishCancel')
  }
}

// Rewrite a topic
const handleRewrite = async () => {
  const res = await messageStore.alert('AlertInfo.edit.rewrite', true)
  // Implement user's confirmation or cancellation logic here
  if (res) {
    // Update the topic
    await useKUNGalgameEditStore().rewriteTopic()

    // Get the tid of the rewritten topic
    const tid = topicRewrite.value.tid

    // Push the user to the corresponding topic details page
    router.push({
      name: 'Topic',
      params: {
        tid: tid,
      },
    })

    messageStore.info('AlertInfo.edit.rewriteSuccess')
    // Clear data and no longer save it, as the topic has been updated at this point
    useKUNGalgameEditStore().resetRewriteTopicData()
  } else {
    messageStore.info('AlertInfo.edit.rewriteCancel')
  }
}

// Logic when the user clicks to save the topic
const handleSave = () => {
  // When this value is true, the previous topic data will be preloaded each time the page is loaded
  isSaveTopic.value = true
  messageStore.info('AlertInfo.edit.draft')
}
</script>

<template>
  <!-- Button container -->
  <div class="btn-container">
    <!-- Confirm button -->
    <button
      v-if="!topicRewrite.isTopicRewriting"
      class="confirm-btn"
      @click="handlePublish"
    >
      {{ $tm('edit.publish') }}
    </button>

    <!-- Rewrite button -->
    <button
      v-if="topicRewrite.isTopicRewriting"
      class="rewrite-btn"
      @click="handleRewrite"
    >
      {{ $tm('edit.rewrite') }}
    </button>

    <!-- Save button -->
    <button class="save-btn" @click="handleSave">
      {{ $tm('edit.draft') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
/* Button container */
.btn-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  button {
    transition: all 0.2s;
    height: 40px;
    width: 200px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
      color: var(--kungalgame-white);
    }
  }
}

/* Style for the confirm button */
.confirm-btn {
  color: var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-blue-1);
  border: 1px solid var(--kungalgame-blue-4);

  &:hover {
    background-color: var(--kungalgame-blue-4);
    transition: 0.2s;
  }
}

/* Style for the rewrite button */
.rewrite-btn {
  color: var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-red-1);
  border: 1px solid var(--kungalgame-red-4);

  &:hover {
    background-color: var(--kungalgame-red-4);
    transition: 0.2s;
  }
}

/* Style for the save button */
.save-btn {
  color: var(--kungalgame-pink-4);
  background-color: var(--kungalgame-trans-pink-1);
  border: 1px solid var(--kungalgame-pink-4);

  &:hover {
    background-color: var(--kungalgame-pink-4);
    transition: 0.2s;
  }

  &:active {
    background-color: var(--kungalgame-pink-3);
    transform: scale(0.8);
  }
}

@media (max-width: 700px) {
  .btn-container button {
    width: 150px;
    font-size: 17px;
  }
}
</style>
