<!-- 帖子的底部区域，推贴，回帖，点赞等 -->
<script setup lang="ts"></script>

<template>
  <!-- 楼主帖子底部 -->
  <div class="master-topic-footer">
    <!-- 底部左侧部分（点赞、推贴、踩） -->
    <div class="master-topic-footer-left">
      <ul>
        <!-- 推贴 -->
        <li>
          <a href="#"><i class="fa-regular fa-hand-point-up"></i></a>
        </li>
        <!-- 点赞 -->
        <li>
          <a href="#"><i class="fa-regular fa-thumbs-up"></i></a>
        </li>
        <!-- 踩 -->
        <li>
          <a href="#"><i class="fa-regular fa-thumbs-down"></i></a>
        </li>
      </ul>
    </div>
    <!-- 底部右侧部分（回复、评论、只看、编辑） -->
    <div class="master-topic-footer-right">
      <ul>
        <li>
          <div class="kungalgame-reply-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            回帖
          </div>
        </li>
        <!-- 回复 -->
        <li>
          <a href="#"><i class="fa-solid fa-reply"></i></a>
        </li>
        <!-- 只看 -->
        <li>
          <a href="#"><i class="fa-solid fa-arrows-to-eye"></i></a>
        </li>
        <!-- 编辑 -->
        <li>
          <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 楼主帖子底部 */
.master-topic-footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 底部左侧部分（点赞、推贴、踩） */
.master-topic-footer-left ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 单个图标 */
.master-topic-footer-left ul li {
  margin-left: 17px;
}
.master-topic-footer-left ul li a {
  color: $kungalgame-font-color-2;
  font-size: 20px;
}
.master-topic-footer-left ul li:nth-child(1) a {
  color: $kungalgame-red-4;
}
/* 底部右侧部分（回复、评论、只看、编辑） */
.master-topic-footer-right ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
.master-topic-footer-right ul li {
  margin-right: 17px;
}
.master-topic-footer-right ul li a {
  color: $kungalgame-font-color-2;
  font-size: 20px;
}
/* button 的容器 li */
.master-topic-footer-right ul li:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 回帖按钮 */
.kungalgame-reply-btn {
  position: relative;
  display: inline-block;
  padding: 7px 17px;
  color: $kungalgame-blue-3;
  overflow: hidden;
  border: 2px solid $kungalgame-blue-2;
  filter: hue-rotate(0deg);
  transition: all 0.1s linear;
  cursor: pointer;
}
.kungalgame-reply-btn:hover {
  border: 2px solid transparent;
  color: $kungalgame-orange-3;
}
.kungalgame-reply-btn:hover span {
  position: absolute;
  display: block;
}
.kungalgame-reply-btn:hover span:nth-child(1) {
  filter: hue-rotate(0deg);
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, $kungalgame-blue-3);
  animation: animate1 1s linear infinite;
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
.kungalgame-reply-btn:hover span:nth-child(2) {
  filter: hue-rotate(60deg);
  top: -100%;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, $kungalgame-blue-3);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
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
.kungalgame-reply-btn:hover span:nth-child(3) {
  filter: hue-rotate(120deg);
  bottom: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(270deg, transparent, $kungalgame-blue-3);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
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
.kungalgame-reply-btn:hover span:nth-child(4) {
  filter: hue-rotate(300deg);
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, $kungalgame-blue-3);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
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
</style>
