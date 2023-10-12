<script setup lang="ts">
import TopicAsideNav from './TopicAsideNav.vue'
import TopicOtherTag from './TopicOtherTag.vue'
import TopicMaster from './TopicMaster.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

defineProps<{
  tags: string[]
}>()
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInLeft animate__faster"
    appear
  >
    <div class="aside">
      <TopicAsideNav />
      <TopicOtherTag style="margin-bottom: 17px" :tags="$props.tags" />
      <TopicMaster />
      <KUNGalgameFooter />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
/* 左侧内容区 */
.aside {
  /* 左侧区域的总高度 */
  height: 940px;
  /* 左侧区域宽度 */
  width: 100%;
  /* 左侧内容区为弹性盒，方便分成上下两部分 */
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  color: var(--kungalgame-font-color-3);
  margin-right: 5px;
}
</style>
