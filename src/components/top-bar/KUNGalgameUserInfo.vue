<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
// 全局消息组件（顶部）
import message from '@/components/alert/Message'
// 全局消息组件（底部）
import { useKUNGalgameMessageStore } from '@/store/modules/message'
import { useKUNGalgameUserStore } from '@/store/modules/kungalgamer'
import { storeToRefs } from 'pinia'
// 重置 store
import { kungalgameStoreReset } from '@/store'

const { uid, name, moemoepoint } = storeToRefs(useKUNGalgameUserStore())

const container = ref<HTMLElement>()
const router = useRouter()
const emit = defineEmits({
  close,
})

// 失去焦点时关闭面板
const handlePanelBlur = async () => {
  // 等待一段时间，不然会直接导致面板关闭
  await new Promise((resolve) => {
    setTimeout(resolve, 107)
  })
  emit('close')
}

// 退出登录，简单起见这里不和后端通信使 token 从 redis 移除了
const logOut = async () => {
  // 获取用户点击的结果
  const res = await useKUNGalgameMessageStore().alert(
    'AlertInfo.edit.logout',
    true
  )
  if (res) {
    kungalgameStoreReset()
    router.push('/login')
    message('Logout successfully!', '登出成功', 'success')
  }
}

onMounted(() => {
  // 自动获取焦点
  container.value?.focus()
})
</script>

<template>
  <div ref="container" tabindex="-1" class="container" @blur="handlePanelBlur">
    <span class="triangle1"></span>
    <span class="triangle2"></span>
    <div class="kungalgamer">
      <div class="info">
        <p>{{ name }}</p>
        <p>
          MP: <span>{{ moemoepoint }}</span>
        </p>
      </div>
      <div class="func">
        <span>
          <RouterLink to="/kungalgamer">
            {{ $tm('header.user.profile') }}
          </RouterLink>
        </span>
        <span @click="logOut">{{ $tm('header.user.logout') }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50px;
  right: 80px;
  opacity: 0.77;
}
.triangle1 {
  position: absolute;
  top: 1px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 17px solid var(--kungalgame-white);
  z-index: 1;
}
.triangle2 {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 17px solid var(--kungalgame-blue-1);
}
.kungalgamer {
  padding: 10px;
  top: 16px;
  transform: translateX(-43%);
  width: 130px;
  background-color: var(--kungalgame-white);
  border: 1px solid var(--kungalgame-blue-1);
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
}

.info {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  p {
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    span {
      margin-left: 5px;
      font-weight: bold;
      color: var(--kungalgame-pink-4);
    }
  }
}

.func {
  span {
    cursor: pointer;
    color: var(--kungalgame-blue-5);
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    a {
      color: var(--kungalgame-blue-5);
    }
    &:hover {
      background-color: var(--kungalgame-trans-blue-1);
    }
  }
}
</style>
