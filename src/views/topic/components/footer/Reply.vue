<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 使用话题页面的 store
const { isEdit, replyDraft } = storeToRefs(useKUNGalgameTopicStore())

// 接受父组件的传值
const props = defineProps<{
  tid: number
  toUserName: string
  to_uid: number
  to_floor: number
}>()

// 点击回复打开回复面板
const handleClickReply = () => {
  // 保存必要信息，以便发表回复
  replyDraft.value.tid = props.tid
  replyDraft.value.toUserName = props.toUserName
  replyDraft.value.to_uid = props.to_uid
  replyDraft.value.to_floor = props.to_floor
  // 打开回复面板
  isEdit.value = true
}
</script>

<template>
  <div @click="handleClickReply" class="reply">
    {{ $tm('topic.content.reply') }}
  </div>
</template>

<style lang="scss" scoped>
.reply {
  position: relative;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--kungalgame-blue-4);
  cursor: pointer;
  transition: all 0.2s;
  margin-right: 10px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    border: 2px solid transparent;
  }
  &:hover {
    color: var(--kungalgame-pink-4);

    &::before {
      transition: width 0.2s, height 0.2s, border-bottom-color 0s;
      transition-delay: 0.2s, 0s, 0.2s;
      width: 70px;
      height: 30px;
      border-left: 2px solid var(--kungalgame-pink-4);
      border-bottom: 2px solid var(--kungalgame-pink-4);
    }

    &::after {
      transition: width 0.2s, height 0.2s, border-right-color 0.2s;
      transition-delay: 0s, 0.2s, 0.2s;
      width: 70px;
      height: 30px;
      border-top: 2px solid var(--kungalgame-pink-4);
      border-right: 2px solid var(--kungalgame-pink-4);
    }
  }
}

@media (max-width: 700px) {
  .reply {
    margin-right: 0;
  }
}
</style>
