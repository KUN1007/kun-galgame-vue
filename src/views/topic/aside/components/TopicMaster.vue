<!-- 
  这里是楼主的其他话题组件
 -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import TopicAsideSkeleton from '@/components/skeleton/topic/TopicAsideSkeleton.vue'

import { TopicAside } from '@/api/index'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'

const route = useRoute()

const tid = route.params.tid as string

const topicData = ref<TopicAside[]>()

const fetchTopicData = async () => {
  return (
    await useKUNGalgameTopicStore().getPopularTopicsByUserUid({
      tid: tid,
    })
  ).data
}

onMounted(async () => {
  topicData.value = await fetchTopicData()
})
</script>

<template>
  <div class="master">
    <div class="title">
      {{ $tm('topic.aside.master') }}
    </div>

    <TopicAsideSkeleton v-if="!topicData" />

    <div
      class="topic"
      v-else-if="topicData"
      v-for="(kun, index) in topicData"
      :key="index"
    >
      <RouterLink :to="`/topic/${kun.tid}`">{{ kun.title }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.master {
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: var(--shadow);
  border: 1px solid var(--kungalgame-trans-pink-2);
  background-color: var(--kungalgame-trans-pink-0);
  height: 340px;
  display: flex;
  flex-direction: column;

  .title {
    border-left: 0;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    color: var(--kungalgame-font-color-2);
    background-color: var(--kungalgame-trans-pink-1);
    border-bottom: 1px solid var(--kungalgame-trans-pink-2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topic {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 4px solid transparent;

    &:hover {
      border-left: 4px solid var(--kungalgame-blue-3);
      background-color: var(--kungalgame-trans-pink-1);
      transition: 0.2s;
    }

    a {
      width: 100%;
      height: 100%;
      margin: 0 17px;
      color: var(--kungalgame-font-color-3);
      overflow: hidden; /* Hide the overflow */
      text-overflow: ellipsis; /* Display ellipsis (three dots) for overflowed text */
      display: -webkit-box; /* Convert the text box into a flexible box */
      -webkit-box-orient: vertical; /* Set it to arrange vertically */
      -webkit-line-clamp: 2; /* Display two lines of text */
      font-size: small;
      display: flex;
      align-items: center;
    }
  }
}
</style>
