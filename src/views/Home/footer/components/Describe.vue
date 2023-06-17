<script setup lang="ts">
interface Info {
  index: number
  name: string
}

const info: Info[] = [
  {
    index: 1,
    name: 'kun1',
  },
  {
    index: 2,
    name: 'kun2',
  },
  {
    index: 3,
    name: 'kun3',
  },
  {
    index: 4,
    name: 'kun4',
  },
]
</script>

<template>
  <!-- 右侧的网站信息容器 -->
  <div class="introduction">
    <!-- 网站名 -->
    <div class="kungalgame">
      <span>{{ $t('mainPage.footer.describe.title') }}</span>
    </div>
    <!-- 网站描述 -->
    <div class="kungalgame-describe">
      <span v-for="kun in info" :key="kun.index">{{
        $t(`mainPage.footer.describe['${kun.name}']`)
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 右侧的网站信息容器 */
.introduction {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 右侧网站介绍部分相对于左侧的占比 */
  flex-grow: 1;
  color: var(--kungalgame-font-color-2);
}
/* 网站名 */
.kungalgame {
  font-size: larger;
  padding-bottom: 20px;
  font-weight: bold;
}
/* 网站描述 */
.kungalgame-describe {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
