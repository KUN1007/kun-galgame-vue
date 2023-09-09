<script setup lang="ts">
import { Icon } from '@iconify/vue'

// 导入 i18n 格式化时间的函数
import { formatTimeDifference } from '@/utils/formatTime'

// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
// 使用设置面板的 store
const settingsStore = storeToRefs(useKUNGalgameSettingsStore())

import { getPlainText } from '@/utils/getPlainText'

const props = defineProps(['data'])

const plainText = getPlainText(props.data.content)
</script>
<template>
  <!-- 话题信息 -->
  <div class="topic-info">
    <!-- 话题的概览信息 -->
    <div class="summary">
      <!-- 话题的标题 -->
      <div class="title">
        <span>{{ props.data.title }}</span>
      </div>
      <!-- 话题的状态，点赞数等 -->
      <div class="status">
        <ul>
          <li>
            <Icon icon="ic:outline-remove-red-eye" /><span>{{
              props.data.views
            }}</span>
          </li>
          <li>
            <Icon icon="line-md:thumbs-up-twotone" /><span>{{
              props.data.likes
            }}</span>
          </li>
          <li>
            <Icon icon="ri:reply-line" /><span>{{ props.data.replies }}</span>
          </li>
        </ul>

        <!-- 话题的发布日期 -->
        <div class="time">
          <span>{{
            formatTimeDifference(
              props.data.time,
              settingsStore.showKUNGalgameLanguage.value
            )
          }}</span>
        </div>
      </div>
    </div>

    <!-- 话题的预览介绍 -->
    <div class="introduction">
      <p>
        {{ plainText }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 话题信息 */
.topic-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--kungalgame-font-color-3);
}

/* 话题展示的头部 */
.summary {
  width: 100%;
  /* 头部三个小部分为弹性盒 */
  display: flex;
  justify-content: space-between;
}
/* 话题的头部信息，标题日期等 */
.title {
  width: 100%;
  height: 100%;
  /* 超出不换行省略 */
  display: flex;
  align-items: center;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* 话题点赞数等信息 */
.status {
  display: flex;
  align-items: center;
  white-space: nowrap;
  ul {
    display: flex;
    color: var(--kungalgame-font-color-2);
    font-size: smaller;
    li {
      margin-left: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        margin-left: 3px;
      }
    }
  }
}
/* 发帖日期 */
.time {
  width: 77px;
  font-size: x-small;
  color: var(--kungalgame-font-color-0);
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 不换行 */
  overflow: hidden;
  white-space: nowrap;
}
/* 话题的预览介绍 */
.introduction {
  width: 100%;
  display: flex;
  align-items: center;
  /* 设置文本超过两行就显示省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  cursor: pointer;
  p {
    width: 100%;
    font-size: 14px;
    color: var(--kungalgame-font-color-2);
  }
}
</style>
