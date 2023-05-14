<script setup lang="ts">
import KUNGalgameTopBar from '@/components/KUNGalgameTopBar.vue'

interface asideBar {
  index: number
  name: string
  router: string
}

const asideBarItem: asideBar[] = [
  { index: 1, name: '隐私政策', router: '/privacy' },
  { index: 2, name: '执行条例', router: '/regulations' },
  { index: 3, name: '更新日志', router: '/update-log' },
  { index: 4, name: '收支公示', router: '/balance' },
  { index: 5, name: '不萌记录', router: '/unmoe' },
  { index: 6, name: '加入我们', router: '/contacts' },
  { index: 7, name: '感谢名单', router: '/thanks-list' },
  { index: 8, name: '返回主页', router: '/' },
]
</script>

<template>
  <div class="root">
    <!-- 头部 -->
    <KUNGalgameTopBar />
    <!-- 内容区容器 -->
    <div class="content-container">
      <!-- 内容区 -->
      <div class="content">
        <!-- 侧边的文章结构索引 -->
        <div class="aside">
          <div>KUNGalgame</div>
          <ul>
            <li>网站简介</li>
            <li>运营理念</li>
            <li>论坛规定</li>
            <li class="skip" v-for="kun in asideBarItem" :key="kun.index">
              <router-link style="color: #218bff" :to="{ path: kun.router }">{{
                kun.name
              }}</router-link>
            </li>
          </ul>
        </div>
        <!-- 文章容器 -->
        <div class="article">
          <h1>关于我们</h1>
          <br />
          <br />
          <h2 id="introduction">网站简介</h2>
          <p>
            KUNGalgame 是由 <span class="skip">KUN（鲲）</span>个人发起的一个
            galgame 论坛建设项目，目前正在<span class="skip">开发阶段</span>。
          </p>
          <br />
          <p>KUNGalgame 创建的意义在于：</p>
          <br />
          <br />
          <ul class="list">
            <li>
              大力宣传真正的好游戏，让大家都会用 VNDB 等网站，看到真正的<span
                class="skip"
                >可视化数据</span
              >，避免被“大佬”毒害
            </li>
            <li>
              <strong
                >远离现代互联网捧一踩一，以批评为美德等等不好的现状</strong
              >
            </li>
            <li>让任何人都学习基本的计算机基础，避免“爷新”的出现</li>
            <li>构建一个以用户个人乐趣为主的论坛，抵制鄙视链的产生</li>
            <li>目前的网站大多数套用模板，千篇一律，令人审美疲劳</li>
            <li>......等等。</li>
          </ul>
          <br />
          <br />
          <p>
            我们认为：“<strong style="color: red"
              >让你觉得快乐的，让你发自内心笑出来的，才是真正的好游戏！</strong
            >”
          </p>
          <br />
          <br />
          <p>
            我们将要实现的最终目标是：<strong
              >世界上最棒的 galgame 论坛！</strong
            >
          </p>
          <br />
          <br />
          <p>
            目前截止 V 1.0.0
            版本，设计、开发、维护、推广都是由我一人主导，如果您有对论坛建设的想法、对论坛环境的看法、亦或者是单纯的想要闲聊吹水，您都可以<span
              class="skip"
              >加入我们</span
            >。
          </p>
          <br />
          <br />
          <p>网站的建设受到过大量人员的不懈帮助，其中有（排名不分先后）：</p>
          <br />
          <ul class="list">
            <li><span class="skip">ACGNGAME</span> （Galworld）站长</li>
            <li><span class="skip">Shinnku</span> （失落的小站）站长</li>
            <li><span class="skip">Ymgal</span> （月幕 Galgame）站长</li>
            <li>......等等</li>
          </ul>
          <br />
          <br />
          <p>
            网站的开发设计阶段参考了数个网站的优良设计，其中有（排名不分先后）：
          </p>
          <br />
          <ul class="list">
            <li>Twitter.com（推特） - 帖子详情页</li>
            <li>github.com（github） - 配色</li>
            <li>bbs.kfmax.com（绯月） - 用户信息分类</li>
            <li>......等等</li>
          </ul>
          <br />
          <br />
          <p>
            其中对我灵感启发最大的莫过于 Codepen 以及 github
            里众多大佬的设计思想，以上的全部链接可以查看<span class="skip"
              >感谢名单</span
            >。
          </p>
          <br />
          <br />
          <h2 id="principle">运营理念</h2>
          <br />
          <h3>1. 世界上最萌的 galgame 论坛</h3>
          <p>
            这里的“萌”并不只是字面意义上的萌，而是指的世界上一切美好的事物，任何使你觉得美好令你觉得快乐的事物都可以被称之为萌，这意味着我们没有任何的规定，一切的规定取决于所有人共同的看法
          </p>
          <p>
            Galgame 论坛意味着
            <strong
              >我们只以 galgame 为主，在首页的帖子中仅含有和 galgame
              有关的一切话题 </strong
            >，其它话题全部位于<span class="skip">帖子池</span>中
          </p>
          <h3>2. 以营造最良好的氛围为理念</h3>
          <p>紧接上一条，在整个网站编写之前，我在设计图上写了这些：</p>
          <br />
          <ul class="list">
            <li>
              大力宣传真正的好游戏，让大家都会用 VNDB
              等网站，看到真正的可视化数据，避免被“大佬”毒害
            </li>
            <li>互联网举一踩一，以批评为美德等等不好的现状</li>
            <li>让任何人都学习基本的计算机基础，避免“爷新”的出现</li>
            <li>构建一个以用户个人乐趣为主的论坛，避免鄙视链的产生</li>
            <li>......</li>
          </ul>
          <br />
          <p>
            这意味这不可以在 KUNGalgame
            做有关于阴阳怪气、捧一踩一等等不好的行为，当然，这一切都取决于所有人的看法
          </p>
          <h3>3. 永远不会有广告</h3>
          <p>
            字面意思，<strong>网站永远不会出现任何形式的广告</strong>，我们觉得一个好的论坛不应该有任何广告的构成，如果发现了类似于广告的情况，请踩这个帖子，因为累计
            10 人将会封禁帖子
          </p>
          <h3>4. 永远不会收费</h3>
          <p>
            字面意思，任何人永远不会为网站的任何虚拟货币（萌萌点）花钱，虚拟货币的数量取决于别人对你的赞赏，我们认为运营不起一个网站只能说明我们的经济有问题，直接关站即可，当然，我们提供
            <span class="skip">赞助渠道</span>
          </p>
          <h2 id="stipulate">论坛规定</h2>
          <p>
            规定？不，我们<strong>没有规定</strong>，一切的规定取决于所有人共同的看法
          </p>
          <p>但是，我们还是希望可以温柔一点，少一点攻击性</p>
          <p style="margin-bottom: 10px">
            为了避免过早的被删除账户，<strong style="color: red"
              >我们提供这些建议</strong
            >
          </p>
          <ul class="list">
            <li>1. 政治讨论禁止</li>
            <li>2. 广告引流禁止</li>
            <li>3. 涉及到敏感话题请在文章标题注明，例如 R18、R18-G 等</li>
          </ul>
          <br />
          <p>
            为什么要建议，当然是因为这些不萌啦，如果还想了解更多关于发帖的礼仪，请查看《<span
              class="skip"
              >不萌记录</span
            >》
          </p>
        </div>
        <!-- 版权 -->
        <div class="copyright">
          <span
            >Copyright © 2023 KUNgalgame All rights reserved | Version
            0.01</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
