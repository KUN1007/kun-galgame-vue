<script setup lang="ts"></script>

<template>
  <!-- 右侧内容区 -->
  <div class="article">
    <!-- 更改邮箱 -->
    <div class="change-mail change-pwd">
      <form class="mail-form pwd-form">
        <div>你当前的邮箱是: kun@kungalgame.com</div>
        <div>更改邮箱:</div>
        <div>请输入你的新邮箱: <input type="text" /></div>
        <button>点击发送邮箱验证码</button>
        <div>请输入你的验证码: <input type="text" /></div>
        <button>确定更改邮箱</button>
      </form>
    </div>
    <!-- 用户更改密码 -->
    <div class="change-pwd">
      <form class="pwd-form">
        <div>更改密码:</div>
        <div>请输入你的旧密码: <input type="password" /></div>
        <div>请输入你的新密码: <input type="password" /></div>
        <div>请再次输入新密码: <input type="password" /></div>
        <button>确定更改密码</button>
      </form>
    </div>
  </div>
</template>

<style lang="less" scoped>
/* 内容区 */
.article {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* 更改按钮距离签名的距离 */
.change-pwd > div {
  margin-top: 30px;
}
/* 密码信息 */
.pwd-form > div {
  margin-bottom: 7px;
}
/* 密码输入框 */
.pwd-form input {
  height: 16px;
  padding: 2px;
  border: 1px solid @kungalgame-blue-4;
  background-color: @kungalgame-trans-white-5;
}
.pwd-form input:focus {
  box-shadow: 0px 0px 3px @kungalgame-blue-4;
}
/* 更改密码 button */
.pwd-form button {
  width: 304px;
  border: 1px solid @kungalgame-red-4;
  background-color: @kungalgame-trans-red-0;
  cursor: pointer;
}
.pwd-form button:hover {
  background-color: @kungalgame-trans-red-4;
}
.pwd-form button:active {
  background-color: @kungalgame-trans-red-0;
}
/* 更改邮箱 */
.change-mail {
  margin-bottom: 27px;
}
.mail-form button {
  margin-bottom: 10px;
}
</style>
