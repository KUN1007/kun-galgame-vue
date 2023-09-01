<script setup lang="ts">
// 导入图标
import { Icon } from '@iconify/vue'

// 导入动画
import 'animate.css'

// 导入 Vue 异步函数
import { defineAsyncComponent } from 'vue'

// 导入编辑器
import Milkdown from '@/components/Milkdown/MilkdownProvider.vue'

// 异步导入话题标签
const Tags = defineAsyncComponent(
  () => import('@/views/edit/components/Tags.vue')
)

// 导入回复按钮
import ReplyPanelBtn from './ReplyPanelBtn.vue'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 使用话题页面的 store
const settingsStore = useKUNGalgameTopicStore()
const { isShowAdvance, isEdit } = storeToRefs(settingsStore)

const handelClosePanel = () => {
  isShowAdvance.value = false
  isEdit.value = false
}
</script>

<template>
  <Teleport to="body" :disabled="isEdit">
    <Transition
      enter-active-class="animate__animated animate__bounceInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutDown animate__faster"
    >
      <div class="root" v-if="isEdit">
        <div class="container">
          <!-- 回复面板回复给谁 -->
          <div class="title">
            <h3>回复给 @ <span>啊这可海星</span>（楼主）</h3>
            <Icon
              @click="handelClosePanel"
              class="close"
              icon="line-md:close"
            />
          </div>
          <!-- 回复的编辑器 -->
          <div class="content">
            <Milkdown />
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
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.close {
  font-size: 30px;
  cursor: pointer;
  color: var(--kungalgame-font-color-1);
}
.root {
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.92;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
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

.title {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    cursor: pointer;
    color: var(--kungalgame-blue-5);
    border-bottom: 2px solid var(--kungalgame-white-9);
    &:hover {
      border-bottom: 2px solid var(--kungalgame-blue-5);
    }
  }
}
</style>
