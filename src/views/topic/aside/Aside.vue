<script setup lang="ts">
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 Vue 函数
import { ref, watch } from 'vue'
import AsideActive from './components/AsideActive.vue'

import AsideBase from './components/AsideBase.vue'

defineProps<{
  tags: string[]
}>()

// 导入用户 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const { isActiveAside } = storeToRefs(useKUNGalgameTopicStore())

const asideWidth = ref('250px')
const handleFold = () => {
  isActiveAside.value = !isActiveAside.value
}
watch(
  isActiveAside,
  () => {
    asideWidth.value = isActiveAside.value ? '250px' : '40px'
  },
  { immediate: true }
)
</script>

<template>
  <!-- 侧边栏 -->
  <div class="aside">
    <!-- 侧边栏交互 -->
    <div class="nav-aside" @click="handleFold">
      <!-- fa 箭头图标字体 -->
      <Icon
        icon="line-md:arrow-left"
        style="font-size: 17px"
        v-if="isActiveAside"
      />
      <Icon
        icon="line-md:arrow-right"
        style="font-size: 17px"
        v-if="!isActiveAside"
      />
      <span v-if="isActiveAside">{{ $tm('mainPage.asideActive.fold') }}</span>
    </div>
    <div class="item-active" v-if="isActiveAside">
      <AsideActive :tags="$props.tags" />
    </div>

    <div class="item" v-if="!isActiveAside">
      <AsideBase :isActive="!isActiveAside" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 侧边栏部分 */
.aside {
  /* 侧边栏距离文章区域的距离 */
  margin-right: 5px;
  width: v-bind('asideWidth');
  /* 侧边栏相对于整体可视部分的占比 */
  /* 侧边栏高度 */
  height: 100%;
  /* 设置侧边栏为弹性盒子 */
  display: flex;
  /* 方向为竖向 */
  flex-direction: column;
  transition: 0.5s;
  span {
    white-space: nowrap;
  }
  overflow-y: scroll;
  flex-shrink: 0;
}
/* 侧边栏交互 */
.nav-aside {
  height: 40px;
  /* 内容居中（折叠左侧区域） */
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* 字体设置 */
  font-size: small;
  color: var(--kungalgame-font-color-3);
  cursor: pointer;
}
/* 激活后的左侧区域 */
.item-active {
  display: flex;
  flex-grow: 1;
}
/* 未激活的左侧区域 */
.item {
  height: 96.6%;
}
</style>
