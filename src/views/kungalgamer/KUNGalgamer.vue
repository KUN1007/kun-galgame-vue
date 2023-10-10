<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { UserInfo } from '@/api'

// 导入用户 store
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

// 导入左侧交互部分
import NavBar from './components/NavBar.vue'
// 导入头部
import Header from './components/Header.vue'
// 导入通用 Footer
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

// 从路由参数中获取当前的用户 uid
const uid = computed(() => {
  return parseInt(useRoute().params.uid as string)
})
const user = ref<UserInfo>()

// 获取当前用户信息
const getUser = async (uid: number) => {
  const userInfo = await useKUNGalgameUserStore().getUser(uid)
  return userInfo.data
}

// 挂载时获取用户信息
onMounted(async () => {
  user.value = await getUser(uid.value)

  // 更新用户本地保存的最新萌萌点，因为不是实时的
  useKUNGalgameUserStore().moemoepoint = user.value.moemoepoint
})
</script>

<template>
  <div class="root">
    <!-- 信息区域容器 -->
    <div class="container">
      <Header :name="user?.name" :moemoepoint="user?.moemoepoint" />
      <!-- 内容区 -->
      <div class="content">
        <NavBar />
        <RouterView :user="user" />
      </div>
    </div>
    <!-- 版权 -->
    <KUNGalgameFooter style="margin: 0 auto; padding-bottom: 17px" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
/* 页面头部 */
.container {
  /* 内容区占整个页面的比例 */
  width: 60%;
  height: 70%;
  /* 内容区的最大宽度和高度 */
  max-width: 1350px;
  max-width: 1200px;
  /* 背景色和边框阴影 */
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-4);
  box-shadow: var(--shadow);
  border-radius: 7px;
  /* 居中 */
  margin: auto;
  /* 竖直方向弹性盒 */
  display: flex;
  flex-direction: column;
  /* 用户页面的所有字体颜色 */
  color: var(--kungalgame-font-color-3);
  transition: all 0.2s;
}

.content {
  /* 使话题不溢出 */
  height: 1px;
  flex-grow: 1;
  display: flex;
}

@media (max-width: 1000px) {
  .container {
    width: 90%;
  }
}

@media (max-width: 700px) {
  .container {
    width: 97%;
    height: 90%;
  }
}
</style>
