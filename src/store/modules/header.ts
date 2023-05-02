import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", () => {
  const topBarItem: string[] = [
    "返回主页",
    "所有帖子",
    "发布帖子",
    "技术交流",
    "关于我们",
  ];
  return { topBarItem };
});
