<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="article-next">
    <div class="describe">
      <div>{{ $tm('update.update') }}</div>

      <!-- Next update feat -->
      <p>Moe Moe Moe!</p>
    </div>

    <!-- Update preview -->
    <div class="preview">
      <div>{{ $tm('update.info') }}</div>
      <a
        class="github"
        href="https://github.com/KUN1007/KUNGalGame-vue"
        target="_blank"
      >
        {{ $tm('update.visit') }}
      </a>
      <a href="https://github.com/KUN1007/KUNGalGame-vue" target="_blank">
        <Icon class="icon" icon="line-md:github-loop" />
      </a>
    </div>

    <!-- Estimated update time -->
    <div class="time">
      <span>{{ $tm('update.time') }}: 2019/10/7</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-next {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.describe {
  div {
    font-size: 20px;
    margin: 10px;
    margin-bottom: 30px;
  }
  p {
    text-indent: 2em;
  }
}

.preview {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.github {
  margin-top: 10px;
  color: var(--kungalgame-blue-4);
  border-bottom: 2px solid var(--kungalgame-trans-white-9);
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid var(--kungalgame-blue-4);
  }
}

.time {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.icon {
  margin-top: 20px;
  font-size: 50px;
  color: var(--kungalgame-font-color-2);
}
</style>
