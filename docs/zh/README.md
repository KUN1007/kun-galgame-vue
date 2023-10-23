![](https://github.com/KUN1007/kun-galgame-vue/blob/layout/src/assets/images/favicon.png)

图片来源为游戏 [Ark Order](https://apps.qoo-app.com/en/app/9593) 中的角色 `鲲`

# kun-galgame-vue



## 介绍

这是 KUNGalgame 论坛的前端，这是第一个版本，我们使用 `vue` 框架编写



KUNGalgame 创建的意义在于：



- 大力宣传真正的好游戏，让大家都会用 VNDB 等网站，看到真正的 可视化数据，避免被“大佬”毒害
- **远离现代互联网捧一踩一，以批评为美德等等不好的现状**
- 让任何人都学习基本的计算机基础，避免“爷新”的出现
- 构建一个以用户个人乐趣为主的论坛，抵制鄙视链的产生
- 目前的网站大多数套用模板，千篇一律，令人审美疲劳
- ......等等。



我们认为：“**让你觉得快乐的，让你发自内心笑出来的，才是真正的好游戏！**”



**后端项目第一个版本的地址为 [kun-galgame-koa](https://github.com/KUN1007/kun-galgame-koa)**



## 运营理念

- 世界上最萌的 galgame 论坛
- 以营造最良好的氛围为理念
- 永远不会有广告
- 永远不会收费



## 技术支持

* 支持所有手机和电脑端**现代**浏览器
* 适配任意大小屏幕
* 全部 `Vue3` 组合式 `API`，全部 `Typescript` 支持，编写方式遵从[Vue 官网](vuejs.org)最佳实践



## 特性

### 网站全局设置

* `I18n` 国际化
* 自定义背景图片
* 白天 / 黑夜模式
* 网站全体字体切换
* 网站页面宽度调整

### 需要注意的是

* 网站会在每 `60min` 刷新一次 `token`，会有短暂白屏，这是为了更加安全
* 网站使用了 [`vue-quill`](https://github.com/vueup/vue-quill) 作为富文本编辑器，但是该编辑器使用了[过时的 `API`](https://github.com/vueup/vue-quill/issues/409)，所以编辑器出现时控制台会有警告，这是编辑器的原因，并不是网站代码的错误，我们之后会自己开发一款富文本编辑器
* 如果您遇到网站的任何错误，或者有所建议，请[联系我们](https://github.com/KUN1007/kun-galgame-vue#contact-us)

要查看网站的全部特性请[点击这里](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/en/feat.md)

要查看网站的所有页面功能请[点击这里](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/en/pages.md)

## 项目介绍

### 简介

这是[`KUNGalgame-pure-css`](https://github.com/KUN1007/kungalgame-pure-css) 的**重构版本**，使用 Vite + Vue3 + Vue-router4 + Typescript + SCSS + Pinia 作为前端技术栈，不依赖任何 UI 框架，因为这个项目主打的就是非 UI 框架，世界都一样多没意思呀。

项目中并未集成 `ESLint`, `Prettier` 等，因为太麻烦了，我爱摸鱼，预计在项目的第一个版本上线时会集成必要的环境类项目配置。

### 预览

##### 纯 HTML + CSS 项目的地址为：[https://github.com/KUN1007/kungalgame-pure-css](https://github.com/KUN1007/kungalgame-pure-css)

但是我们在重构的时候增加了大量的内容，并且将图标由`fontawesome`改为了`iconify`，所以外观可能会不同，这里仅展示主页预览

#### Web 端浏览器
![白天模式](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/preview.png)
![黑夜模式](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/preview-dark.png)

#### 手机端浏览器
![白天模式](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/mobile-preview.png)
![黑夜模式](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/mobile-preview-dark.png)

### 启动方法

`git clone https://github.com/KUN1007/kun-galgame-vue`

`cd kun-galgame-vue`

`pnpm i`

`vite dev`

## 注意事项

将要发布的只是 V1 版本，我们在设计之初就已经规划好了 V2, V3 版本的内容，包括

* 对 [`VNDB`](https://vndb.org/), [`批评空间`](https://erogamescape.dyndns.org/), [`bangumi`](https://bangumi.tv/) 等网站的数据进行分析
* 流媒体发布（上传发布视频）
* APP 版本
* ......等等

总之，只要您能想到的，我们都会尽力实现。



## Translation

中文版

## 联系我们

如果您想参与我们的开发，可以加入我们的开发群组

Telegram：https://t.me/KUNForum

Tencent QQ Group: 872839714

下面两个群组是 Galgame 群，交流与反馈

Telegram: https://t.me/kungalgame

Tencent QQ Group: 871857690

## License

本项目遵从`GPL`开源协议

