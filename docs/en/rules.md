# Code Writing Guidelines

## Overview

- Code must follow the `Vue3 composition API + setup + Typescript` approach, following official documentation examples.
- Direct DOM operations like `document.getElementById` are not allowed unless absolutely necessary.
- Folder names should use `kebab-case`, `.ts` files should use `camelCase`, and `.vue` files should use `PascalCase` for naming.
- Packages larger than `500kb` are not allowed to be imported.

## Vue3

- Functions like `defineProps` and `defineEmits` must have types declared using TypeScript, in the format `const props = defineProps<{param: type}>()`.
- When there are four or more levels of calls, `computed` must be used. Ternary operators must use `computed`.
- Component names should be in `PascalCase`, and built-in components must be imported in `PascalCase`, for example, `<RouterLink to="/kun" />`.
- When passing props from a parent component to a child component, use `kebab-case` naming. Use `camelCase` for `v-on` events.

## TypeScript

- The use of `any` is not allowed.
- Interfaces should be named in `PascalCase`.
- Declaration files with a `.d.ts` extension should be named using `kebab-case`.

## Variables and Functions

- Variables should preferably be declared using `const`, and functions should preferably be declared using arrow function syntax like `const kun = () => {}`.
- Boolean values should always start with `is`, for example, `isShowToolbar`.
- Functions in the `store` should be named using the `use...store` convention, for example, `useKUNGalgameEditStore`.
- For complex functions, use the `@param {type} paramName` format for writing comments.