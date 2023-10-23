# KUNGalgame Forum Vue Frontend Refactor

As of June 18, 2023, two months, and over 200 commits, we have almost completed all the static pages. Next, we will be working on the backend of the website.

## Introduction

KUNGalgame - The cutest Galgame forum in the world!

Striving to create the best environment for Galgame discussions!

Tips: The website is currently under construction...

## Operating Philosophy

- The cutest Galgame forum in the world
- Based on the idea of creating the best atmosphere
- No advertisements, ever
- No charges, ever

## Project Introduction

### Overview

This is a **refactored version** of [`KUNGalgame-pure-css`](https://github.com/KUN1007/kungalgame-pure-css), using Vite + Vue3 + Vue-router4 + Typescript + SCSS + Pinia as the frontend tech stack. It doesn't rely on any UI framework, as this project emphasizes a non-UI framework. As my VScode comes with necessary plugins like ESLint, I haven't integrated them into the project. I plan to integrate the required environment and project configurations in the first version of the project.

When the frontend project is ready, there is a built-in mini `express` server in the project's root directory that can be started, located in the `server` folder. This is not the project's backend; it's just a data mock similar to `mockjs`. Our backend is planned to be written in `Rust`.

### Preview

##### The address of the original project is: [https://github.com/KUN1007/kungalgame-pure-css](https://github.com/KUN1007/kungalgame-pure-css)

However, during the refactoring, we added a lot of content and changed the icons from `fontawesome` to `iconify`, so the appearance may be different. Here, we are only showing a preview of the homepage.

#### Web Browser
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/preview.png)
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/preview-dark.png)

#### Mobile Browser
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/mobile-preview.png)
![](https://github.com/KUN1007/KUNGalGame-vue/blob/layout/introduction/images/mobile-preview-dark.png)

### How to Start

`git clone https://github.com/KUN1007/KUNGalGame-vue`

`cd KUNGalGame-vue`

#### Server

`cd server`

`pnpm i`

`pnpm start`

#### Frontend

`cd ..`

`pnpm i`

`vite dev`

Please note, start the server first to have simulated data.

## Important Notes

Only the V1 version will be released. We have already planned the content for V2 and V3 versions during the initial design, including data analysis of websites such as `VNDB`, `Erogame Space`, `Bangumi`, streaming content uploads, an app version, and more. In summary, we will do our best to implement anything you can think of.

## Open Source Declaration

This project follows the `GPL` open-source license.