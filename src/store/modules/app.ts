import { defineStore } from "pinia";

export const kun = defineStore("app", {
  state: () => {
    return {
      isMain: false,
    };
  },
  //   类似于 computed
  getters: {},
  //   类似于 methods
  actions: {},
});
