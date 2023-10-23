<!-- Topic's bottom area, including upvote, reply, like, etc. -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
// Import the edit page store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// Import the reply page store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// Use the edit page store
const { topicRewrite } = storeToRefs(useKUNGalgameEditStore())
// Use the reply page store
const { isEdit, replyRewrite } = storeToRefs(useKUNGalgameTopicStore())
// Use the router
const router = useRouter()

// Accept props from the parent component
const props = defineProps<{
  tid: number
  rid: number
  uid: number
  title: string
  content: string
  tags: string[]
  category: string[]
  toUid: number
}>()

// Check if the user has permission to rewrite
const isShowRewrite = ref(props.uid === props.toUid)

// Reactive
watch(
  () => props.toUid,
  () => {
    if (props.uid === props.toUid) {
      isShowRewrite.value = true
    } else {
      isShowRewrite.value = false
    }
  }
)

// Rewrite the topic
const rewriteTopic = () => {
  // Save the data
  topicRewrite.value.tid = props.tid
  topicRewrite.value.title = props.title
  topicRewrite.value.content = props.content
  topicRewrite.value.tags = props.tags
  topicRewrite.value.category = props.category

  // Set the "isTopicRewriting" state to true
  topicRewrite.value.isTopicRewriting = true

  // Navigate to the edit page
  router.push({ name: 'Edit' })
}

// Rewrite the reply
const rewriteReply = () => {
  // Save the data
  replyRewrite.value.tid = props.tid
  replyRewrite.value.rid = props.rid
  replyRewrite.value.content = props.content
  replyRewrite.value.tags = props.tags

  // Set the "isReplyRewriting" state to true
  replyRewrite.value.isReplyRewriting = true

  // Open the reply panel
  isEdit.value = true
}

// Edit
const handleClickRewrite = () => {
  if (props.rid === 0) {
    rewriteTopic()
  } else {
    rewriteReply()
  }
}
</script>

<template>
  <span v-if="isShowRewrite" @click="handleClickRewrite" class="icon">
    <Icon icon="line-md:pencil-twotone-alt" />
  </span>
</template>

<style lang="scss" scoped></style>
