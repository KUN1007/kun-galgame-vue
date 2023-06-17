# KUNGalgame 论坛的 Vue 前端重构版本

.

## 截止到 18/06/2023，两个月的时间，200 多次 commit，我们几乎完成了所有的静态页面，接下来我们将会对网站的后端进行编写

.
## 介绍

KUNGalgame  ——  世界上最萌的 Galgame 论坛！

为营造最良好的 Galgame 讨论环境为目的进行努力！

Tips: 网站目前正在建设中······



## 运营理念

- 世界上最萌的 galgame 论坛
- 以营造最良好的氛围为理念
- 永远不会有广告
- 永远不会收费



## 项目介绍

.

### 简介

.

这是[`KUNGalgame-pure-css`](https://github.com/KUN1007/kungalgame-pure-css) 的**重构版本**，使用 Vite + Vue3 + Vue-router4 + Typescript + SCSS + Pinia 作为前端技术栈，不依赖任何 UI 框架，因为这个项目主打的就是非 UI 框架，世界都一样多没意思呀。由于我的 VScode 自带`ESLint`等必要插件，所以并未在项目中进行集成，预计在项目的第一个版本上线时会集成必要的环境类项目配置。

.

前端项目成型时在项目根目录有一个自带的微型`express`服务器可启动，存放于`server`文件夹，这并不是该项目的后端，只是一个类似于`mockjs`的数据模拟而已，我们的后端计划使用`Rust`编写

.

### 预览

##### 原项目的地址为：[https://github.com/KUN1007/kungalgame-pure-css](https://github.com/KUN1007/kungalgame-pure-css)

但是我们在重构的时候增加了大量的内容，并且将图标由`fontawesome`改为了`iconify`，所以外观可能会不同，这里仅展示主页预览

.
#### Web 端浏览器
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/preview.png)
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/preview-dark.png)
.
#### 手机端浏览器
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/mobile-preview.png)
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/mobile-preview-dark.png)

### 启动方法

`git clone https://github.com/KUN1007/KUNGalGame-vue`

`cd KUNGalGame-vue`

#### 服务端

`cd server `

`pnpm i`

`pnpm start`

#### 前端

`cd ..`

`pnpm i`

`vite dev`

请注意，请先启动服务端，这样才有模拟的数据

.

## 注意事项

将要发布的只是 V1 版本，我们在设计之初就已经规划好了 V2, V3 版本的内容，包括对 `VNDB` `批评空间` `bangumi` 等网站的数据进行分析，流媒体发布（上传发布视频），APP 版本等等。总之，只要您能想到的，我们都会尽力实现。

.

## 开源声明

本项目遵从`GPL`开源协议

