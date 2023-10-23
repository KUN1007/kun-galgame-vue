#  kun-galgame-vue

## Introduction

This is the frontend of the KUNGalgame forum, and it's the first version. We have built it using the Vue framework, and in the future, we plan to refactor it using the Svelte framework.

The link to the first version of the backend project is [kun-galgame-koa](https://github.com/KUN1007/kun-galgame-koa).

## About the Website

KUNGalgame — The Cutest Galgame Forum in the World!

We strive to create the best environment for Galgame discussions.

Tips: The website is currently under construction...

## Operational Philosophy

- The cutest galgame forum in the world.
- With the aim of creating the best atmosphere.
- There will never be any ads.
- There will never be any charges.

## Project Introduction

### Overview

This is a **restructured version** of [`KUNGalgame-pure-css`](https://github.com/KUN1007/kungalgame-pure-css). We have used Vite, Vue3, Vue-router4, Typescript, SCSS, and Pinia as the frontend technology stack. We do not depend on any UI framework because this project is focused on a non-UI framework approach. As my VSCode comes with necessary plugins like ESLint, we haven't integrated them into the project. We plan to integrate the required environment and project configurations in the first version to be launched.

When the frontend project was completed, there was a built-in, lightweight `express` server in the root directory of the project, located in the `server` folder. This server is not the backend for the project; it is merely a data simulation similar to `mockjs`. We plan to write our backend in `Rust`.

### Preview

The original project is located at https://github.com/KUN1007/kungalgame-pure-css. However, during the restructuring, we added a lot of content and changed the icons from `fontawesome` to `iconify`. So, the appearance may be different. Here, we provide a preview of the homepage only.

#### Web Browser

![Preview](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/docs/images/preview.png) ![Dark Preview](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/docs/images/preview-dark.png)

#### Mobile Browser

![Mobile Preview](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/docs/images/mobile-preview.png) ![Mobile Dark Preview](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/docs/images/mobile-preview-dark.png)

### How to Start

1. Clone the repository: `git clone https://github.com/KUN1007/KUNGalGame-vue`
2. Change the directory: `cd KUNGalGame-vue`

#### Server

1. Navigate to the server directory: `cd server`
2. Install dependencies: `pnpm i`
3. Start the server: `pnpm start`

#### Frontend

1. Return to the parent directory: `cd ..`
2. Install frontend dependencies: `pnpm i`
3. Start the development server: `vite dev`

Please note that you should start the server first to have simulated data.

## Notes

Only version 1 will be released. During the initial design, we have already planned the content for versions 2 and 3, including data analysis for websites like `VNDB`, `批评空间`, `bangumi`, streaming video uploads, and an app version. In short, we will try to implement anything you can think of.

## Contact Us

If you wish to participate in our development, you can join our development groups:

- QQ: 872839714
- Telegram: https://t.me/KUNForum

## Open Source Statement

This project follows the `GPL` open-source license.