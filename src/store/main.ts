import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    title: "标准模板",
  }),
  getters: {},
  actions: {},
});
