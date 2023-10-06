<!-- 
  这是 KUNGalgame 话题展示区域下方的其他人话题展示部分，任何非楼主发布的话题将会被展示在这里

  这个区域包含所有人回复给楼主的话题，其中每个人的话题将会被拆分成为单独的组件
 -->
<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
import { Icon } from '@iconify/vue'
// 导入评论组件
import Comments from '../comment/Comments.vue'
// 导入 Footer 组件
import ReplyFooter from './ReplyFooter.vue'
// 导入发布时间组件
import Time from '../Time.vue'
// 导入标签组件
import Tags from '../Tags.vue'
// 导入重新编辑
import Rewrite from '../Rewrite.vue'
// 导入发布人个人信息
import KUNGalgamerInfo from '../KUNGalgamerInfo.vue'

import { TopicReply } from '@/api/index'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const { scrollToReplyId, commentDraft } = storeToRefs(useKUNGalgameTopicStore())

defineProps<{
  repliesData: TopicReply[]
}>()

// 控制面板关闭的值
const isCommentPanelOpen = ref(false)
// 切换面板的状态
const handleClickComment = (rid: number) => {
  isCommentPanelOpen.value = !isCommentPanelOpen.value
  if (isCommentPanelOpen.value) {
    commentDraft.value.isShowCommentPanelRid = rid
  } else {
    commentDraft.value.isShowCommentPanelRid = 0
  }
}
</script>

<template>
  <!-- 其它人的回复 -->
  <!-- 这里使用 Math.random 的原因是 key 必须唯一 -->
  <Transition
    enter-active-class="animate__animated animate__fadeInUp animate__faster"
    appear
  >
    <div>
      <div
        class="other-topic-container"
        v-for="(reply, index) in repliesData"
        :key="`${index}`"
        :id="`kungalgame-reply-${reply.floor}`"
      >
        <!-- 每个人的单个话题 -->
        <!-- 楼层标志 -->
        <div class="floor">
          <span>K{{ reply.floor }}</span>
        </div>
        <!-- 其他人话题内容区的容器 -->
        <div class="container">
          <!-- 其它人回复的内容区 -->
          <div class="content">
            <!-- 其他人回复的上部 -->
            <div class="article">
              <!-- 其它人回复的上部左侧区域 -->
              <KUNGalgamerInfo :user="reply.r_user" />
              <!-- 其它人回复的上部右侧区域 -->
              <div class="right">
                <!-- 右侧的上部区域 -->
                <div class="top">
                  <!-- 上部区域的左边 -->
                  <div class="reply">
                    <!-- 跳转到页面中话题的位置 -->
                    回复给 @
                    <span @click="scrollToReplyId = reply.to_floor">
                      {{ reply.to_user.name }}
                    </span>
                  </div>
                  <!-- 上部区域的右边 -->
                  <Rewrite v-if="reply.edited" :time="reply.edited" />
                </div>
                <!-- 右侧部分分文本 -->
                <div class="text" v-html="reply.content"></div>
              </div>
            </div>
            <!-- 其他人回复的下部 -->
            <div class="bottom">
              <Tags :tags="reply.tags" />
              <Time :time="reply.time" />
            </div>
          </div>

          <!-- 其它人回复的底部 -->
          <!-- info 代表 footer 的点赞等信息，master 表示当前的回复用户信息 -->
          <!-- 这里传入了回复的插槽，因为只有回复可以被评论 -->
          <ReplyFooter
            :info="{
              rid: reply.rid,
              likes: reply.likes,
              dislikes: reply.dislikes,
              upvotes: reply.upvotes,
              to_floor: reply.floor,
            }"
            :master="reply.r_user"
          >
            <template #comment>
              <span @click="handleClickComment(reply.rid)" class="icon">
                <Icon icon="fa-regular:comment-dots" />
              </span>
            </template>
          </ReplyFooter>

          <!-- 评论区域 -->
          <Comments
            :tid="reply.tid"
            :rid="reply.rid"
            :toUser="{ uid: reply.r_user.uid, name: reply.r_user.name }"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
/* 其它人的回复 */
/* 每个人的话题 */
.other-topic-container {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 单个回复 */
.floor {
  width: 100%;
  display: flex;
  justify-content: end;
  font-weight: bold;
  font-style: oblique;
  color: var(--kungalgame-red-3);
  border-bottom: none;
  /* 这里的阴影只能这么绘制 */
  filter: drop-shadow(1px 2px 2px var(--kungalgame-trans-blue-4));
  span {
    transform: rotate(10deg) translateY(40px);
    padding: 0 30px;
    text-align: center;
    background-color: var(--kungalgame-trans-white-2);
    font-size: 20px;
    /* 这里将形状裁剪成六边形 */
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  }
}
/* 其他人话题内容区容器 */
.container {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  background-color: var(--kungalgame-trans-white-5);
  box-shadow: var(--shadow);
  transition: all 0.5s;
}
/* 其它人回复的内容区 */
.content {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 其他人回复的上部 */
.article {
  display: flex;
  flex-grow: 1;
}
/* 其它人回复的上部右侧区域 */
.right {
  width: 100%;
  display: flex;
  flex-direction: column;
}
/* 右侧的上部区域 */
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  letter-spacing: 1px;
}
/* 其他人回复的下部 */
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  padding-bottom: 7px;
}

/* 上部区域的左边 */
.reply {
  font-size: 17px;
  color: var(--kungalgame-font-color-3);
  span {
    color: var(--kungalgame-blue-5);
    font-weight: 500;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
}

/* 内容区右侧的话题展示区 */
.text {
  font-size: 15px;
  padding: 17px;
  border-left: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-3);
}

/* 插槽的样式 */
.icon {
  cursor: pointer;
  font-size: 24px;
  color: var(--kungalgame-font-color-2);
  display: flex;
}

/* 滚动到指定话题激活后的样式 */
.active .container {
  border: 1px solid var(--kungalgame-red-3);
  background-color: var(--kungalgame-trans-red-1);
}

@media (max-width: 1000px) {
  .top {
    flex-direction: column;
  }
  .bottom {
    flex-direction: column;
  }
}

@media (max-width: 700px) {
  .article {
    flex-direction: column;
  }
}
</style>
