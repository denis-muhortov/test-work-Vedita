// Utilities
import { defineStore } from 'pinia';
import { getAllCard } from "../scripts/api";
import { createToast } from "../../toast/script/actionToast";
import { typeToast } from "../../toast/script/typeToast";

export const contentStore = defineStore('contentStore', {
  state: () => ({
    dataItems: null,
    filterItems: null,
    itemsName: [],
  }),
  getters: {

  },
  actions:{
    async getAllCard(){
      try{
        const response = await getAllCard();
        this.filterItems = this.dataItems = response;   
      } catch(e){
        createToast(typeToast.error, 'Ошибка загрузки данных');
        console.log(e)
      }
    },
    getNameData(){
      if(this.dataItems != null){
        for (const item of this.dataItems) {
          this.itemsName.push(item?.name);
        }
      }
    }
  }
})
