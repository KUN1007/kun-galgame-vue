<!--
  This is the comment section below the topic replies
   which contains all the comments. It is a separate component
    and its child components are individual comments.
-->

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

const CommentPanel = defineAsyncComponent(() => import('./CommentPanel.vue'))
import Like from './Like.vue'
import Dislike from './Dislike.vue'

import { TopicComment } from '@/api/index'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { useTempCommentStore } from '@/store/temp/topic/comment'
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
const currentUserUid = useKUNGalgameUserStore().uid

watch(
  () => props.rid,
  async () => {
    ridRef.value = props.rid
    toUser.value = props.toUser
    commentsData.value = await getComments(tidRef.value, ridRef.value)
  }
)

const commentsData = ref<TopicComment[]>([])

const getComments = async (topicId: number, replyId: number) => {
  return (await useTempCommentStore().getComments(topicId, replyId)).data
}

const getCommentEmits = (newComment: TopicComment) => {
  commentsData.value?.push(newComment)
}

onMounted(async () => {
  commentsData.value = await getComments(tidRef.value, ridRef.value)
})

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

  isShowCommentPanelRid.value = ridRef.value
}
</script>

<template>
  <div class="comment-container">
    <CommentPanel
      @getCommentEmits="getCommentEmits"
      v-if="isShowCommentPanelRid === ridRef"
    />

    <div class="container" v-if="commentsData?.length">
      <div class="title">
        <span>{{ $tm('topic.content.comments') }}</span>
      </div>

      <div
        class="comment"
        v-for="(comment, index) in commentsData"
        :key="index"
      >
        <RouterLink
          v-if="comment.c_user.avatar"
          :to="`/kungalgamer/${comment.c_user.uid}/info`"
        >
          <img
            :src="comment.c_user.avatar.replace(/\.webp$/, '-100.webp')"
            alt="KUN"
          />
        </RouterLink>

        <div class="content">
          <div class="describe">
            <div class="name">
              {{ `${comment.c_user.name} ${$tm('topic.content.comment')}` }}
              <RouterLink :to="`/kungalgamer/${comment.to_user.uid}/info`">
                {{ comment.to_user.name }}
              </RouterLink>
            </div>

            <div class="operate">
              <ul>
                <Like
                  :tid="props.tid"
                  :cid="comment.cid"
                  :uid="currentUserUid"
                  :to-uid="comment.c_user.uid"
                  :likes="comment.likes"
                />

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

          <div class="text">
            {{ comment.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment-container {
  border-top: 1px solid var(--kungalgame-blue-1);
}

.title {
  flex-shrink: 0;
  margin: 17px 0;
  color: var(--kungalgame-font-color-3);
}

.comment-container {
  width: 100%;
  padding: 0 17px;
}

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

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.describe {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5px;
}

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
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
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

.text {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
}
</style>
