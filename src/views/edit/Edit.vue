<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import KUNGalgameEditor from '@/components/editor/KUNGalgameEditor.vue'
import Tags from './components/Tags.vue'
import Footer from './components/Footer.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

// 导入编辑帖子的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { storeToRefs } from 'pinia'

// 导入防抖函数
import { debounce } from '@/utils/debounce'

const topicData = storeToRefs(useKUNGalgameEditStore())

// 话题标题的文字
const topicTitle = ref('')
// 标题的最大长度
const maxInputLength = 40

onBeforeMount(() => {
  if (topicData.isSave.value) {
    topicTitle.value = topicData.title.value
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
    // 过滤 xss
    topicData.title.value = topicTitle.value
  }, 300)

  // 调用防抖处理函数，会在延迟时间内只执行一次更新操作
  debouncedInput()
}
</script>

<template>
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 内容区容器 -->
      <div class="content">
        <!-- 内容区的头部 -->
        <div class="header">
          <!-- 话题的标题 -->
          <div class="title">
            <input
              type="text"
              placeholder="请输入话题的标题（40字以内）"
              v-model="topicTitle"
              @input="handelInput"
              :maxlength="maxInputLength"
            />
          </div>
        </div>
        <!-- 编辑器 -->
        <KUNGalgameEditor />
      </div>

      <!-- 内容区的底部 -->
      <div class="content-footer">
        <Tags />

        <Footer />
      </div>
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto" />
    <span style="margin: 0 auto; color: var(--kungalgame-font-color-3)"
      >Editor powered by wangEditor</span
    >
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
}

.root {
  height: 100vh;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
}

/* 内容部分的总容器 */
.container {
  transition: all 0.2s;
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
  /* 容器的阴影 */
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-2);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
  padding: 10px;
}

/* 容器的顶部 */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 话题的发布标题 */
.title {
  width: 100%;
}

/* 话题标题的输入框 */
.title input {
  color: var(--kungalgame-font-color-2);
  /* 距离外轮廓的距离 */
  padding: 7px;
  /* 内边距盒子 */
  box-sizing: border-box;
  width: 100%;
  /* 标题输入字体大小 */
  font-size: 40px;
  border: 1px solid var(--kungalgame-blue-4);
  background-color: var(--kungalgame-white);
  margin-bottom: 10px;
}

/* 标题输入框 focus 之后的样式 */
.title input:focus {
  box-shadow: 0px 0px 5px var(--kungalgame-blue-4);
}

.content-footer {
  /* 距离内容区的距离 */
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
</style>
