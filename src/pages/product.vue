<template>
    <v-main style="height: 100%;">
      <layoutsIndex>
        <v-main style="height: calc(100% - 64px);">
          <theProduct :item="item"/>
        </v-main>
      </layoutsIndex>
    </v-main>
  </template>
  
  <style lang="scss" scoped>
  
  </style>
  
<script lang="ts">
import { defineAsyncComponent } from "vue";
import { contentStore } from "../modules/contents/stores/content";
import theLoadingIndex from "../layouts/condition/theLoadingIndex.vue";
import theErrorIndex from "../layouts/condition/theErrorIndex.vue";
import theLoadingContent from "../modules/contents/components/condition/theLoading.vue";
import theErrorContent from "../modules/contents/components/condition/theLoading.vue";


export default {
    data: () => ({
        contentStore: contentStore(),
        item: null,
    }),
    components: {
        layoutsIndex: defineAsyncComponent({
        loader: () => import("../layouts/index.vue"),
        loadingComponent: theLoadingIndex,
        errorComponent: theErrorIndex,
        }),
        theProduct: defineAsyncComponent({
        loader: () => import("../modules/contents/components/theProduct.vue"),
        loadingComponent: theLoadingContent,
        errorComponent: theErrorContent,
        }),
    },
    mounted() {
        if(!this.contentStore.dataItems) this.$router.push('/')
        this.searchItem(this.$route.query.flag)
    },
    computed: {},
    methods: {
        searchItem(itemName){
            let arrayItem = this.contentStore.dataItems;
            if(itemName != null) this.item = arrayItem?.find((i)=>{return i.name === itemName})
        }
    },
};
</script>