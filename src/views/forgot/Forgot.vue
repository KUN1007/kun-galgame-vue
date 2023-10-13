<script setup lang="ts">
import Email from './components/Email.vue'
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title">忘记密码</div>

      <!-- 验证邮箱 -->
      <div class="email">
        <div class="input">
          <span>您的邮箱：</span>
          <input type="text" />
        </div>

        <div class="input">
          <span>验证码：</span>
          <input type="text" />
        </div>

        <div class="btn">
          <button>发送验证码</button>
          <button>下一步</button>
        </div>
      </div>

      <!-- 新密码 -->
      <div class="password">
        <div class="input">
          <span>您的邮箱：</span>
          <input type="text" />
        </div>
        <div class="input">
          <span>您的邮箱：</span>
          <input type="text" />
        </div>

        <div class="btn">
          <button>上一步</button>
          <button>下一步</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    var(--kungalgame-trans-pink-0),
    var(--kungalgame-trans-blue-0)
  );
  display: flex;
}

.container {
  margin: auto;
  width: 300px;
  height: 400px;
  background-color: var(--kungalgame-white);
  border-radius: 5px;
  box-shadow: var(--shadow);
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  font-size: large;
  background-color: var(--kungalgame-blue-4);
  border-radius: 5px 5px 0 0;
  color: var(--kungalgame-white);
}

.email {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
}

.input {
  display: flex;
  margin-bottom: 30px;

  input {
    border: none;
    border-bottom: 1.5px solid var(--kungalgame-blue-1);
    transition: all 0.2s;

    &:focus {
      border-bottom: 1.5px solid var(--kungalgame-blue-4);
    }
  }
}

.btn {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    width: 150px;
    padding: 5px 10px;
    border: 1px solid var(--kungalgame-blue-4);
    border-radius: 5px;
    background-color: var(--kungalgame-white);
    margin: 10px;
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
