<!-- 话题的底部区域，推话题，回复，点赞等 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
// 引入流光环绕的特效
import '@/styles/effect/effect.scss'

// 导入话题页面 store
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// 使用话题页面的 store
const settingsStore = useKUNGalgameTopicStore()
const { isEdit } = storeToRefs(settingsStore)

// 接受父组件的传值
const props = defineProps(['isOthersTopic'])

const isOthersTopic = props.isOthersTopic

const handelReply = () => {
  isEdit.value = true
}
</script>

<template>
  <!-- 楼主话题底部 -->
  <div class="footer">
    <!-- 底部左侧部分（点赞、推话题、踩） -->
    <div class="left">
      <ul>
        <!-- 查看数量 -->
        <li>
          <span class="icon"><Icon icon="ic:outline-remove-red-eye" /></span>
          1007
        </li>
        <!-- 推话题 -->
        <li>
          <span class="icon"><Icon icon="bi:rocket" /></span>
          1007
        </li>
        <!-- 点赞 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-up-twotone" /></span>
          1007
        </li>
        <!-- 踩 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-down-twotone" /></span>
          1007
        </li>
      </ul>
    </div>
    <!-- 底部右侧部分（回复、评论、只看、编辑） -->
    <div class="right">
      <ul>
        <li>
          <!-- 对所有此类元素应用样式 -->
          <div class="kungalgame-comet-surround" @click="handelReply">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            回复
          </div>
        </li>
        <!-- 分享 -->
        <li>
          <span class="icon"><Icon icon="majesticons:share-line" /></span>
        </li>
        <!-- 只看 -->
        <li>
          <span class="icon"><Icon icon="ph:user-focus-duotone" /></span>
        </li>
        <!-- 编辑 -->
        <li>
          <span class="icon"><Icon icon="line-md:pencil-twotone-alt" /></span>
        </li>
        <li v-if="isOthersTopic">
          <span class="icon"><Icon icon="fa-regular:comment-dots" /></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主话题底部 */
.footer {
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 底部左侧部分（点赞、推话题、踩） */
.left ul {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--kungalgame-font-color-3);
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-left: 17px;
    span {
      display: flex;
      margin-right: 3px;
    }
    &:nth-child(2) span {
      color: var(--kungalgame-red-4);
    }
  }
}
/* 图标字体的样式 */
.icon {
  font-size: 24px;
  color: var(--kungalgame-font-color-2);
  cursor: pointer;
}
/* 底部右侧部分（回复、评论、只看、编辑） */
.right ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  li {
    margin-right: 17px;
    &:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (max-width: 700px) {
  .footer {
    flex-direction: column;
  }
}
</style>
