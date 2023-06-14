<script setup lang="ts">
// 导入 Vue 函数
import { defineAsyncComponent, onBeforeMount, onBeforeUnmount } from 'vue'
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 css 动画
import 'animate.css'
// 导入设置面板 store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'

import { storeToRefs } from 'pinia'

// 异步导入设置面板，提升首页加载速度
const KUNGalgameSettingsPanel = defineAsyncComponent(
  () => import('./setting-panel/KUNGalgameSettingPanel.vue')
)

// 使设置面板的数据变为响应式
const { showKUNGalgamePanel } = storeToRefs(useKUNGalgameSettingsStore())

// 顶部导航栏单个项目的接口
interface topBar {
  index: number
  name: string
  router: string
}

// 顶部导航栏的项目（这里一定要加上 '/' 不然子路由会出问题！！！）
const topBarItem: topBar[] = [
  { index: 1, name: 'pool', router: '/pool/index' },
  { index: 2, name: 'create', router: '/edit/index' },
  { index: 3, name: 'technique', router: '/technique/index' },
  { index: 4, name: 'about', router: '/kungalgame/index' },
  { index: 5, name: 'return', router: '/kun' },
]

// 接受父组件的传值
const props = defineProps(['isMainPage'])

const isMain = props.isMainPage
// 如果是主页的话删除 “返回主页” 项目
if (isMain) {
  topBarItem.pop()
}

// 根据导航条的项目个数操作 css 中导航条的宽度
let navItemNum = topBarItem.length
const navItemNumString = navItemNum + '00px'

// 在路由跳转时关闭设置面板
onBeforeUnmount(() => {
  showKUNGalgamePanel.value = false
})
// 在页面刷新时关闭设置面板
onBeforeMount(() => {
  showKUNGalgamePanel.value = false
})
</script>

<template>
  <div class="header">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="kungal-info">
        <!-- 网站的名字和网站图标 -->
        <img src="../assets/images/favicon.png" alt="KUNgal" />
        <span>{{ $t('header.name') }}</span>
      </div>
      <div class="top-bar">
        <ul>
          <!-- 顶部单个板块 -->
          <li v-for="kun in topBarItem" :key="kun.index">
            <router-link :to="{ path: kun.router }">{{
              $t(`header['${kun.name}']`)
            }}</router-link>
          </li>
          <!-- 顶部板块下部的 hover 效果 -->
          <div class="box"></div>
        </ul>
      </div>
    </div>
    <div class="kungalgamer-info">
      <!-- showKUNGalgamePanel 为 store 里的布尔值,其真假控制设置面板的显示与关闭 -->
      <span @click="showKUNGalgamePanel = !showKUNGalgamePanel"
        ><Icon icon="uiw:setting-o"
      /></span>
      <router-link to="/kungalgamer">
        <img src="../assets/images/KUN.jpg" alt="KUN" />
      </router-link>
    </div>
  </div>
  <div class="settings-panel">
    <transition
      name="kungalgame-panel"
      enter-active-class="animate__animated animate__jackInTheBox animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <KeepAlive>
        <KUNGalgameSettingsPanel v-if="showKUNGalgamePanel" />
      </KeepAlive>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
/* 头部样式 */
.header {
  /* 头部高度 */
  height: 58px;
  /* 头部下方阴影 */
  box-shadow: 0 2px 4px 0 var(--kungalgame-trans-blue-1);
  /* 头部背景 */
  backdrop-filter: blur(5px);
  background-color: var(--kungalgame-trans-white-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 相对于设置面板定位 */
  position: relative;
  z-index: 1007;
  margin-bottom: 7px;
  flex-shrink: 0;
}
.nav-top {
  display: flex;
  align-items: center;
}
.kungal-info {
  display: flex;
  align-items: center;
  img {
    height: 50px;
    margin-left: 50px;
    cursor: pointer;
  }
  span {
    margin-left: 20px;
    margin-right: 7px;
    color: var(--kungalgame-font-color-3);
    font-weight: bold;
    cursor: pointer;
  }
}

// 顶部交互栏
$navNumber: v-bind(navItemNum);

.top-bar {
  position: relative;
  text-align: center;
  width: v-bind(navItemNumString);
  ul {
    align-items: center;
    display: flex;
    right: 5%;
    .box {
      border-radius: 2px;
      bottom: 0;
      height: 7px;
      left: 0;
      position: absolute;
      transition: 0.5s;
      width: calc(100% / $navNumber);
    }
    a {
      // 转变 a 标签为块级元素
      display: block;
      color: var(--kungalgame-blue-5);
      width: 100%;
      height: 100%;
    }
    li {
      cursor: pointer;
      display: block;
      font-weight: bold;
      line-height: 58px;
      width: 100%;
      &:hover {
        background-color: var(--kungalgame-blue-0);
        border-radius: 2px;
        transition: 0.5s;
      }
      &:nth-child(1):hover ~ .box {
        background-color: var(--kungalgame-red-3);
        left: calc(100% / $navNumber * 0);
      }

      &:nth-child(2):hover ~ .box {
        background-color: var(--kungalgame-blue-3);
        left: calc(100% / $navNumber * 1);
      }

      &:nth-child(3):hover ~ .box {
        background-color: var(--kungalgame-yellow-3);
        left: calc(100% / $navNumber * 2);
      }

      &:nth-child(4):hover ~ .box {
        filter: hue-rotate(240deg);
        background-color: var(--kungalgame-blue-3);
        left: calc(100% / $navNumber * 3);
      }
      &:nth-child(5):hover ~ .box {
        filter: hue-rotate(60deg);
        background-color: var(--kungalgame-blue-3);
        left: calc(100% / $navNumber * 4);
      }
    }
  }
}

/* 用户个人信息 */

.kungalgamer-info {
  display: flex;
  align-items: center;
  margin-right: 50px;
  img {
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    position: relative;
  }
  > span {
    color: var(--kungalgame-font-color-2);
    font-size: 25px;
    margin-top: 10px;
    margin-right: 30px;
    cursor: pointer;
  }
}

/* 设置面板 */
.settings-panel {
  /* 永远在其它页面之上 */
  z-index: 9999;
}

@media (max-width: 1000px) {
  span {
    display: none;
  }
}
@media (max-width: 700px) {
  .top-bar {
    display: none;
  }
}
</style>
