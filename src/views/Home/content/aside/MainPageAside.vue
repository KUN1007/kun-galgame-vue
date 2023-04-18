<script lang="ts">
import AsideItem from "./item/AsideItem.vue";
import NewTopic from "./topic/NewTopic.vue";
import HotTopic from "./topic/HotTopic.vue";

export default {
  name: "MainPageAside",
  components: { AsideItem, HotTopic, NewTopic },
};
</script>

<template>
  <!-- 侧边栏 -->
  <div class="aside">
    <AsideItem />
    <HotTopic />
    <NewTopic />
  </div>
</template>

<style scoped>
/* 侧边栏部分 */
.aside {
  /* 侧边栏距离文章区域的距离 */
  margin-right: 5px;
  width: 240px;
  /* 侧边栏相对于整体可视部分的占比 */
  /* 侧边栏高度 */
  height: 100%;
  /* 设置侧边栏为弹性盒子 */
  display: flex;
  /* 方向为竖向 */
  flex-direction: column;
}
</style>
