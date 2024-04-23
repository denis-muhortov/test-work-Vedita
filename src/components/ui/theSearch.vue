<template>
  <v-combobox
    clearable
    chips
    multiple
    label="Поиск"
    name="search"
    role="search"
    type="search"
    :items="searchingContent"
    v-model="searchContent"
    prepend-inner-icon="mdi-magnify"
    variant="solo-filled"
    style="max-width: 480px"
  ></v-combobox>
</template>

<script lang="ts">
import { contentStore } from "..//../modules/contents/stores/content";

export default {
  props: {
    searchingContent: Array,
  },
  data: () => ({
    contentStore: contentStore(),
    searchContent: [],
  }),
  mounted(){
    this.search()
  },
  methods:{
    search(){
        if(this.searchContent.length <= 0) {
            this.contentStore.filterItems = this.contentStore.dataItems;
        }
        else{
            this.contentStore.filterItems = [];
            this.contentStore.dataItems.filter((i)=>{
                this.searchContent.forEach(element => {
                    if(element == i.name) this.contentStore.filterItems.push(i);
                });
            })
        }
    }
  },
  watch:{
    searchContent(newQuestion, oldQuestion) {
      if (newQuestion != oldQuestion) {
        this.search()
      }
    }
  }
};
</script>
