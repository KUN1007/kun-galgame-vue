<!-- 
  这是 KUNGalgame 话题展示区域下方的其他人话题展示部分，任何非楼主发布的话题将会被展示在这里

  这个区域包含所有人回复给楼主的话题，其中每个人的话题将会被拆分成为单独的组件
 -->
<script setup lang="ts">
// 导入评论组件
import Comments from '../components/Comments.vue'
// 导入 Footer 组件
import TopicFooter from './../components/TopicFooter.vue'
// 导入发布时间组件
import Time from './../components/Time.vue'
// 导入标签组件
import Tags from './../components/Tags.vue'
// 导入重新编辑
import Rewrite from './../components/Rewrite.vue'
// 导入发帖人个人信息
import KUNGalgamerInfo from './../components/KUNGalgamerInfo.vue'

import { TopicReply } from '@/api/index'

defineProps<{
  repliesData: TopicReply[]
}>()
</script>

<template>
  <!-- 其它人的回复 -->
  <div
    class="other-topic-container"
    v-for="(reply, index) in repliesData"
    :key="index"
  >
    <!-- 每个人的单个话题 -->
    <!-- 楼层标志 -->
    <div class="floor">
      <span>F{{ reply.floor }}</span>
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
                <!-- TODO: 跳转到页面中话题的位置 -->
                <span
                  >回复给 @
                  <router-link to="#">{{
                    reply.to_user.name
                  }}</router-link></span
                >
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
      <TopicFooter
        :isOthersTopic="true"
        :info="{
          likes: reply.likes,
          dislikes: reply.dislikes,
          replies: reply.cid.length,
          upvotes: reply.upvote,
        }"
      />
      <Comments />
    </div>
  </div>
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
  padding: 5px;
  border-bottom: none;
  /* 这里的阴影只能这么绘制 */
  filter: drop-shadow(1px 2px 4px var(--kungalgame-trans-blue-4));
  span {
    transform: rotate(10deg) translateY(10px) translateX(30px);
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
  a {
    color: var(--kungalgame-blue-5);
    font-weight: 500;
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
