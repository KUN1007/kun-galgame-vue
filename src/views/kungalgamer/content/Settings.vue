<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Avatar from '../components/Avatar.vue'
import Message from '@/components/alert/Message'

import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'

import type { UserInfo } from '@/api'

const props = defineProps<{
  user: UserInfo
}>()

const user = computed(() => props.user)

// Content of the bio
const bioValue = ref('')

// Change bio
const handleChangeBio = async () => {
  // Bio exceeds the maximum length
  if (bioValue.value.length > 107) {
    Message(
      'Bio must not exceed a maximum length of 107 characters',
      '签名的最大长度不可超过 107 个字符',
      'warn'
    )
    return
  }

  const res = await useKUNGalgameUserStore().updateBio(bioValue.value)

  if (res.code === 200) {
    Message('Rewrite bio successfully!', 'Rewrite 签名成功', 'success')
    bioValue.value = ''
  } else {
    Message('Rewrite bio failed!', 'Rewrite 签名失败', 'error')
  }
}

onMounted(() => {
  bioValue.value = user.value.bio
})
</script>

<template>
  <div class="settings">
    <!-- Change profile picture -->
    <Avatar />

    <!-- Change bio -->
    <div class="bio">
      <div class="title">{{ $tm('user.settings.bio') }}</div>
      <textarea
        name="bio"
        :placeholder="`${$tm('user.settings.hint')}`"
        rows="5"
        v-model="bioValue"
      >
      </textarea>

      <div class="help">
        <span class="bioCount">
          {{ $tm('user.settings.count') }}: {{ bioValue.length }}
        </span>
        <button @click="handleChangeBio">
          {{ $tm('user.settings.confirm') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  width: 100%;
  height: 100%;
  padding: 10px 17px;
}

.bio {
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    color: var(--kungalgame-font-color-3);
    flex: 1;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    border-radius: 5px;
    padding: 5px;

    &:focus {
      border: 1px solid var(--kungalgame-pink-3);
    }
  }
}

.title {
  margin-bottom: 10px;
}

.help {
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
    padding: 5px 17px;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-9);
    border-radius: 5px;
    color: var(--kungalgame-blue-4);
    transition: all 0.2s;

    &:hover {
      background-color: var(--kungalgame-blue-4);
      color: var(--kungalgame-white);
    }
    &:active {
      transform: scale(0.9);
    }
  }
}
</style>
