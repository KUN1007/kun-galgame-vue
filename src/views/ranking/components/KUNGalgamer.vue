<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- 单个用户 -->
  <div class="single-kungalgamer">
    <!-- 头像和名字 -->
    <div class="avatar-name">
      <img src="@/assets/images/KUN.jpg" alt="KUN" />
      <span>鲲最可爱！</span>
    </div>
    <!-- 其它信息 -->
    <div class="detail">
      <!-- 萌萌点 -->
      <span>MOE: 1007</span>
      <!-- 点赞数 -->
      <span><Icon icon="line-md:thumbs-up-twotone" />1007</span>
      <!-- 贴子数 -->
      <span><Icon icon="line-md:text-box-multiple-twotone" />1007</span>
      <!-- 回帖数 -->
      <span><Icon icon="ri:reply-line" />1007</span>
      <!-- 评论数 -->
      <span><Icon icon="fa-regular:comment-dots" />1007</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 单个用户 */
.single-kungalgamer {
  height: 37px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--kungalgame-pink-4);
  margin: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 用户的头像和名字 */
.avatar-name {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 用户的头像 */
.avatar-name img {
  width: 30px;
  border-radius: 50%;
}
/* 用户的名字 */
.avatar-name span {
  margin-left: 5px;
}
.detail {
  display: flex;
  span {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
}
</style>
