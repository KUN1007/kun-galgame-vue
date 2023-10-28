<!-- Custom plugins, calculate text size -->

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Settings from '../components/Settings.vue'
import { usePluginViewContext } from '@prosemirror-adapter/vue'

import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

const { textCount } = storeToRefs(useKUNGalgameEditStore())
const { replyDraft } = storeToRefs(useKUNGalgameTopicStore())

const { view } = usePluginViewContext()

const route = useRoute()
const routeName = computed(() => route.name as string)

const size = computed(() => {
  return view.value.state.doc.textContent.length
})

watch(
  () => size.value,
  () => {
    if (routeName.value === 'Edit') {
      textCount.value = size.value
    }
    if (routeName.value === 'Topic') {
      replyDraft.value.textCount = size.value
    }
  }
)
</script>

<template>
  <div class="footer">
    <Settings />
    <span> {{ size + ` ${$tm('edit.word')}` }} </span>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 10px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
