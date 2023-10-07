<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
// 导入编辑界面的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入回复界面的 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 使用编辑界面的 store
const { topicRewrite } = storeToRefs(useKUNGalgameEditStore())
// 使用回复界面是 store
const { isEdit, replyRewrite } = storeToRefs(useKUNGalgameTopicStore())
// 使用路由
const router = useRouter()

// 接受父组件的传值
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

// 是否具有重新编辑的权限
const isShowRewrite = ref(props.uid === props.toUid)

// 响应式
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

// 重新编辑话题
const rewriteTopic = () => {
  // 保存数据
  topicRewrite.value.tid = props.tid
  topicRewrite.value.title = props.title
  topicRewrite.value.content = props.content
  topicRewrite.value.tags = props.tags
  topicRewrite.value.category = props.category

  // 设置正在重新编辑状态为真
  topicRewrite.value.isTopicRewriting = true

  // 跳转到编辑界面
  router.push({ name: 'Edit' })
}

// 重新编辑回复
const rewriteReply = () => {
  // 保存数据
  replyRewrite.value.tid = props.tid
  replyRewrite.value.rid = props.rid
  replyRewrite.value.content = props.content
  replyRewrite.value.tags = props.tags

  // 设置正在重新编辑回复状态为真
  replyRewrite.value.isReplyRewriting = true

  // 打开回复面板
  isEdit.value = true
}

// 编辑
const handleClickRewrite = () => {
  if (props.rid === 0) {
    rewriteTopic()
  } else {
    rewriteReply()
  }
}
</script>

<template>
  <!-- 编辑 -->
  <span v-if="isShowRewrite" @click="handleClickRewrite" class="icon">
    <Icon icon="line-md:pencil-twotone-alt" />
  </span>
</template>

<style lang="scss" scoped></style>
