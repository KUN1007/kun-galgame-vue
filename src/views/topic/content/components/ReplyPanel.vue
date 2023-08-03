<script setup lang="ts">
import Tags from '@/views/edit/components/Tags.vue'
import Button from '@/views/edit/components/Button.vue'
import WangEditor from '@/components/WangEditor.vue'

const props = defineProps(['isReply'])
</script>

<template>
  <Teleport to="body" :disabled="props.isReply">
    <div class="root">
      <div class="container">
        <!-- 回复面板回复给谁 -->
        <div class="title">回复给@啊这可海星（楼主）</div>
        <!-- 回复的编辑器 -->
        <div class="content">
          <WangEditor :height="200" />
        </div>
        <!-- 回复的页脚 -->
        <div class="footer">
          <Tags style="margin-top: 10px" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.root {
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.92;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 77%;
  color: var(--kungalgame-font-color-3);
  background-color: var(--kungalgame-white);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--kungalgame-blue-4);
  box-shadow: var(--shadow);
}
</style>
