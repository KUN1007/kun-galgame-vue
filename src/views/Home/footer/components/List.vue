<script setup lang="ts">
interface FooterInfoItem {
  index: number
  name: string
  router: string
}

interface FooterInfo {
  index: number
  mobile?: string
  title: string
  list: FooterInfoItem[]
}

const info: FooterInfo[] = [
  {
    index: 1,
    title: `communicate`,
    mobile: 'mobile',
    list: [
      {
        index: 1,
        name: `daily`,
        router: `/pool/index`,
      },
      {
        index: 2,
        name: `chat`,
        router: `/contact`,
      },
    ],
  },
  {
    index: 2,
    title: `technique`,
    list: [
      {
        index: 1,
        name: `execute`,
        router: `/technique/index`,
      },
      {
        index: 2,
        name: `globalization`,
        router: `/technique/index`,
      },
      {
        index: 3,
        name: `make`,
        router: `/technique/index`,
      },
    ],
  },
  {
    index: 3,
    title: `about`,
    list: [
      {
        index: 1,
        name: `privacy`,
        router: `/privacy`,
      },
      {
        index: 2,
        name: `principle`,
        router: `/kungalgame/index`,
      },
      {
        index: 3,
        name: `balance`,
        router: `/balance/index`,
      },
    ],
  },
]

const link: FooterInfoItem[] = [
  {
    index: 1,
    name: `acgngame`,
    router: `http://acgngames.net`,
  },
  {
    index: 2,
    name: `shinnku`,
    router: `http://shinnku.com`,
  },
  {
    index: 3,
    name: `ymgal`,
    router: `http://www.ymgal.games`,
  },
]
</script>

<template>
  <div class="info">
    <!-- 非 galgame 交流 -->
    <!-- 这里为了适配手机端,带有 mobile 属性的节点将会媒体查询时被隐藏 -->
    <div
      class="catalog"
      v-for="kun in info"
      :key="kun.index"
      :class="kun.mobile"
    >
      <!-- 每个信息类别的标题 -->
      <h2>
        <span>{{ $t(`mainPage.footer.title['${kun.title}']`) }}</span>
      </h2>
      <ul class="function" v-for="yuyu in kun.list" :key="yuyu.index">
        <li>
          <RouterLink :to="yuyu.router">{{
            $t(`mainPage.footer.item['${yuyu.name}']`)
          }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="catalog">
      <!-- 每个信息类别的标题 -->
      <h2>
        <span>{{ $t(`mainPage.footer.title.friend`) }}</span>
      </h2>
      <ul class="function" v-for="azkhx in link" :key="azkhx.index">
        <li>
          <a :href="azkhx.router" target="_blank">{{
            $t(`mainPage.footer.item['${azkhx.name}']`)
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 左侧顶部的信息 */
.info {
  display: flex;
  justify-content: center;
}
/* 顶部的三个 ul */
.catalog {
  width: 1px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: var(--kungalgame-font-color-2);
  font-size: small;
}
.function {
  color: var(--kungalgame-font-color-2);
  li {
    margin: 5px 0;
    a {
      flex-grow: 1;
      color: var(--kungalgame-font-color-2);
    }
  }
}

@media (max-width: 1000px) {
  .mobile {
    display: none;
  }
}
</style>
