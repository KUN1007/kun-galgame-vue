<script setup lang="ts">
interface FooterInfoItem {
  index: number
  name: string
  router: string
  label: string
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
        router: `/pool`,
        label: 'KUN Visual Novel Daily Communication | 鲲 Galgame 日常交流',
      },
      {
        index: 2,
        name: `chat`,
        router: `/contact`,
        label:
          'KUN Visual Novel Contacts, Chatting | 鲲 Galgame 联系我们, 闲聊灌水',
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
        router: `/technique`,
        label:
          'KUN Visual Novel Technique, Visual Novel Execute Problem | 鲲 Galgame 技术交流, Galgame 运行问题, Galgame 运行相关',
      },
      {
        index: 2,
        name: `globalization`,
        router: `/technique`,
        label:
          'KUN Visual Novel Technique, Visual Novel Globalization | 鲲 Galgame 技术交流, Galgame 汉化相关',
      },
      {
        index: 3,
        name: `make`,
        router: `/technique`,
        label:
          'KUN Visual Novel Technique, Visual Novel Making | 鲲 Galgame 技术交流, Galgame 制作相关',
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
        label: 'KUN Visual Novel Privacy | 鲲 Galgame 隐私政策',
      },
      {
        index: 2,
        name: `principle`,
        router: `/kungalgame`,
        label: 'KUN Visual Novel Principle | 鲲 Galgame 运营理念',
      },
      {
        index: 3,
        name: `balance`,
        router: `/balance`,
        label: 'KUN Visual Novel Profit and Loss | 鲲 Galgame 收支公示',
      },
    ],
  },
]

const link: FooterInfoItem[] = [
  {
    index: 1,
    name: `acgngame`,
    router: `https://acgngames.net`,
    label: 'ACGNGAME, Gal World, Galgame 游戏爱好者之家',
  },
  {
    index: 2,
    name: `shinnku`,
    router: `https://shinnku.com`,
    label: `Shinnku's Visual Novel, Upset Gal, 失落的小站 失落小站 - galgame资源站`,
  },
  {
    index: 3,
    name: `ymgal`,
    router: `https://www.ymgal.games`,
    label:
      'YM Galgame, 月幕 Galgame -最戳你XP的美少女游戏综合交流平台 | 来感受这绝妙的艺术体裁',
  },
  {
    index: 4,
    name: `kun`,
    router: `https://soft.moe`,
    label: `KUN's Blog | 鲲的博客`,
  },
]
</script>

<template>
  <div class="info">
    <!-- Non-Galgame Communication -->
    <!-- For mobile compatibility
      , nodes with the 'mobile' attribute will be hidden in media queries -->
    <div
      class="catalog"
      v-for="kun in info"
      :key="kun.index"
      :class="kun.mobile"
    >
      <h2>
        <span>{{ $tm(`mainPage.footer.title['${kun.title}']`) }}</span>
      </h2>

      <ul class="function" v-for="yuyu in kun.list" :key="yuyu.index">
        <li>
          <RouterLink :to="yuyu.router" :aria-label="yuyu.label">
            {{ $tm(`mainPage.footer.item['${yuyu.name}']`) }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="catalog">
      <h2>
        <span>
          {{ $tm(`mainPage.footer.title.friend`) }}
          {{ `(${link.length})` }}
        </span>
      </h2>

      <ul class="function" v-for="kun in link" :key="kun.index">
        <li>
          <a :href="kun.router" target="_blank" :aria-label="kun.label">
            {{ $tm(`mainPage.footer.item.${kun.name}`) }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: center;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
}

.catalog {
  width: 1px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: var(--kungalgame-font-color-2);
  font-size: small;
  height: 117px;
  overflow-y: scroll;
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

  .function {
    li {
      height: 48px;
    }
  }
}
</style>
