<!-- 
  这是回复话题下方的评论区，包含了所有的评论，是一个单独的组件，它的子组件是单个评论
 -->
<script setup lang="ts">
import { defineAsyncComponent, onMounted, reactive, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
// 异步导入回复面板组件
const CommentPanel = defineAsyncComponent(() => import('./CommentPanel.vue'))
// 点赞组件
import Like from './Like.vue'
// 点踩组件
import Dislike from './Dislike.vue'

import { TopicComment } from '@/api/index'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
// 导入用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

// 使用不持久的评论 store
import { useTempCommentStore } from '@/store/temp/comment'
import { storeToRefs } from 'pinia'

const { tid, rid, toUid, toUsername, isShowCommentPanelRid } = storeToRefs(
  useTempCommentStore()
)

const props = defineProps<{
  tid: number
  rid: number
  toUser: {
    uid: number
    name: string
  }
}>()

const tidRef = ref(props.tid)
const ridRef = ref(props.rid)
const toUser = ref(props.toUser)
// 当前用户 uid
const currentUserUid = useKUNGalgameUserStore().uid

// 响应式
watch(
  () => props.rid,
  async () => {
    ridRef.value = props.rid
    toUser.value = props.toUser
    commentsData.value = await getComments(tidRef.value, ridRef.value)
  }
)

// 评论的数据
const commentsData = ref<TopicComment[]>([])

const getComments = async (topicId: number, replyId: number) => {
  return (await useKUNGalgameTopicStore().getComments(topicId, replyId)).data
}

// 拿到新发布的评论并 push 到原来的数据里，无需重新获取
const getCommentEmits = (newComment: TopicComment) => {
  commentsData.value?.push(newComment)
}

onMounted(async () => {
  commentsData.value = await getComments(tidRef.value, ridRef.value)
})

// 点击回复
const handleClickComment = (
  topicId: number,
  replyId: number,
  uid: number,
  name: string
) => {
  tid.value = topicId
  rid.value = replyId
  toUid.value = uid
  toUsername.value = name
  // 打开回复面板
  isShowCommentPanelRid.value = ridRef.value
}
</script>

<template>
  <!-- 评论容器 -->
  <div class="comment-container">
    <!-- 评论的弹出面板 -->
    <CommentPanel
      @getCommentEmits="getCommentEmits"
      v-if="isShowCommentPanelRid === ridRef"
    />

    <!-- 评论的展示区域 -->
    <div class="container" v-if="commentsData?.length">
      <!-- 评论的标题 -->
      <div class="title">
        <span>{{ $tm('topic.content.comments') }}</span>
      </div>
      <div
        class="comment"
        v-for="(comment, index) in commentsData"
        :key="index"
      >
        <!-- 用户头像 TODO: -->
        <RouterLink :to="`/kungalgamer/${comment.c_user.uid}/info`">
          <img src="@/assets/images/KUN.jpg" alt="KUN" />
        </RouterLink>
        <!-- 单个评论的内容区 -->
        <div class="content">
          <!-- 单个评论内容区顶部 -->
          <div class="describe">
            <!-- 顶部左侧名字 -->
            <div class="name">
              {{ `${comment.c_user.name} ${$tm('topic.content.comment')}` }}
              <!-- 跳转到用户主页 TODO: -->
              <a href="#">{{ comment.to_user.name }}</a>
            </div>
            <!-- 顶部右侧点赞、踩 -->
            <div class="operate">
              <ul>
                <!-- 点赞 -->
                <Like
                  :tid="props.tid"
                  :cid="comment.cid"
                  :uid="currentUserUid"
                  :to-uid="comment.c_user.uid"
                  :likes="comment.likes"
                />
                <!-- 踩 -->
                <Dislike
                  :tid="props.tid"
                  :cid="comment.cid"
                  :uid="currentUserUid"
                  :to-uid="comment.c_user.uid"
                  :dislikes="comment.dislikes"
                />
                <li
                  @click="
                    handleClickComment(
                      comment.tid,
                      comment.rid,
                      comment.c_user.uid,
                      comment.c_user.name
                    )
                  "
                >
                  <Icon class="icon" icon="fa-regular:comment-dots" />
                </li>
              </ul>
            </div>
          </div>
          <!-- 单个评论内容区底部 -->
          <div class="text">
            {{ comment.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 评论的标题 */
.title {
  flex-shrink: 0;
  margin-bottom: 17px;
  color: var(--kungalgame-font-color-3);
}
/* 评论容器 */
.comment-container {
  width: 100%;
  padding: 0 17px;
}

/* 单个评论 */

/* 单个评论容器 */
.comment {
  display: flex;
  width: 100%;
  margin: 10px 0;
  color: var(--kungalgame-font-color-3);
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}
/* 单个评论的内容区 */
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
/* 单个评论内容区顶部 */
.describe {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5px;
}
/* 顶部左侧名字 */
.name {
  font-size: 15px;
  a {
    color: var(--kungalgame-blue-5);
    &:hover {
      text-decoration: underline;
    }
  }
}
.operate ul {
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    .icon {
      cursor: pointer;
      color: var(--kungalgame-font-color-2);
      margin-right: 2px;
    }
  }
}

/* 单个评论 */
.text {
  font-size: 12px;
  text-indent: 25px;
  /* 标题显示两行、超出部分隐藏 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
  -webkit-box-orient: vertical; /* 设置为纵向排列 */
  -webkit-line-clamp: 10; /* 显示 10 行文本 */
}
</style>
