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
  {
    index: 4,
    name: '啊这可海星',
  },
  {
    index: 5,
    name: '啊这可海星',
  },
  {
    index: 6,
    name: '啊这可海星',
  },
  {
    index: 7,
    name: '啊这可海星',
  },
  {
    index: 8,
    name: '啊这可海星',
  },
  {
    index: 9,
    name: '啊这可海星',
  },
  {
    index: 10,
    name: '啊这可海星',
  },
]
</script>

<template>
  <div class="tags">
    <div class="lines">
      <div class="row">
        <div class="track">
          <div class="line" v-for="kun in tags" :key="kun.index">
            <span>{{ kun.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@property --d-c {
  syntax: '<number>';
  inherits: false;
  initial-value: 1;
}

.tags {
  height: 500px;
  display: grid;
  place-items: center;
  align-content: center;
  font-size: 20px;
  overflow: hidden;
  box-sizing: border-box;
}

.lines {
  display: grid;
  gap: 10px;
}

.row {
  position: relative;
  width: 100%;
}

.track {
  display: flex;
  white-space: nowrap;
  animation: slide 1s reverse linear infinite;

  @keyframes slide {
    from {
      translate: -100%;
    }
    to {
      translate: 0;
    }
  }
}
</style>
