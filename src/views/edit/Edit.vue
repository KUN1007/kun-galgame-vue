<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// 引入编辑器
import QuillEditor from '@/components/quill-editor/QuillEditor.vue'
import Tags from './components/Tags.vue'
import Footer from './components/Footer.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

// 导入编辑话题的 store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// 使用编辑话题的 store
const { topicRewrite } = storeToRefs(useKUNGalgameEditStore())
// 使用设置面板的 store
const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())
const editPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Edit + '%'
})

// 路由离开时提醒用户发布重新编辑的话题
onBeforeRouteLeave(async (to, from, next) => {
  // 如果是正在更新话题
  if (topicRewrite.value.isTopicRewriting) {
    // 获取用户点击的结果
    const res = await useKUNGalgameMessageStore().alert(
      'AlertInfo.edit.leave',
      true
    )
    if (res) {
      // 重置重新编辑话题的数据
      useKUNGalgameEditStore().resetRewriteTopicData()
      // 用户确认离开，继续导航
      next()
    } else {
      // 用户取消离开，阻止导航
      next(false)
    }
  } else {
    next()
  }
})
</script>

<template>
  <div class="root">
    <!-- 内容区容器 -->
    <div class="container">
      <!-- 编辑器 -->
      <QuillEditor
        class="editor"
        :isShowToolbar="true"
        :isShowAdvance="true"
        :isShowTitle="true"
        :isShowSettings="true"
      />

      <!-- 内容区的底部 -->
      <div class="content-footer">
        <Tags />

        <Footer />
      </div>
    </div>

    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto; padding-top: 10px" />
    <span style="margin: 0 auto; color: var(--kungalgame-font-color-3)"
      >Editor powered by quill</span
    >
  </div>
</template>

<style lang="scss" scoped>
.root {
  margin-top: 20px;
  height: calc(100vh - 65px);
  min-height: 1000px;
  display: flex;
  flex-direction: column;
}

/* 内容部分的总容器 */
.container {
  transition: all 0.2s;
  width: v-bind(editPageWidth);
  max-width: 1500px;
  margin: 0 auto;
  /* 容器的阴影 */
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-2);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
}

.content-footer {
  padding: 10px;
  /* 距离内容区的距离 */
  padding-top: 17px;
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
