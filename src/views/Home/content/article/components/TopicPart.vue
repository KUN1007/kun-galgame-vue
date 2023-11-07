<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

// Import i18n function for formatting time
import { formatTimeDifference } from '@/utils/formatTime'

// Import settings panel store
import { useKUNGalgameSettingsStore } from '@/store/modules/settings'
import { storeToRefs } from 'pinia'
// Use the settings panel store
const settingsStore = storeToRefs(useKUNGalgameSettingsStore())

import { getPlainText } from '@/utils/getPlainText'

import { HomeTopic } from '@/api'

const props = defineProps<{
  topic: HomeTopic
}>()

const {
  tid,
  title,
  views,
  likesCount,
  repliesCount,
  comments,
  time,
  content,
  upvotesCount,
  tags,
  category,
  popularity,
} = props.topic

const plainText = getPlainText(content)

const getRepliesCount = computed(() => {
  return repliesCount + comments
})
</script>

<template>
  <div class="topic-info">
    <div class="summary">
      <div class="title">
        <span>{{ title }}</span>
      </div>

      <div class="status">
        <ul>
          <li>
            <Icon icon="ic:outline-remove-red-eye" /><span>{{ views }}</span>
          </li>
          <li>
            <Icon icon="line-md:thumbs-up-twotone" /><span>
              {{ likesCount }}
            </span>
          </li>
          <li>
            <Icon icon="ri:reply-line" /><span>{{ getRepliesCount }}</span>
          </li>
        </ul>

        <div class="time">
          <span>
            {{
              formatTimeDifference(
                time,
                settingsStore.showKUNGalgameLanguage.value
              )
            }}
          </span>
        </div>
      </div>
    </div>

    <div class="introduction">
      <p>
        {{ plainText }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Topic information */
.topic-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--kungalgame-font-color-3);
}

/* Header of the topic display */
.summary {
  width: 100%;
  /* The three small parts of the header are flex containers */
  display: flex;
  justify-content: space-between;
}

/* Header information of the topic, title, date, etc. */
.title {
  width: 100%;
  height: 100%;
  /* No line break, ellipsis for overflow */
  display: flex;
  align-items: center;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--kungalgame-blue-5);
}

/* Information such as likes and dislikes for the topic */
.status {
  display: flex;
  align-items: center;
  white-space: nowrap;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    display: flex;
    color: var(--kungalgame-font-color-2);
    font-size: smaller;

    li {
      margin-left: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-left: 3px;
      }
    }
  }
}
/* Posting date */
.time {
  width: 77px;
  font-size: x-small;
  color: var(--kungalgame-font-color-0);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}

/* Preview introduction of the topic */
.introduction {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  cursor: pointer;

  p {
    width: 100%;
    font-size: 14px;
    color: var(--kungalgame-font-color-2);
  }
}
</style>
