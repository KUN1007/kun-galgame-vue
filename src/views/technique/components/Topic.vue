<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { TechniqueTopic } from '@/api'
import { markdownToText } from '@/utils/markdownToText'

const props = defineProps<{
  topics: TechniqueTopic[]
}>()

const topics = computed(() => props.topics)
</script>

<template>
  <RouterLink
    class="topic"
    v-for="(topic, index) in topics"
    :key="index"
    :to="`/topic/${topic.tid}`"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <div class="topic-title">{{ topic.title }}</div>

    <div class="topic-content">
      <p>{{ markdownToText(topic.content) }}</p>
    </div>

    <div class="topic-status">
      <div class="view">
        <Icon icon="ic:outline-remove-red-eye" />
        <span>{{ topic.views }}</span>
      </div>
      <div class="like">
        <Icon icon="line-md:thumbs-up-twotone" />
        <span>
          {{ topic.likesCount }}
        </span>
      </div>
      <div class="reply">
        <Icon icon="fa-regular:comment-dots" />
        <span>
          {{ topic.replyCount }}
        </span>
      </div>
    </div>

    <div class="topic-tags">
      <Icon class="icon" icon="ant-design:tag-twotone" />

      <span v-for="(kun, _) in topic.tags">{{ kun }}</span>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.topic {
  border: 1px solid var(--kungalgame-trans-blue-4);
  border-radius: 5px;
  background-color: var(--kungalgame-trans-white-2);
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 350px;
  color: var(--kungalgame-font-color-3);

  &:hover {
    box-shadow: var(--shadow);
    transform: scale(1.2) rotate(1deg);
    transition: 0.2s;
    z-index: 1009;

    & > span {
      position: absolute;
      display: block;
      z-index: 1009;

      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(
          90deg,
          transparent,
          var(--kungalgame-blue-4)
        );
        animation: animate1 1s linear infinite;
      }

      &:nth-child(2) {
        filter: hue-rotate(60deg);
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(
          180deg,
          transparent,
          var(--kungalgame-blue-4)
        );
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
      }

      &:nth-child(3) {
        filter: hue-rotate(120deg);
        bottom: 0;
        right: 0;
        width: 100%;
        background: linear-gradient(
          270deg,
          transparent,
          var(--kungalgame-blue-4)
        );
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;
      }

      &:nth-child(4) {
        filter: hue-rotate(300deg);
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(
          360deg,
          transparent,
          var(--kungalgame-blue-4)
        );
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
      }
    }
  }
}

@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
@keyframes animate3 {
  0% {
    right: -100%;
    height: 3px;
  }
  50%,
  100% {
    height: 2px;
    right: 100%;
  }
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

.topic-title {
  padding: 10px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topic-content {
  font-size: 13px;
  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  overflow: hidden;
  -webkit-box-orient: vertical;
  padding: 0 10px;
}

.topic-status {
  height: 30px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
}

.topic-tags {
  width: 100%;
  font-size: 12px;
  padding: 7px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--kungalgame-trans-white-9);
  opacity: 0;
  cursor: pointer;

  & > span {
    display: block;
    margin-bottom: 3px;
  }
}

.icon {
  position: absolute;
  left: 20px;
  font-size: 18px;
  color: var(--kungalgame-red-4);
  margin-right: 5px;
}

.topic:hover .topic-tags {
  background-color: var(--kungalgame-blue-0);
  transform: scale(1.1) rotate(-1deg);
  opacity: 1;
  transition: 0.2s;
}
</style>
