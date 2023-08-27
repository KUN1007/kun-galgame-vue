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
// 楼主的发帖时间
import Time from '../components/Time.vue'
// 楼主话题的标签
import Tags from '../components/Tags.vue'

import { TopicDetail } from '@/api/topic/types/topic'
import { computed, onMounted, ref } from 'vue'

const topicData = defineProps<{
  topicData: TopicDetail
}>()

const width = ref('')

const {
  tid,
  title,
  views,
  likes,
  dislikes,
  replies,
  time,
  content,
  upvotes,
  tags,
  edited,
  user,
  rid,
} = topicData.topicData

onMounted(() => {
  width.value = computed(() => {
    return 100 + '%'
  }).value
})
</script>

<template>
  <!-- 楼主话题容器 -->
  <div class="container">
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
          <!-- 内容区右侧的话题展示区，这里富文本必须用 v-html，已经确定文本经过三次处理 -->
          <!-- 这里用的 v-html，样式是页面刷新后才会有的，所以必须动态绑定样式 -->
          <div class="text" v-html="content"></div>
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
        :info="{ views, likes, dislikes, replies, upvotes }"
      />
    </div>
  </div>
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
  /* 楼主话题距离其它人话题的距离 */
  margin-bottom: 5px;
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
  overflow: hidden;
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-5);
  box-sizing: border-box;
}

/* 楼主话题头部 */
.header {
  width: 100%;
  height: 70px;
  padding: 0 10px;
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

/* 内容区右侧的话题展示区 */
.text {
  width: 100%;
  font-size: 15px;
  padding: 17px;
  border-left: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-3);
  /* 逆天操作！我自己发明的！ */
  :deep(*) {
    max-width: v-bind(width);
    overflow-y: scroll;
  }
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
    flex-direction: column;
  }
}

@media (max-width: 700px) {
  .content-center {
    flex-direction: column;
  }
}
</style>
