<script setup lang="ts">
// KUN Visual Novel Title
import Title from '@/components/milkdown/components/Title.vue'
import { onBeforeRouteLeave } from 'vue-router'
// Global message component (bottom)
import { useKUNGalgameMessageStore } from '@/store/modules/message'
// Import the editor
import MilkdownEditorWrapper from '@/components/milkdown/MilkdownEditorWrapper.vue'
import Tags from './components/Tags.vue'
import Footer from './components/Footer.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

// Import the store for editing topics
import { useKUNGalgameEditStore } from '@/store/modules/edit'
// Import the settings panel store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// Use the store for editing topics
const { topicRewrite } = storeToRefs(useKUNGalgameEditStore())
// Use the settings panel store
const { showKUNGalgamePageWidth } = storeToRefs(useKUNGalgameSettingsStore())
const editPageWidth = computed(() => {
  return showKUNGalgamePageWidth.value.Edit + '%'
})

// Prompt the user to save a topic being edited when leaving the route
onBeforeRouteLeave(async (to, from, next) => {
  // If a topic is being updated
  if (topicRewrite.value.isTopicRewriting) {
    // Get the user's response
    const res = await useKUNGalgameMessageStore().alert(
      'AlertInfo.edit.leave',
      true
    )
    if (res) {
      // Reset the data for the topic being rewritten
      useKUNGalgameEditStore().resetRewriteTopicData()
      // User confirmed leaving, continue with navigation
      next()
    } else {
      // User canceled leaving, prevent navigation
      next(false)
    }
  } else {
    next()
  }
})
</script>

<template>
  <div class="root">
    <!-- Content container -->
    <div class="container">
      <!-- Editor -->
      <Title />
      <MilkdownEditorWrapper :is-show-menu="true" />

      <!-- Bottom of the content area -->
      <div class="content-footer">
        <Tags />

        <Footer />
      </div>
    </div>

    <!-- Copyright -->
    <KUNGalgameFooter style="margin: 0 auto; padding-top: 10px" />

    <span
      class="reference"
      style="margin: 0 auto; color: var(--kungalgame-font-color-3)"
    >
      Editor powered by
      <a
        href="https://github.com/Milkdown/milkdown"
        target="_blank"
        rel="noopener noreferrer"
      >
        Milkdown
      </a>
      &
      <a
        href="https://github.com/KUN1007/milkdown-vue3-demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        KUN Visual Novel
      </a>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: calc(100vh - 65px);
  min-height: 700px;
  display: flex;
  flex-direction: column;
}

.container {
  transition: all 0.2s;
  width: v-bind(editPageWidth);
  max-width: 1500px;
  overflow-y: scroll;
  margin: 0 auto;
  box-shadow: var(--shadow);
  background-color: var(--kungalgame-trans-white-2);
  color: var(--kungalgame-font-color-3);
  border: 1px solid var(--kungalgame-blue-1);
}

.content-footer {
  padding: 10px;
  padding-top: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reference {
  a {
    font-style: oblique;
    color: var(--kungalgame-blue-4);

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
</style>
