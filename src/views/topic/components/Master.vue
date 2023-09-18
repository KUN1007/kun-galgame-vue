<!-- 
  这是 KUNGalgame 话题展示区域楼主话题的区域，楼主的话题将会被展示在这里，位于话题展示区域最上方
 -->
<script setup lang="ts">
// 楼主话题的 Footer
import TopicFooter from '../components/TopicFooter.vue'
// 楼主话题是否重新编辑
import Rewrite from '../components/Rewrite.vue'
// 楼主的信息
import KUNGalgamerInfo from '../components/KUNGalgamerInfo.vue'
// 话题内容展示区
import Content from './Content.vue'
// 楼主的发帖时间
import Time from '../components/Time.vue'
// 楼主话题的标签
import Tags from '../components/Tags.vue'

import { TopicDetail } from '@/api/topic/types/topic'

const topicData = defineProps<{
  topicData: TopicDetail
}>()

const {
  tid,
  title,
  views,
  likes,
  dislikes,
  time,
  content,
  upvotes,
  tags,
  edited,
  user,
  rid,
} = topicData.topicData
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInRight animate__faster"
    appear
  >
    <!-- 楼主话题容器，这个 id 是方便点击跳转的 -->
    <div class="container" :id="`kungalgame-reply-0`">
      <!-- 楼主话题内容区的容器 -->
      <div class="content-container">
        <!-- 楼主话题头部 -->
        <div class="header">
          <!-- 楼主话题标题 -->
          <div class="title">
            {{ title }}
          </div>
        </div>
        <!-- 楼主话题内容区 -->
        <div class="content">
          <!-- 内容区的顶部 -->
          <div class="content-top">
            <Tags v-if="tags" :tags="tags" />
            <Time v-if="time" :time="time" />
          </div>
          <!-- 内容区的中部 -->
          <div class="content-center">
            <KUNGalgamerInfo v-if="user" :user="user" />

            <!-- 富文本内容展示区域 -->
            <Content :content="content" />
          </div>
          <!-- 内容区的底部 -->
          <div class="content-bottom">
            <!-- 话题状态 -->
            <div>话题状态：<span>正常</span></div>
            <Rewrite v-if="edited" :time="edited" />
          </div>
        </div>
        <!-- 话题的点赞数等信息 -->
        <TopicFooter
          :isOthersTopic="false"
          :info="{ views, likes, dislikes, upvotes, to_floor: 0 }"
          :r-user="user"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
/* 楼主话题容器 */
.container {
  width: 100%;
  /* 楼主话题最小高度 */
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  /* TODO: */
  /* 楼主话题背景图 */
}

/* 楼主话题内容区的容器 */
.content-container {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-5);
  box-sizing: border-box;
}

/* 楼主话题头部 */
.header {
  width: 100%;
  min-height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--kungalgame-font-color-3);
  font-size: 17px;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  box-sizing: border-box;
}
/* 楼主话题标题 */
.title {
  font-size: 17px;
  font-weight: bold;
  /* 文字间距 */
  letter-spacing: 1px;
}

/* 楼主话题内容区 */
.content {
  display: flex;
  flex-direction: column;
}
/* 内容区的顶部 */
.content-top {
  width: 100%;
  max-height: 100px;
  display: flex;
  text-align: center;
  /* 时间和标签分居两侧 */
  justify-content: space-between;
  /* 下面的分割线 */
  border-bottom: 1px solid var(--kungalgame-blue-1);
  box-sizing: border-box;
  flex-grow: 1;
}

/* 楼主的话题和楼主的信息容器 */
.content-center {
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  box-sizing: border-box;
}

/* 内容区的底部 */
.content-bottom {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--kungalgame-blue-1);
  div {
    display: flex;
    font-size: 12px;
    margin-left: 10px;
    color: var(--kungalgame-font-color-3);
    /* 话题状态 */
    span {
      width: 30px;
      padding: 1px;
      background-color: var(--kungalgame-green-4);
      color: var(--kungalgame-white);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (max-width: 1000px) {
  .content-top {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 700px) {
  .content-center {
    flex-direction: column;
  }
}
</style>
