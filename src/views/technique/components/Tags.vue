<script setup lang='ts'>

</script>

<template>
          <!-- 热门标签池 -->
          <div class="tags-container">
            <div>热门标签</div>
            <!-- 单个帖子容器 -->
            <ul class="tags">
              <!-- 单个标签，最大输入文字为 10 个 -->
              <li>
                <i class="fa-solid fa-tag"></i><span>啊这可海星啊这可海星</span>
              </li>
              <li>
                <i class="fa-solid fa-tag"></i><span>KUN KUN KUN KUN</span>
              </li>
              <li><i class="fa-solid fa-tag"></i><span>啊海星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这可海星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这可星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这海星</span></li>
              <li><i class="fa-solid fa-tag"></i><span>啊这星</span></li>
              <li>
                <i class="fa-solid fa-tag"></i><span>啊这啊这可海星可海星</span>
              </li>
              <li><i class="fa-solid fa-tag"></i><span>啊这可海</span></li>
              <li>
                <i class="fa-solid fa-tag"></i><span>啊这可海星啊这可海星</span>
              </li>
            </ul>
          </div>
</template>

<style lang='scss' scoped>
/* 热门标签池 */
.tags-container {
  /* 左右间距 */
  padding: 10px;
}
/* “热门标签几个字” */
.tags-container > div {
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin: 10px 0;
}
/* 单个标签容器 */
.tags {
  display: flex;
  flex-direction: column;
}
/* 单个标签 */
.tags > li {
  height: 30px;
  /* 不换行 */
  white-space: nowrap;
}
/* 标签的图标字体 */
.tags > li i {
  color: $kungalgame-red-3;
  margin-right: 5px;
}
/* 标签的文字部分 */
.tags > li > span {
  cursor: pointer;
  border-bottom: 2px solid $kungalgame-trans-white-9;
}
.tags > li > span:hover {
  border-bottom: 2px solid $kungalgame-blue-4;
}
</style>