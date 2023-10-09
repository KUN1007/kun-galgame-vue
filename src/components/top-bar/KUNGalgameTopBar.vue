<script setup lang="ts">
// 导入 Vue 函数
import { defineAsyncComponent, ref } from 'vue'
// 导入图标
import { Icon } from '@iconify/vue'
// 导入 css 动画
import 'animate.css'
// 导入导航栏的单个项目
import { topBarItem } from './topBarItem'
import { onBeforeRouteLeave } from 'vue-router'
// 异步导入手机版 hamburger，提升首页加载速度
const Hamburger = defineAsyncComponent(() => import('./Hamburger.vue'))

// 异步导入设置面板，提升首页加载速度
const KUNGalgameSettingsPanel = defineAsyncComponent(
  () => import('../setting-panel/KUNGalgameSettingPanel.vue')
)

// 异步导入点击用户头像的面板
const KUNGalgameUserInfo = defineAsyncComponent(
  () => import('./KUNGalgameUserInfo.vue')
)

// 显示设置面板的状态值
const showKUNGalgamePanel = ref(false)
// 显示手机模式 hamburger 的状态值
const showKUNGalgameHamburger = ref(false)
// 显示点击用户头像面板的状态值
const showKUNGalgameUserPanel = ref(false)

// 根据导航条的项目个数操作 css 中导航条的宽度，这里必须要这样写，因为用了 css v-bind
const navItemNum = topBarItem.length
const navItemLength = `${navItemNum}00px`

// 路由离开之前销毁 SettingsPanel 和 Hamburger
onBeforeRouteLeave(() => {
  showKUNGalgamePanel.value = false
  showKUNGalgameHamburger.value = false
})
</script>

<template>
  <div class="header">
    <!-- 顶部左侧交互栏 -->
    <div class="nav-top">
      <div class="hamburger">
        <Icon
          icon="line-md:menu-fold-right"
          v-if="!showKUNGalgameHamburger"
          @click="showKUNGalgameHamburger = !showKUNGalgameHamburger"
        />
        <transition
          enter-active-class="animate__animated animate__fadeInLeft animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
        >
          <KeepAlive>
            <Hamburger
              v-if="showKUNGalgameHamburger"
              @showKUNGalgameHamburger="showKUNGalgameHamburger = false"
            />
          </KeepAlive>
        </transition>
      </div>
      <div class="kungalgame">
        <!-- 网站的名字和网站图标 -->
        <RouterLink to="/kun">
          <img src="@/assets/images/favicon.png" alt="KUNgal" />
        </RouterLink>
        <RouterLink to="/kun">
          <span>{{ $tm('header.name') }}</span>
        </RouterLink>
      </div>
      <div class="top-bar">
        <ul>
          <!-- 顶部单个板块 -->
          <li v-for="kun in topBarItem" :key="kun.index">
            <router-link :to="{ path: kun.router }">
              {{ $tm(`header['${kun.name}']`) }}
            </router-link>
          </li>
          <!-- 顶部板块下部的 hover 效果 -->
          <div class="box"></div>
        </ul>
      </div>
    </div>
    <div class="kungalgamer-info">
      <!-- showKUNGalgamePanel 为 store 里的布尔值,其真假控制设置面板的显示与关闭 -->
      <span @click="showKUNGalgamePanel = !showKUNGalgamePanel">
        <Icon icon="uiw:setting-o" />
      </span>
      <div class="avatar">
        <img
          @click="showKUNGalgameUserPanel = true"
          src="../../assets/images/KUN.jpg"
          alt="KUN"
        />
      </div>
      <KUNGalgameUserInfo
        v-if="showKUNGalgameUserPanel"
        @close="showKUNGalgameUserPanel = false"
      />
    </div>
  </div>
  <div class="settings-panel">
    <transition
      enter-active-class="animate__animated animate__jackInTheBox animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <KeepAlive :exclude="['PageWidth', 'Font']">
        <KUNGalgameSettingsPanel
          v-if="showKUNGalgamePanel"
          @close="showKUNGalgamePanel = false"
        />
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
  z-index: 1;
  margin-bottom: 7px;
  flex-shrink: 0;
  color: var(--kungalgame-font-color-3);
}

.hamburger {
  display: none;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 25px;
  cursor: pointer;
}

.nav-top {
  display: flex;
  align-items: center;
}
.kungalgame {
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
  width: v-bind(navItemLength);
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
  > span {
    color: var(--kungalgame-font-color-2);
    font-size: 25px;
    margin-top: 10px;
    margin-right: 30px;
    cursor: pointer;
  }
}

.avatar {
  position: relative;
  img {
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    position: relative;
  }
}

/* 设置面板 */
.settings-panel {
  /* 永远在其它页面之上 */
  z-index: 999;
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
  .kungalgame {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>
