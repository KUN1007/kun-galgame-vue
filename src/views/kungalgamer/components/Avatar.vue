<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const selectedFile = ref(null)

const handleFileChange = (event: Event) => {
  const fileInput = event.target as HTMLInputElement
  if (fileInput.files && fileInput.files[0]) {
    selectedFile.value = fileInput.files[0]
  }
}

const handleSubmit = () => {
  if (selectedFile.value) {
    // 处理提交逻辑，例如上传文件等
    console.log('Selected file:', selectedFile.value)
  } else {
    console.log('No file selected')
  }
}
</script>

<template>
  <div>
    <label for="avatar">Choose images to upload (PNG, JPG)</label>
    <input
      type="file"
      id="avatar"
      accept=".jpg, .jpeg, .png"
      @change="handleFileChange"
    />
  </div>
  <button @click="handleSubmit">submit</button>
</template>

<style lang="scss" scoped></style>
