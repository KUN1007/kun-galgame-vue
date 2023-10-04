<!-- 
  这是 KUNGalgame 话题展示区域楼主话题的区域，楼主的话题将会被展示在这里，位于话题展示区域最上方
 -->
<script setup lang="ts">
// 楼主话题的 Footer
import MasterFooter from './MasterFooter.vue'
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
import { computed } from 'vue'

// 导入计算时间差的函数
import { hourDiff } from '@/utils/time'

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
  // rid,
  status,
  share,
  category,
  // popularity,
  upvote_time,
} = topicData.topicData

// 话题的状态
const loliStatus = computed(() => {
  // 被推在 10h 之内则显示被推
  if (hourDiff(upvote_time, 10)) {
    return 'featured'
  }

  if (status === 0) {
    return 'normal'
  } else if (status === 1) {
    return 'banned'
  } else {
    return ''
  }
})
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
            <div class="status">
              <span>{{ `${$tm('topic.content.status')}:` }}</span>
              <span :class="loliStatus">{{ loliStatus }}</span>
            </div>
            <Rewrite v-if="edited" :time="edited" />
          </div>
        </div>
        <!-- 话题的点赞数等信息，被作用人就是该话题的发布人 -->
        <MasterFooter
          :info="{
            tid,
            views,
            likes,
            dislikes,
            upvotes,
            share,
          }"
          :topic="{ tid, title, content, tags, category }"
          :master="user"
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
  transition: all 0.5s;
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
}

/* 话题状态 */
.status {
  display: flex;
  font-size: 12px;
  margin-left: 10px;
  color: var(--kungalgame-font-color-3);
  /* 话题状态 */
  span {
    &:nth-child(1) {
      margin-right: 5px;
    }
    &:nth-child(2) {
      width: 50px;
      padding: 1px;
      color: var(--kungalgame-white);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

/* 话题的 status */
.normal {
  background-color: var(--kungalgame-green-4);
}

.banned {
  background-color: var(--kungalgame-gray-4);
}

.featured {
  background-color: var(--kungalgame-pink-3);
}

/* 话题被点击跳转 */
/* 滚动到指定话题激活后的样式 */
.active .content-container {
  border: 1px solid var(--kungalgame-red-3);
  background-color: var(--kungalgame-trans-red-1);
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
