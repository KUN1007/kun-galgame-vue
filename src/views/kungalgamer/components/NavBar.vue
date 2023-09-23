<script setup lang="ts">
interface nav {
  index: number
  name: string
  router: string
}

const navBar: nav[] = [
  {
    index: 1,
    name: '个人信息',
    router: '/kungalgamer/kungalgamer/info',
  },
  {
    index: 2,
    name: '信息设置',
    router: '/kungalgamer/kungalgamer/settings',
  },
  {
    index: 3,
    name: '邮箱密码',
    router: '/kungalgamer/kungalgamer/password',
  },
  {
    index: 4,
    name: '发的话题',
    router: '/kungalgamer/kungalgamer/topic',
  },
  {
    index: 5,
    name: '赞的话题',
    router: '/kungalgamer/kungalgamer/topic',
  },
  {
    index: 6,
    name: '推的话题',
    router: '/kungalgamer/kungalgamer/topic',
  },
  {
    index: 7,
    name: '发的回复',
    router: '/kungalgamer/kungalgamer/topic',
  },
  {
    index: 8,
    name: '发的评论',
    router: '/kungalgamer/kungalgamer/topic',
  },
]
</script>

<template>
  <!-- 左侧交互区 -->
  <div class="nav">
    <!-- 交互区的单个项目 -->
    <ul>
      <li v-for="kun in navBar" :key="kun.index">
        <KeepAlive>
          <router-link :to="kun.router">{{ kun.name }}</router-link>
        </KeepAlive>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 左侧交互区 */
.nav {
  /* 固定宽度 */
  height: 100%;
  width: 120px;
  background-color: var(--kungalgame-trans-pink-0);
  border-radius: 0 0 0 7px;
  border-right: 1px solid var(--kungalgame-blue-4);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  & > ul {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    li {
      height: 40px;
      background-color: var(--kungalgame-trans-blue-0);
      display: flex;
      &:hover {
        background-color: var(--kungalgame-trans-red-2);
        transition: 0.1s;
      }
      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--kungalgame-blue-4);
      }
    }
  }
}
</style>
