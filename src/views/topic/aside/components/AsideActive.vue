<script setup lang="ts">
import { toRefs } from 'vue'
import { Icon } from '@iconify/vue'

import TopicOtherTag from './TopicOtherTag.vue'
import TopicMaster from './TopicMaster.vue'
import KUNGalgameFooter from '@/components/KUNGalgameFooter.vue'

import { useTempReplyStore } from '@/store/temp/topic/reply'
import { storeToRefs } from 'pinia'

import { asideItem } from './asideItem'

const { replyRequest } = storeToRefs(useTempReplyStore())

const props = defineProps<{
  tags: string[]
  uid: number
}>()
const { tags, uid } = toRefs(props)

const handleSortReply = (sortField: string) => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortField = sortField
}

const orderAscending = () => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortOrder = 'asc'
}

const orderDescending = () => {
  useTempReplyStore().resetPageStatus()
  replyRequest.value.sortOrder = 'desc'
}
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInLeft animate__faster"
    appear
  >
    <div class="aside">
      <div class="sort">
        <div
          class="item"
          v-for="item in asideItem"
          :key="item.index"
          @click="handleSortReply(item.sortField)"
        >
          <span><Icon :icon="item.icon" /></span>
          <span>{{ $tm(`topic.aside.${item.name}`) }}</span>
        </div>

        <div class="order">
          <span @click="orderAscending">
            <Icon icon="tdesign:order-ascending" />
          </span>
          <span @click="orderDescending">
            <Icon icon="tdesign:order-descending" />
          </span>
        </div>
      </div>

      <TopicOtherTag style="margin-bottom: 17px" :tags="tags" />
      <TopicMaster :uid="uid" />
      <KUNGalgameFooter />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.aside {
  height: 940px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  color: var(--kungalgame-font-color-3);
  margin-right: 5px;
}

.sort {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--kungalgame-blue-4);
  border-radius: 5px;
  margin-bottom: 17px;
  box-shadow: var(--shadow);
  cursor: pointer;

  .item {
    width: 100%;
    display: flex;
    justify-content: space-around;

    span {
      padding: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      transition: all 0.2s;
      background-color: var(--kungalgame-trans-blue-2);
    }
  }

  .order {
    width: 100%;
    display: flex;
    font-size: 20px;
    color: var(--kungalgame-blue-4);

    span {
      padding: 7px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        transition: all 0.2s;
        background-color: var(--kungalgame-blue-4);
        color: var(--kungalgame-white);
      }
    }
  }
}
</style>
