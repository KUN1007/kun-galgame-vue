<script setup lang="ts">
import { ref } from 'vue'
import message from '@/components/alert/Message'
// 上传头像的函数
import {
  checkImageValid,
  resizeImage,
  handleUploadAvatar,
} from '../utils/handleFileChange'

// 准备给后端的图片
const uploadedImage = ref<Blob>()
// 上传好的头像链接
const selectedFileUrl = ref<string>('')
// 上传的 input
const input = ref<HTMLElement>()

// 点击上传
const handleFileChange = async (event: Event) => {
  const imgUrl = await handleUploadAvatar(event)
  if (imgUrl) {
    selectedFileUrl.value = imgUrl
  }
}

// 拖拽上传
const handleDrop = async (event: DragEvent) => {
  // 阻止浏览器默认行为
  event.preventDefault()
  event.stopPropagation()

  const dataTransfer = event.dataTransfer
  if (dataTransfer && dataTransfer.files.length > 0) {
    const file = dataTransfer.files[0]

    // 验证文件类型，正确则上传
    if (checkImageValid(file)) {
      const resizedFile = await resizeImage(file)
      uploadedImage.value = resizedFile

      selectedFileUrl.value = URL.createObjectURL(resizedFile)
    }
  }
}

// 拖拽上传完成后阻止默认行为
const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  event.dataTransfer!.dropEffect = 'copy'
}

// 更改头像
const handleChangeAvatar = () => {
  message(
    'Image API is not yet completed, stay tuned for updates',
    '图片接口还未完成，敬请期待',
    'warn'
  )
  if (uploadedImage.value) {
    const formData = new FormData()
    formData.append('avatar', uploadedImage.value)

    // 在这里执行上传逻辑 TODO:
    // 上传完成后可以显示成功消息或者刷新用户界面
  }
}
</script>

<template>
  <div class="avatar">
    <div class="title">{{ $tm('user.settings.avatar') }}</div>

    <div class="container">
      <div
        ref="upload"
        tabindex="0"
        class="avatar-upload"
        @drop="handleDrop($event)"
        @dragover="handleDragOver"
        @click="input?.click()"
      >
        <!-- 加号提示 -->
        <span class="plus" v-if="!selectedFileUrl"></span>
        <img
          class="avatar-preview"
          :src="selectedFileUrl"
          alt="Uploaded Image"
          v-if="selectedFileUrl"
        />
        <input
          ref="input"
          hidden
          type="file"
          accept=".jpg, .jpeg, .png"
          @change="handleFileChange($event)"
        />
      </div>

      <!-- 帮助区域 -->
      <div class="help">
        <div class="hint">
          <span>{{ $tm('user.settings.drag') }}</span>
          <span>{{ $tm('user.settings.click') }}</span>
        </div>
        <div class="support">
          <span>{{ $tm('user.settings.supportImage') }}</span>
          <br />
          <span>{{ $tm('user.settings.supportFormat') }}</span>
        </div>
        <button @click="handleChangeAvatar">
          {{ $tm('user.settings.confirm') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 100%;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.avatar-upload {
  width: 150px;
  height: 150px;
  border: 1px solid var(--kungalgame-blue-4);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    border: 1px solid var(--kungalgame-pink-3);
    .plus::before,
    .plus::after {
      background: var(--kungalgame-pink-3);
    }
  }

  /* 单标签加号 */
  .plus {
    display: inline-block;
    position: relative;
  }

  .plus::before,
  .plus::after {
    transition: all 0.2s;
    content: '';
    position: absolute;
    background: var(--kungalgame-blue-4);
  }

  .plus::before {
    width: 20px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .plus::after {
    width: 2px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

/* 头像预览 */
.avatar-preview {
  max-width: 140px;
  max-height: 140px;
}

.help {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: small;

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

.hint {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.support {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 700px) {
  .help {
    padding: 0 10px;
  }
  .hint {
    display: none;
  }
}
</style>
