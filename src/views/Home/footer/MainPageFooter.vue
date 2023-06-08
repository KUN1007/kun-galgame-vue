<script setup lang="ts">
import FooterWave from './wave/FooterWave.vue'
import KUNGalgameInfo from './components/KUNGalgameInfo.vue'
</script>

<template>
  <div class="footer">
    <!-- footer 的内部容器 -->
    <div class="kungalgame-footer-wrap">
      <FooterWave />
      <KUNGalgameInfo />
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 1px;
  width: 100%;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
}
/* footer 总容器的 flex */
.kungalgame-footer-wrap {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
