<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useTempMessageStore } from '@/store/temp/message'
import { useTempEditStore } from '@/store/temp/edit'
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

const router = useRouter()

const { tid, isTopicRewriting } = storeToRefs(useTempEditStore())
const { isSaveTopic } = storeToRefs(useKUNGalgameEditStore())
const messageStore = useTempMessageStore()

const handlePublish = async () => {
  const res = await messageStore.alert('AlertInfo.edit.publish', true)

  if (res) {
    const res = await useKUNGalgameEditStore().createNewTopic()

    if (res?.code === 200) {
      const tid = res.data.tid

      router.push({
        name: 'Topic',
        params: {
          tid: tid,
        },
      })

      messageStore.info('AlertInfo.edit.publishSuccess')
      useKUNGalgameEditStore().resetTopicData()
    }
  }
}

const handleRewrite = async () => {
  const res = await messageStore.alert('AlertInfo.edit.rewrite', true)
  if (res) {
    await useTempEditStore().rewriteTopic()

    const rewrittenTopicTid = tid.value

    router.push({
      name: 'Topic',
      params: {
        tid: rewrittenTopicTid,
      },
    })

    messageStore.info('AlertInfo.edit.rewriteSuccess')
    useTempEditStore().resetRewriteTopicData()
  }
}

const handleSave = () => {
  isSaveTopic.value = true
  messageStore.info('AlertInfo.edit.draft')
}
</script>

<template>
  <div class="btn-container">
    <!-- Confirm button -->
    <button v-if="!isTopicRewriting" class="confirm-btn" @click="handlePublish">
      {{ $tm('edit.publish') }}
    </button>

    <!-- Rewrite button -->
    <button v-if="isTopicRewriting" class="rewrite-btn" @click="handleRewrite">
      {{ $tm('edit.rewrite') }}
    </button>

    <!-- Save button -->
    <button v-if="!isTopicRewriting" class="save-btn" @click="handleSave">
      {{ $tm('edit.draft') }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
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
    border-radius: 5px;

    &:hover {
      color: var(--kungalgame-white);
    }
  }
}

.confirm-btn {
  color: var(--kungalgame-blue-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-blue-4);

  &:hover {
    background-color: var(--kungalgame-blue-4);
    transition: 0.2s;
  }
}

.rewrite-btn {
  color: var(--kungalgame-red-4);
  background-color: var(--kungalgame-trans-white-9);
  border: 1px solid var(--kungalgame-red-4);

  &:hover {
    background-color: var(--kungalgame-red-4);
    transition: 0.2s;
  }
}

.save-btn {
  color: var(--kungalgame-pink-4);
  background-color: var(--kungalgame-trans-white-9);
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
