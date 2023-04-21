import { reactive, ref } from "vue"
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", ()=> {
  const isTopic = false;
  return {isTopic}
});
