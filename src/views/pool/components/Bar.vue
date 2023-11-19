<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="bar">
    <div class="sort">
      <div class="func">
        <div><Icon icon="ic:outline-remove-red-eye" /> 按照浏览数排序</div>

        <div><Icon icon="line-md:thumbs-up-twotone" /> 按照点赞数排序</div>

        <div>
          <Icon class="hourglass" icon="eos-icons:hourglass" /> 按照时间排序
        </div>
      </div>

      <div class="icon">
        <Icon icon="bi:sort-down" />
      </div>
    </div>

    <div class="top">
      <div class="icon">
        <Icon icon="line-md:arrow-close-up" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  position: fixed;
  bottom: 50px;
  right: 17px;
  z-index: 7;
  display: flex;
  flex-direction: column;
}

.func {
  position: absolute;
  white-space: nowrap;
  right: 50px;
  cursor: pointer;
  display: none;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  top: 0;

  & > div {
    padding: 8px;

    &:hover {
      background-color: var(--kungalgame-trans-blue-1);
    }
  }
}

.sort:hover .func {
  display: block;
}

.sort,
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  box-shadow: var(--shadow);
  cursor: pointer;
  background-color: var(--kungalgame-trans-white-2);
  border: 1px solid var(--kungalgame-blue-1);
  color: var(--kungalgame-font-color-3);

  .icon {
    font-size: 22px;
    color: var(--kungalgame-blue-4);
  }
}

.top {
  margin-top: 11px;
}
</style>
