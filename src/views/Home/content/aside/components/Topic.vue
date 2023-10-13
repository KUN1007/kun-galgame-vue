<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

import { HomeHotTopic, HomeNewTopic } from '@/api/home/types/home'
import { getHomeNavHotTopicApi, getHomeNavNewTopicApi } from '@/api/home/index'

// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
// 使用设置面板的 store
const settingsStore = storeToRefs(useKUNGalgameSettingsStore())

// 导入 i18n 格式化时间的函数
import { formatTimeDifference } from '@/utils/formatTime'

const navHotTopic = ref<HomeHotTopic[]>()
const navNewTopic = ref<HomeNewTopic[]>()

onMounted(async () => {
  const responseHotData = await getHomeNavHotTopicApi()
  navHotTopic.value = responseHotData.data

  const responseNewData = await getHomeNavNewTopicApi()
  navNewTopic.value = responseNewData.data
})
</script>

<template>
  <!-- 侧边栏动态推送今日热度话题 -->
  <div class="topic-wrap">
    <!-- 今日热度话题的标题名 -->
    <!-- 这里调用全局注册的 i18n 函数 $tm 对名字进行渲染 -->
    <div class="title-hot">
      {{ $tm(`mainPage.asideActive.hot`) }}
    </div>
    <!-- 热门话题的目录 -->
    <!-- 这里使用了父组件传过来的 isHotTopic 数据 -->
    <span class="topic-content hot-bg" v-for="kun in navHotTopic">
      <RouterLink :to="{ path: `/topic/${kun.tid}` }">
        <div class="topic">
          <div class="title">{{ kun.title }}</div>
          <div class="hot">
            <Icon icon="bi:fire" />
            <!-- 后端计算小数不精确，一律 ceil -->
            <span>{{ Math.ceil(kun.popularity) }}</span>
          </div>
        </div>
      </RouterLink>
    </span>

    <!-- 今日最新话题 -->
    <div class="title-new">
      {{ $tm(`mainPage.asideActive.new`) }}
    </div>
    <span class="topic-content new-bg" v-for="kun in navNewTopic">
      <RouterLink :to="{ path: `/topic/${kun.tid}` }">
        <div class="topic">
          <div class="title">{{ kun.title }}</div>
          <div class="new">
            <Icon icon="eos-icons:hourglass" />
            <span>{{
              formatTimeDifference(
                kun.time,
                settingsStore.showKUNGalgameLanguage.value
              )
            }}</span>
          </div>
        </div>
      </RouterLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
/* 侧边栏动态推送话题的总容器 */
.topic-wrap {
  /* 今日热门话题区域为竖直弹性盒 */
  display: flex;
  flex-direction: column;
}
/* 标题六个字的样式 */
.title-new,
.title-hot {
  height: 50px;
  /* 设置（今日热门话题）居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  /* 设置页面缩小到最小时该行不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 展示热门话题的区域 */
.topic-content {
  height: 43px;
  /* 热门话题标题部分为弹性盒 */
  display: flex;
  flex-direction: column;
  a {
    display: block;
    height: 100%;
    width: 100%;
  }
}
.title-hot {
  border: 3px dashed var(--kungalgame-trans-blue-1);
  border-bottom: none;
}
.title-new {
  border: 3px dashed var(--kungalgame-trans-pink-1);
  border-bottom: none;
  margin-top: 5px;
}
.hot-bg {
  background-color: var(--kungalgame-trans-blue-1);
}
.new-bg {
  background-color: var(--kungalgame-trans-pink-1);
}

/* 单个新话题的样式 */
.topic {
  width: 100%;
  display: flex;
  /* 设置空白左右居中 */
  justify-content: space-between;
  height: 100%;
  color: var(--kungalgame-font-color-3);
  align-items: center;
  cursor: pointer;
  /* 单个新话题的 hover */
  &:hover {
    box-shadow: var(--kungalgame-shadow-1);
  }
  &:active {
    box-shadow: var(--kungalgame-shadow-2);
  }
}
/* 单个话题的标题样式 */
.title {
  /* 单个话题标题左侧的一段距离 */
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 设置话题的字体大小 */
  font-size: smaller;
}
/* 设置单个话题右侧的热度值盒子 */
.new {
  /* 时间距离右侧的距离 */
  margin-right: 10px;
  display: flex;
  /* 右侧热度区域不换行 */
  white-space: nowrap;
  align-items: center;
  /* 设置 fa 图标字体的颜色 */
  color: var(--kungalgame-purple-4);
  span {
    font-size: xx-small;
    /* 右侧区域距离最右侧的距离 */
    margin-left: 5px;
    color: var(--kungalgame-font-color-3);
  }
}

/* 右侧区域的大小 */
.hot {
  /* 热度值距离右侧的距离 */
  margin-right: 10px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  color: var(--kungalgame-red-4);
  span {
    font-size: small;
    margin-left: 5px;
    color: var(--kungalgame-font-color-3);
  }
}
</style>
