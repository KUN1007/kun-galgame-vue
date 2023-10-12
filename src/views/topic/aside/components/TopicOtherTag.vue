<!-- 
  这里是楼主的其他话题组件
 -->
<script setup lang="ts">
import { onMounted, ref, toRaw } from 'vue'
import { useRoute } from 'vue-router'

import { TopicAside } from '@/api/index'

// 导入 topic store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'

const props = defineProps<{
  tags: string[]
}>()
const tags = toRaw(props.tags)

// 当前路由实例
const route = useRoute()
// 当前所在话题的 id
const tid = parseInt(route.params.tid as string)

const topicData = ref<TopicAside[]>()

const fetchTopicData = async () => {
  topicData.value = (
    await useKUNGalgameTopicStore().getRelatedTopicsByTags({
      tags: tags,
      tid: tid,
    })
  ).data
}

onMounted(async () => {
  fetchTopicData()
})
</script>

<template>
  <!-- 相同标签下的其它话题 -->
  <div class="other" v-if="topicData?.length">
    <div class="title">
      {{ $tm('topic.aside.tags') }}
    </div>
    <div class="topic" v-for="(kun, index) in topicData" :key="index">
      <router-link :to="`/topic/${kun.tid}`">{{ kun.title }}</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主的其它话题 */
.other {
  width: 100%;

  /* 隐藏溢出的颜色 */
  overflow: hidden;
  border-radius: 5px;
  box-shadow: var(--shadow);

  /* 上方区域的配色 */
  border: 1px solid var(--kungalgame-blue-1);
  background-color: var(--kungalgame-trans-blue-0);

  height: 340px;
  display: flex;
  flex-direction: column;

  .title {
    /* 左侧没有 border，没有 hover */
    border-left: 0;
    /* 相对于单个话题标题的比例 */
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    color: var(--kungalgame-font-color-2);
    background-color: var(--kungalgame-trans-blue-1);
    /* 与单个话题标题的分割线 */
    border-bottom: 1px solid var(--kungalgame-blue-1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topic {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 设置左侧的 border 方便制作 hover */
    border-left: 4px solid transparent;
    &:hover {
      border-left: 4px solid var(--kungalgame-pink-3);
      background-color: var(--kungalgame-trans-blue-1);
      transition: 0.2s;
    }
    a {
      width: 100%;
      height: 100%;
      /* 左右两侧的距离 */
      margin: 0 17px;
      color: var(--kungalgame-font-color-3);
      /* 标题显示两行、超出部分隐藏 */
      overflow: hidden; /* 超出部分隐藏 */
      text-overflow: ellipsis; /* 显示省略号 */
      display: -webkit-box; /* 将文本框转化为弹性伸缩盒子 */
      -webkit-box-orient: vertical; /* 设置为纵向排列 */
      -webkit-line-clamp: 2; /* 显示两行文本 */
      /* 标题的字体属性 */
      font-size: small;
      display: flex;
      align-items: center;
    }
  }
}
</style>
