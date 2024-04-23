// Utilities
import { defineStore } from 'pinia';
import { arrayToast } from "../script/interface";

export const storeToast = defineStore('storeToast', {
  state: () => ({
    arrayToast: [] as arrayToast,
  }),
  getters: {

  },
  actions:{

  }
})
