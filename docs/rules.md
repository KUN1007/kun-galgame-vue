# 代码编写说明



## 概览



* 总体必须采用 `Vue3 composition API + setup + Typescript ` 写法，参照官网示例
* 不允许 `document.getElementById` 等直接的 `DOM` 操作，除非万不得已
* 文件夹命名使用 `kebab-case` 命名，`.ts` 文件使用 `camelCase` 命名，`.vue` 文件使用 `PascalCase` 命名
* 不允许引入超过 `500kb` 的包



## Vue3



* `defineProps` 以及 `defineEmits` 等函数必须使用 `ts` 标注类型，格式为 `const props = defineProps<{param: type}>()`
* 当调用大于等于 `4` 层时必须用 `computed`，三元运算符必须用 `computed` 
* 组件名使用 `PascalCase` 命名，内置组件必须以 `PascalCase` 的形式引入，例如 `<RouterLink to="/kun" />`
* 父组件给子组件传参使用 `kebab-case` 命名，`v-on` 使用 `camelCase` 命名



## Typescript

* 不允许出现 `any`
* 接口一律用 `PascalCase ` 命名
* `.s.ts` 的声明文件一律用 `kebab-case` 命名



## 变量、函数

* 变量尽可能使用 `const` 声明，函数尽量使用 `const kun = () => {}` 的箭头函数写法声明
* 布尔类型的值一律以 `is` 开头，例如 `isShowToolbar`
* `store` 中的函数一律使用 `use...store` 命名，例如 `useKUNGalgameEditStore`
* 复杂函数请采用 `@param {type} paramName` 的形式编写注释