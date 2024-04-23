<template>
  <v-main style="height: 100%; overflow: hidden;">
      <theHeaderAppbar/>
      <div class="route_app">
        <div class="grid_app">
          <slot/>
        </div>
      </div>
  </v-main>
</template>

<style lang="scss" scoped>
.route_app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.grid_app{
  margin-top: 60px;
  width: 1620px;
  max-width: 1620px;
}
@media screen and (max-width: 1660px) {
  .grid_app{
    width: 100%;
    max-width: 1280px;
  }
}
@media screen and (max-width: 1320px) {
  .grid_app{
    width: 100%;
    max-width: 1024px;
  }
}
@media screen and (max-width: 1050px) {
  .grid_app{
    width: 100%;
    max-width: 100%;
    padding: 0 50px;
  }
}
</style>
  
  <script lang="ts">
  import { defineAsyncComponent } from "vue";
  import theLoadingHeaderAppbar from "../components/wireframes/header/condition/theLoadingHeaderAppbar.vue";
  import theErrorHeaderAppbar from "../components/wireframes/header/condition/theErrorHeaderAppbar.vue";
  import theLoadingFooterAppbar from "../components/wireframes/footer/condition/theLoadingFooterAppbar.vue";
  import theErrorFooterAppbar from "../components/wireframes/footer/condition/theErrorFooterAppbar.vue";

  export default {
    components: {
        theHeaderAppbar: defineAsyncComponent({
        loader: () => import("../components/wireframes/header/theHeaderAppbar.vue"),
        loadingComponent: theLoadingHeaderAppbar,
        errorComponent: theErrorHeaderAppbar,
        }),
    },
  };
  </script>