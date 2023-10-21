<script setup lang="ts">
import { useLoliDataURL } from '@/hooks/useLoli'
import { onMounted, ref } from 'vue'

const loliData = ref({
  loliBodyLeft: '',
  loliBodyTop: '',
  loliEyeLeft: '',
  loliEyeTop: '',
  loliBrowLeft: '',
  loliBrowTop: '',
  loliMouthLeft: '',
  loliMouthTop: '',
  loliFaceLeft: '',
  loliFaceTop: '',
  body: '',
  eye: '',
  brow: '',
  mouth: '',
  face: '',
})

const reGetLoli = async () => (loliData.value = await useLoliDataURL())

onMounted(async () => {
  loliData.value = await useLoliDataURL()
})
</script>

<template>
  <!-- 看板娘 -->
  <div class="loli" @click="reGetLoli">
    <img
      class="body"
      :src="loliData.body"
      alt="ren"
      :style="{ left: loliData.loliBodyLeft, top: loliData.loliBodyTop }"
    />
    <img
      class="eye"
      :src="loliData.eye"
      alt="ren"
      :style="{ left: loliData.loliEyeLeft, top: loliData.loliEyeTop }"
    />
    <img
      class="brow"
      :src="loliData.brow"
      alt="ren"
      :style="{ left: loliData.loliBrowLeft, top: loliData.loliBrowTop }"
    />
    <img
      class="mouth"
      :src="loliData.mouth"
      alt="ren"
      :style="{ left: loliData.loliMouthLeft, top: loliData.loliMouthTop }"
    />
    <img
      class="face"
      :src="loliData.face"
      alt="ren"
      :style="{ left: loliData.loliFaceLeft, top: loliData.loliFaceTop }"
    />
  </div>
</template>

<style lang="scss" scoped>
/* 看板娘 */
.loli {
  cursor: pointer;
  width: 0;
  /* 定位看板娘，重要 */
  position: absolute;
  z-index: 9999;
  top: -270px;
  left: 130px;
}
.body {
  position: absolute;
}
.eye {
  position: absolute;
}
.brow {
  position: absolute;
}
.mouth {
  position: absolute;
}
.face {
  position: absolute;
}
</style>
