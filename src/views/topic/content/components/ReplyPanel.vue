<script setup lang="ts">
// 导入 Vue 异步函数
import { defineAsyncComponent } from 'vue'

// 导入编辑器
import WangEditor from '@/components/WangEditor.vue'

// 异步导入帖子标签
const Tags = defineAsyncComponent(
  () => import('@/views/edit/components/Tags.vue')
)

// 导入回复按钮
import ReplyPanelBtn from './ReplyPanelBtn.vue'

// 导入帖子页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 使用帖子页面的 store
const settingsStore = useKUNGalgameTopicStore()
const { isShowAdvance } = storeToRefs(settingsStore)

const props = defineProps(['isReply'])
</script>

<template>
  <Teleport to="body" :disabled="props.isReply">
    <div class="root">
      <div class="container">
        <!-- 回复面板回复给谁 -->
        <div class="title"><h3>回复给 @ 啊这可海星（楼主）</h3></div>
        <!-- 回复的编辑器 -->
        <div class="content">
          <WangEditor :height="300" :isShowToolbar="isShowAdvance" />
        </div>
        <!-- 回复的页脚 -->
        <div class="footer">
          <Tags
            style="margin-top: 10px; margin-bottom: 10px"
            v-if="isShowAdvance"
          />
          <ReplyPanelBtn />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.title {
  margin-bottom: 10px;
}
.root {
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.92;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 90%;
  max-width: 1000px;
  color: var(--kungalgame-font-color-3);
  background-color: var(--kungalgame-white);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--kungalgame-blue-4);
  box-shadow: var(--shadow);
}
</style>
