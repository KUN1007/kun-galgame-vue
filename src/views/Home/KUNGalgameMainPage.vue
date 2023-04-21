<script setup lang="ts">
import KUNGalgameTopBar from "@/components/KUNGalgameTopBar.vue";
import MainPageContent from "./content/MainPageContent.vue";
import MainPageFooter from "./footer/MainPageFooter.vue";

</script>

<template>
  <!-- 可视部分的容器 -->
  <div class="visual-wrapper">
    <KUNGalgameTopBar/>
    <MainPageContent />
    <MainPageFooter />
  </div>
</template>

<style scoped>
.visual-wrapper {
  height: 1500px;
  display: flex;
  flex-direction: column;
  background-image: url(../../assets/images/bg/bg1.png);
  /* background-image: url(../../assets/images/bg/bg2.png); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 700px;
  font-family: "adobe-clean", "Source Sans Pro", -apple-system,
    "BlinkMacSystemFont", "Segoe UI,Roboto", sans-serif;
}
</style>
