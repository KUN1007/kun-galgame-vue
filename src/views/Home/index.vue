<script lang="ts">
import KUNGalgameTopBar from "../../components/KUNGalgameTopBar.vue";

export default {
  name: "KUNGalgameMainPage",
  components: { KUNGalgameTopBar },
};
</script>

<template>
  <!-- 可视部分的容器 -->
  <div class="visual-wrapper">
    <KUNGalgameTopBar />
  </div>
</template>

<style lang="less" scoped>
.visual-wrapper {
  height: 1500px;
  display: flex;
  flex-direction: column;
  // background-image: url(../../assets/images/bg.png);
  // background-image: url(./img/bg-dark.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 700px;
  font-family: "adobe-clean", "Source Sans Pro", -apple-system,
    "BlinkMacSystemFont", "Segoe UI,Roboto", sans-serif;
}
</style>
