<template>
    <div class="grid">
        <Transition name="page" mode="out-in">
            <v-btn class="mt-12" @click="this.contentStore.getAllCard();" v-if="contentStore.dataItems == null">
                Загрузить еще раз
            </v-btn>
            <div style="width: 100%;" v-else>
                <div style="width: 100%;">
                    <theSearch :searchingContent="contentStore?.itemsName"/>
                </div>
                <div class="container mt-12">
                    <TransitionGroup name="list">
                        <theItem v-for="item in contentStore.filterItems" :key="item" :item="item"/>
                    </TransitionGroup>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style lang="scss" scoped>
.grid{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 75px;
    grid-row-gap: 75px;
}
@media screen and (max-width: 1660px) {
  .container{
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 1320px) {
    .container{
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 50px;
        grid-row-gap: 50px;
  }
}
@media screen and (max-width: 1050px) {
    .container{
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        justify-items: center;
  }
}
@media screen and (max-width: 650px) {
    .container{
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 40px;
  }
}
</style>

<script lang="ts">
import { contentStore } from "../stores/content";
import { defineAsyncComponent } from "vue";
import theLoadingItem from "./condition/theLoadingItem.vue";
import theErrorItem from "./condition/theErrorItem.vue";

export default {
  data: () => ({
    contentStore: contentStore(),
    loading: false,
  }),
  components: {
    theItem: defineAsyncComponent({
    loader: () => import("./items/theItem.vue"),
    loadingComponent: theLoadingItem,
    errorComponent: theErrorItem,
    }),
    theSearch: defineAsyncComponent({
    loader: () => import("../../../components/ui/theSearch.vue"),
    delay: 1000,
    }),
  },
  mounted() {
    const getItems = ()=>{
        this.loading = true;
        this.contentStore.getAllCard().then(()=>{
            this.contentStore.getNameData()
            this.loading = false;
        });
    }
    if(this.contentStore.dataItems == null) getItems();
  },
  computed: {},
  methods: {},
};
</script>