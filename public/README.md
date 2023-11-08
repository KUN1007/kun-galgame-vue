![Logo](https://github.com/KUN1007/kun-galgame-vue/blob/layout/src/assets/images/favicon.png)Logo

The image is sourced from the game [Ark Order](https://apps.qoo-app.com/en/app/9593), featuring the character '鲲' (Kun).

# kun-galgame-vue

## Introduction

This is the frontend for KUN Visual Novel forum, and it is the first version. We have developed it using the `vue` framework.

The purpose of creating KUN Visual Novel is to:

- Promote genuinely good games so that everyone can access visual data through platforms like VNDB, avoiding the influence of "experts."
- Distance ourselves from the culture of praising one moment and condemning the next in the modern internet, promoting critique as a virtue, among other things.
- Encourage anyone to learn basic computer skills to avoid "superficial experts."
- Construct a forum primarily driven by individual user enjoyment to resist the formation of social hierarchies.
- Many current websites use templates, resulting in a lack of diversity, causing aesthetic fatigue.
- And much more.

We believe that "what truly makes a good game is something that makes you feel happy and genuinely laugh."

**The backend project for the first version is [kun-galgame-koa](https://github.com/KUN1007/kun-galgame-koa).**

## Mission Statement

- The world's cutest galgame forum.
- Our mission is to create the best possible atmosphere.
- We will never have advertisements.
- We will never charge users.

## Technical Support

- Compatible with all modern browsers on both mobile and desktop.
- Responsive design for screens of any size.
- Developed entirely using `Vue3` Composition API and fully supports `Typescript`. The coding style follows the best practices recommended on the [Vue official website](https://vuejs.org/).

## Features

### Global Website Settings

- `I18n` internationalization.
- Custom background images.
- Day/Night mode.
- Font selection for the entire site.
- Adjust website page width.

### Note

- The website refreshes the `token` every 60 minutes, causing a brief white screen. This is done for security reasons.
- The website uses [`vue-quill`](https://github.com/vueup/vue-quill) as the rich text editor. However, this editor employs outdated [API](https://github.com/vueup/vue-quill/issues/409), which may generate console warnings when the editor appears. This is due to the editor's design and is not an error in the website's code. We plan to develop our own rich text editor in the future.
- If you encounter any errors on the website or have suggestions, please [contact us](https://github.com/KUN1007/kun-galgame-vue#contact-us).

To view all the features of the website, please [click here](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/en/feat.md).

To explore all the page functionalities, please [click here](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/en/pages.md).

## Project Introduction

### Overview

This is a **reconstructed version** of [`KUNGalgame-pure-css`](https://github.com/KUN1007/kungalgame-pure-css). It is developed using `Vite + Vue3 + Vue-router4 + Typescript + SCSS + Pinia` as the frontend technology stack. It does not rely on any UI frameworks, as this project aims to stand out without UI frameworks. The world is already full of sameness, and we want to bring something different. The project does not integrate `ESLint`, `Prettier`, and similar tools because they can be troublesome, and we love to take it easy. We plan to integrate the necessary project configurations when the first version of the project goes live.

### Preview

##### The repository for the pure HTML + CSS project can be found [here](https://github.com/KUN1007/kungalgame-pure-css).

However, during the reconstruction, we added substantial content and switched from `fontawesome` to `iconify` for icons. This may result in a different appearance. Here, we provide a preview of the homepage:

#### Web Browsers

![Light Mode](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/preview.png)

![Dark Mode](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/preview-dark.png)

#### Mobile Browsers

![Light Mode](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/mobile-preview.png)

![Dark Mode](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/images/mobile-preview-dark.png)

### Getting Started

- Clone the repository: `git clone https://github.com/KUN1007/kun-galgame-vue`
- Navigate to the project directory: `cd kun-galgame-vue`
- Install dependencies: `pnpm i`
- Start the development server: `vite dev`

## Important Notes

The upcoming release is only the first version. We had planned the content for versions 2 and 3 from the project's initial design, including:

- Analyzing data from websites such as [`VNDB`](https://vndb.org/), [`-エロゲー批評空間-`](https://erogamescape.dyndns.org/), [`bangumi`](https://bangumi.tv/), etc.
- Streaming media publishing (uploading and releasing videos).
- Creating a mobile app version.
- And more. In short, we will do our best to implement anything you can think of.

## Contact Us

If you want to join our development or Galgame groups, you can connect with us through the following channels:

- [Telegram Group](https://t.me/KUNForum)
- Tencent QQ Group: 872839714

The following two groups are Galgame groups for discussions and feedback:

- [Telegram Group](https://t.me/kungalgame)
- Tencent QQ Group: 871857690


## Translation

[中文版](https://github.com/KUN1007/kun-galgame-vue/blob/V1/docs/zh/README.md)

Special thanks to `yuyu` for the Chinese translation.

## License

This project follows the `GPL` open-source license.
