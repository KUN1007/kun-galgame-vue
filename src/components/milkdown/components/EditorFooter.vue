<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
// Import the router
import { useRoute } from 'vue-router'

// Import icon font
import { Icon } from '@iconify/vue'

// Asynchronously import the editor settings menu
const EditorSettingsMenu = defineAsyncComponent(
  () => import('./EditorSettingsMenu.vue')
)
// Import CSS animations
import 'animate.css'

// Import the topic editing store
import { useKUNGalgameEditStore } from '@/store/modules/edit'
import { useKUNGalgameTopicStore } from '@/store/modules/topic'
import { storeToRefs } from 'pinia'

// Topic editing page store
const { textCount } = storeToRefs(useKUNGalgameEditStore())
// Topic page store for replies and adjusting reply panel width
const { replyDraft, replyPanelWidth } = storeToRefs(useKUNGalgameTopicStore())

// Current route
const route = useRoute()
// Name of the current page route
const routeName = computed(() => route.name as string)

const textCountNumber = computed(() =>
  routeName.value === 'Edit' ? textCount.value : replyDraft.value.textCount
)

// Whether to display the editor settings panel
const isShowSettingsMenu = ref(false)
// Style when the settings panel is activated
const settingsPanelActive = ref('')

// Click the settings button
const handelClickSettings = () => {
  isShowSettingsMenu.value = !isShowSettingsMenu.value
  if (isShowSettingsMenu.value) {
    settingsPanelActive.value = 'settings-icon-active'
  } else {
    settingsPanelActive.value = ''
  }
}

// Close the panel emits
const handelCloseSettingsMenu = () => {
  isShowSettingsMenu.value = false
  settingsPanelActive.value = ''
}
</script>

<template>
  <div class="footer">
    <!-- Display the settings button -->
    <div class="settings">
      <span
        @click="handelClickSettings"
        class="settings-icon"
        :class="settingsPanelActive"
      >
        <Icon icon="uiw:setting-o" />
      </span>

      <!-- Help slot -->
      <slot name="help" />
      <input
        v-if="routeName === 'Topic'"
        class="panel-width"
        type="range"
        min="50"
        max="100"
        step="1"
        v-model="replyPanelWidth"
      />
    </div>

    <!-- Word count -->
    <span class="count">{{ textCountNumber + ` ${$tm('edit.word')}` }}</span>

    <!-- Settings panel -->
    <EditorSettingsMenu
      @close="handelCloseSettingsMenu"
      :isShowSettingsMenu="isShowSettingsMenu"
    />
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 10px 17px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.settings {
  color: var(--kungalgame-font-color-1);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .settings-icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .help {
    cursor: pointer;
    margin-left: 20px;
    color: var(--kungalgame-font-color-1);
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info {
    padding: 3px;
    color: var(--kungalgame-font-color-2);
    position: absolute;
    left: 200px;
    transition: 0.3s background-color ease;
    border-radius: 5px;
    margin-bottom: 100px;

    ul {
      display: flex;
      flex-direction: column;
      background-color: var(--kungalgame-white);
      padding: 5px;
      border-radius: 5px;

      li {
        &::before {
          content: '❆ ';
          color: var(--kungalgame-pink-3);
        }

        cursor: default;
        font-size: 15px;
        line-height: 27px;

        span {
          cursor: pointer;
          color: var(--kungalgame-blue-4);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .panel-width {
    margin-left: 20px;
  }
}

.count {
  color: var(--kungalgame-font-color-0);
  background-color: var(--kungalgame-trans-white-9);
}

// Keep the settings button rotating when activated.
.settings-icon-active {
  color: var(--kungalgame-blue-4);
  animation: settings 3s linear infinite;
}

@keyframes settings {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
