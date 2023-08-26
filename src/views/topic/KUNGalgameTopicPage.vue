<!-- 
  KUNGalgame 的话题页面
 -->
<script setup lang="ts">
import KUNGalgameTopicAside from './aside/KUNGalgameTopicAside.vue'
import KUNGalgameTopicContent from './content/KUNGalgameTopicContent.vue'

// 异步导入回复面板
import { defineAsyncComponent, onBeforeMount } from 'vue'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'
import { onBeforeRouteLeave } from 'vue-router'

// 使用话题页面的 store
const settingsStore = useKUNGalgameTopicStore()
const { isShowAdvance, isEdit } = storeToRefs(settingsStore)

const ReplyPanel = defineAsyncComponent(
  () => import('@/views/topic/content/components/ReplyPanel.vue')
)

// 在页面跳转和刷新时重置回复面板状态
const resetPanelStatus = () => {
  isEdit.value = false
  isShowAdvance.value = false
}

onBeforeRouteLeave(() => {
  resetPanelStatus()
})

onBeforeMount(() => {
  resetPanelStatus()
})
</script>

<template>
  <!-- 回复面板组件 -->
  <ReplyPanel />
  <!-- 总容器 -->
  <div class="main-wrapper">
    <!-- 下面话题详情区的容器 -->
    <div class="topic-wrapper">
      <!-- 下方可视内容区的容器 -->
      <div class="content-wrapper">
        <KUNGalgameTopicAside class="aside" style="margin-right: 10px" />
        <KUNGalgameTopicContent />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 页面总容器 */
.main-wrapper {
  min-height: 1500px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
/* 下面话题详情区的容器 */
.topic-wrapper {
  display: flex;
  flex-shrink: 0;
}
/* 下方可视内容区的容器 */
.content-wrapper {
  width: 90%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  /* 设置背景的毛玻璃效果 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  /* 设置背景边框和圆角 */
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
}

@media (max-width: 1000px) {
  .aside {
    display: none;
  }
  .content-wrapper {
    padding: 0;
  }
}
</style>