*::-webkit-scrollbar {
  display: none;
}
.root {
  height: 100vh;
  background-image: url(@/assets/images/bg/bg1.png);
  /* background-image: url(./img/bg/bg2.png; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 1000px;
  min-height: 2700px;
}
/* 内容区容器 */
.content-container {
  background-color: @kungalgame-trans-white-2;
  backdrop-filter: blur(5px);
  border-radius: 7px;
  /* 固定高度 */
  height: 2600px;
  width: 90%;
  /* 居中 */
  margin: 0 auto;
  padding: 7px;
  /* 相对于版权定位 */
  position: relative;
}
/* 内容区 */
.content {
  height: 100%;
  border: 1px solid @kungalgame-blue-4;
  border-radius: 7px;
  display: flex;
  box-shadow: @shadow;
}
/* 侧边的文章结构索引 */
.aside {
  width: 122px;
  height: 100%;
  flex-shrink: 0;
  border-right: 1px solid @kungalgame-blue-4;
}
/* 侧边的标题 */
.aside > div {
  /* 固定高度 */
  height: 50px;
  /* 字体设置 */
  font-size: 17px;
  font-weight: bold;
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 侧边总体的列表 */
.aside > ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 侧边的单个项目 */
.aside > ul > li {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
/* 单个项目的 hover */
.aside > ul > li:hover {
  background-color: @kungalgame-trans-blue-2;
}
/* 文章区距离侧边的距离 */
.article {
  width: 100%;
  margin-left: 30px;
}
/* 网站标题的字体颜色 */
h1,
h2,
h3,
p,
.list {
  color: @kungalgame-font-color-2;
}
/* da标题的字体 */
h1 {
  margin-right: 30px;
  margin-top: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  margin-top: 77px;
  margin-bottom: 30px;
  border-left: 4px solid @kungalgame-blue-4;
  text-indent: 1em;
}
h3 {
  text-indent: 2em;
  margin-bottom: 30px;
  margin-top: 20px;
}
p {
  text-indent: 3em;
  margin: 5px;
}
a {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 被划出来的链接字体 */
.skip {
  border-bottom: 1.5px solid @kungalgame-blue-4;
  cursor: pointer;
  color: @kungalgame-blue-4;
}
.list > li {
  list-style: inside;
  text-indent: 4em;
}
/* 版权 */
.copyright {
  width: 100%;
  position: absolute;
  bottom: 1%;
  display: flex;
  justify-content: center;
}
</style>