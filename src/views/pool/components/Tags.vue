<script setup lang="ts">
// 模拟数据
interface tag {
  index: number
  name: string
}

const tags: tag[] = [
  {
    index: 1,
    name: '啊这可海星',
  },
  {
    index: 2,
    name: '啊这可海星',
  },
  {
    index: 3,
    name: '啊这可海星',
  },
]
</script>

<template>
  <!-- 帖子池顶部交互栏 -->
  <div class="pool-nav-bar">
    <!-- 热门帖子标签，根据所有帖子的总标签数推断 -->
    <div class="track">
      <span class="nav-tags" v-for="kun in tags" :key="kun.index">{{
        kun.name
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@property --d-c {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}

/* 帖子池顶部交互栏 */
.pool-nav-bar {
  height: 100px;
  display: grid;
  place-items: center;
  font-size: max(20px, 10vw);
  overflow: hidden;
  box-sizing: border-box;
}
/* 热门帖子标签 */
.nav-tags {
  /* 单个标签不换行 */
  white-space: nowrap;
  /* 距离其它帖子的距离 */
  font-size: 14px;
  margin: 2px;
  padding: 2px;
  background-color: $kungalgame-trans-blue-3;
  cursor: pointer;
}
.track {
  display: flex;
  white-space: nowrap;
  transition: 1s;
  animation: slide calc(var(--d) * var(--d-c, 1)) linear infinite;

  @keyframes slide {
    from {
      translate: var(--from) 0;
    }
    to {
      translate: var(--to) 0;
    }
  }
}

.nav-tags {
  display: inline-block;
  height: 10px;
  background: var(--bg);
  flex: 1 0 auto;
  width: calc(1em * var(--w));
  margin-right: clamp(30px, 0.5em, 60px);
}

$colors: #fff, #fff, #fff, #51da4c, #51da4c;
$widths: 1, 2, 2, 3, 3, 4, 4;
$durations: 10s, 15s, 12.5s;

@function pick($array) {
  @return #{nth($array, random(length($array)))};
}

@for $r from 1 through 6 {
  .row:nth-child(#{$r}) {
    --d: #{pick($durations)};

    &:nth-child(odd) {
      --from: -50%;
      --to: 0%;
    }

    &:nth-child(even) {
      --to: -50%;
    }

    @for $l from 1 through 7 {
      .line:nth-child(7n + #{$l}) {
        --bg: #{pick($colors)};
        --w: #{pick($widths)};
      }
    }
  }
}
</style>
