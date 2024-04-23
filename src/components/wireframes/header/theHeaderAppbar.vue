<template>
  <v-toolbar class="gridsToolbar" color="white" :elevation="2" prominent>
    <div class="route_app">
      <div class="grid_app">
        <div class="title">
          Where in the world?
        </div>
        <v-btn @click="authStore.logout()" stacked>
          <v-icon icon="mdi-logout"/>
          Выход
        </v-btn>
      </div>
    </div>
  </v-toolbar>
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
  width: 1620px;
  max-width: 1620px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
  font-size: 24px;
  font-weight: 800;
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
@media screen and (max-width: 450px) {
  .title{
    font-size: 14px;
  }
}

</style>
<script lang="ts">
import { authStore } from "../../../modules/auth/stores/auth";

export default {
  data: () => ({
    authStore: authStore(),
  }),
  components: {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>
