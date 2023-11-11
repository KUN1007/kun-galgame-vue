<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="footer">
    <span>Copyright © 2023 KUNGalgame</span>
    <span>
      GitHub Open Source
      <a
        href="http://github.com/KUN1007/kun-galgame-vue"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="line-md:github-loop" />
      </a>
    </span>
    <span> All rights reserved | Version 1.2.0 </span>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 17px;
  letter-spacing: 1px;
  color: var(--kungalgame-font-color-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-self: center;
    align-items: center;

    a {
      display: flex;
      justify-self: center;
      align-items: center;
      margin-left: 5px;
      color: var(--kungalgame-blue-5);

      &:hover {
        transition: all 0.2s;
        transform: scale(1.5);
      }
    }
  }
}
</style>
