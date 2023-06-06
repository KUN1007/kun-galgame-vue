<script setup lang="ts">
interface asideBar {
  index: number
  name: string
  router: string
}

const asideBarItem: asideBar[] = [
  { index: 1, name: '隐私政策', router: '/privacy' },
  { index: 2, name: '执行条例', router: '/bylaw' },
  { index: 3, name: '更新日志', router: '/update-log' },
  { index: 4, name: '收支公示', router: '/balance' },
  { index: 5, name: '不萌记录', router: '/non-moe' },
  { index: 6, name: '加入我们', router: '/contact' },
  { index: 7, name: '感谢名单', router: '/thanks-list' },
  { index: 8, name: '赞助我们', router: '/donate' },
  { index: 9, name: '返回主页', router: '/' },
]
</script>

<template>
  <!-- 侧边的文章结构索引 -->
  <div class="aside">
    <div>KUNGalgame</div>
    <ul>
      <li>网站简介</li>
      <li>运营理念</li>
      <li>论坛规定</li>
      <li class="skip" v-for="kun in asideBarItem" :key="kun.index">
        <router-link style="color: #218bff" :to="{ path: kun.router }">{{
          kun.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
/* 侧边的文章结构索引 */
.aside {
  width: 122px;
  height: 100%;
  flex-shrink: 0;
  border-right: 1px solid var(--kungalgame-blue-4);
  position: sticky;
  top: 0;
  color: var(--kungalgame-font-color-3);
  /* 侧边的标题 */
  & > div {
    /* 固定高度 */
    height: 50px;
    /* 字体设置 */
    font-size: 17px;
    font-weight: bold;
    /* 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: serif;
  }
  /* 侧边总体的列表 */
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 侧边的单个项目 */
    & > li {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
/* 跳转链接 */
.skip {
  border-bottom: 1.5px solid var(--kungalgame-blue-4);
  cursor: pointer;
  color: var(--kungalgame-blue-4);
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 单个项目的 hover */
    &:hover {
      background-color: var(--kungalgame-trans-blue-2);
    }
  }
}
</style>
