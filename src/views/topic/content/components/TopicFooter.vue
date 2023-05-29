<!-- 帖子的底部区域，推贴，回帖，点赞等 -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'
// 引入流光环绕的特效
import '@/styles/effect/effect.scss'
</script>

<template>
  <!-- 楼主帖子底部 -->
  <div class="footer">
    <!-- 底部左侧部分（点赞、推贴、踩） -->
    <div class="left">
      <ul>
        <!-- 推贴 -->
        <li>
          <span class="icon"><Icon icon="bi:rocket" /></span>
        </li>
        <!-- 点赞 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-up-twotone" /></span>
        </li>
        <!-- 踩 -->
        <li>
          <span class="icon"><Icon icon="line-md:thumbs-down-twotone" /></span>
        </li>
      </ul>
    </div>
    <!-- 底部右侧部分（回复、评论、只看、编辑） -->
    <div class="right">
      <ul>
        <li>
          <!-- 对所有此类元素应用样式 -->
          <div class="kungalgame-comet-surround">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            回帖
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
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主帖子底部 */
.footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 图标字体的样式 */
.icon {
  font-size: 24px;
  color: $kungalgame-font-color-2;
  cursor: pointer;
}
/* 底部左侧部分（点赞、推贴、踩） */
.left ul {
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin-left: 17px;
    &:nth-child(1) span {
      color: $kungalgame-red-4;
    }
  }
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
</style>
