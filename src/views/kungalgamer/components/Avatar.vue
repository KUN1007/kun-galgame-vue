<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const selectedFile = ref(null)

const handleFileChange = (event: Event) => {}

const handleSubmit = () => {}
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
