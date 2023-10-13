<!-- 这个部分为发帖人的个人信息展示部分 -->
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  user: {
    uid: number
    name: string
    avatar: string
    moemoepoint: number
  }
}>()

const user = computed(() => props.user)
</script>

<template>
  <!-- 内容区左侧用户的信息 -->
  <div class="kungalgamer">
    <!-- 头像 -->
    <div class="avatar">
      <!-- 头像图片 TODO: -->
      <RouterLink :to="`/kungalgamer/${user.uid}/info`">
        <img src="@/assets/images/KUN.jpg" alt="KUN" />
      </RouterLink>
    </div>
    <div class="info">
      <!-- 名字 -->
      <div class="name">
        {{ user.name }}
      </div>
      <!-- 萌萌点 -->
      <div class="moemoepoint">{{ user.moemoepoint }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 内容区左侧用户信息 */
.kungalgamer {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 20px;
  color: var(--kungalgame-font-color-3);
}
/* 头像 */
.avatar {
  /* 图像加载不出来时页面不塌陷 */
  width: 100px;
  margin-top: 17px;
  img {
    width: 100px;
  }
}
/* 名字 */
.name {
  font-size: small;
  display: flex;
  justify-content: center;
  margin-top: 17px;
  font-size: 17px;
}
/* 萌萌点 */
.moemoepoint {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

@media (max-width: 700px) {
  .kungalgamer {
    flex-direction: row;
    justify-content: center;
    margin-top: 17px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--kungalgame-blue-1);
  }
  .avatar {
    /* 图像加载不出来时页面不塌陷 */
    width: 70px;
    margin-top: 10px;
    img {
      width: 70px;
    }
  }
  .info {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
