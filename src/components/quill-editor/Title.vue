<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

// 导入编辑话题的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

// 导入防抖函数
import { debounce } from '@/utils/debounce'

const { isSaveTopic, title, topicRewrite } = storeToRefs(
  useKUNGalgameEditStore()
)

// 话题标题的文字
const topicTitle = ref('')
// 标题的最大长度
const maxInputLength = 40

onBeforeMount(() => {
  /**
   * 编辑器处于编辑界面
   */
  if (isSaveTopic.value) {
    topicTitle.value = title.value
  }
  /**
   * 编辑器处于重新编辑的编辑界面
   */
  // 挂载之前载入重新编辑话题的数据
  if (topicRewrite.value.isTopicRewriting) {
    topicTitle.value = topicRewrite.value.title
  }
})

// 处理用户输入
const handelInput = () => {
  // 标题不能超过 40 字
  if (topicTitle.value.length > maxInputLength) {
    topicTitle.value = topicTitle.value.slice(0, maxInputLength)
  }

  // 用户输入了纯空格
  if (topicTitle.value.trim() === '') {
    return
  }

  // 创建一个防抖处理函数
  const debouncedInput = debounce(() => {
    /**
     * 编辑器处于回复界面
     */
    // 不是重新编辑则保存在 edit 界面的 store
    if (!topicRewrite.value.isTopicRewriting) {
      // 过滤 xss
      title.value = topicTitle.value
    }
    /**
     * 编辑器处于重新编辑的编辑界面
     */
    // 重新编辑则保存在重新编辑界面的 store
    if (topicRewrite.value.isTopicRewriting) {
      topicRewrite.value.title = topicTitle.value
    }
  }, 300)

  // 调用防抖处理函数，会在延迟时间内只执行一次更新操作
  debouncedInput()
}
</script>

<template>
  <!-- 话题的标题 -->
  <div class="title">
    <input
      type="text"
      :placeholder="`${$tm('edit.title')}`"
      v-model="topicTitle"
      @input="handelInput"
      :maxlength="maxInputLength"
    />
  </div>
</template>

<style lang="scss" scoped>
/* 话题的发布标题 */
.title {
  padding: 10px;
  width: 100%;
}

/* 话题标题的输入框 */
.title input {
  background-color: var(--kungalgame-white-9);
  color: var(--kungalgame-font-color-2);
  /* 距离外轮廓的距离 */
  padding: 7px;
  /* 内边距盒子 */
  box-sizing: border-box;
  width: 100%;
  /* 标题输入字体大小 */
  font-size: 40px;
  border: none;
}
</style>
