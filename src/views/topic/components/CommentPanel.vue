<script setup lang="ts"></script>

<template>
  <div class="panel">
    <div class="top">
      <div class="title"><span>kun</span>评论 @<span>啊这可海星</span></div>
      <div class="confirm">
        <button>发布评论</button>
        <button></button>
      </div>
    </div>
    <div class="container">
      <textarea
        name="comment"
        placeholder="请输入您的评论，最大字数为1007"
        rows="5"
      >
      </textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 评论区输入的弹出容器 */
.panel {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.top {
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: var(--kungalgame-font-color-3);
}

.title {
  margin-bottom: 10px;
  span {
    &:nth-child(1) {
      margin-right: 10px;
    }
    &:nth-child(2) {
      cursor: pointer;
      margin-left: 10px;
      color: var(--kungalgame-blue-4);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.confirm {
  button {
    cursor: pointer;
    transition: all 0.2s;
    color: var(--kungalgame-font-color-3);
    padding: 2px 7px;
    border: 1px solid var(--kungalgame-blue-4);
    border-radius: 5px;
    background-color: var(--kungalgame-trans-white-5);
    &:hover {
      background-color: var(--kungalgame-blue-4);
      color: var(--kungalgame-white);
    }
  }
}

.container {
  display: flex;
  textarea {
    color: var(--kungalgame-font-color-3);
    transition: all 0.2s;
    flex: 1;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid var(--kungalgame-blue-4);
    background-color: var(--kungalgame-trans-white-5);
    border-radius: 5px;
    padding: 5px;
    box-shadow: var(--shadow);
    &:focus {
      border: 1px solid var(--kungalgame-pink-3);
    }
  }
}
</style>
