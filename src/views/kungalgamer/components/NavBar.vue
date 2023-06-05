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
    router: '/kungalgamer/info',
  },
  {
    index: 2,
    name: '邮箱密码',
    router: '/kungalgamer/password',
  },
  {
    index: 3,
    name: '发过的帖',
    router: '/kungalgamer/topic',
  },
  {
    index: 4,
    name: '回过的贴',
    router: '/kungalgamer/topic',
  },
  {
    index: 5,
    name: '赞过的帖',
    router: '/kungalgamer/topic',
  },
  {
    index: 6,
    name: '推过的帖',
    router: '/kungalgamer/topic',
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
  background-color: var(--kungalgame-trans-red-0);
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
