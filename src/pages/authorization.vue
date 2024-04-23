<template>
  <v-container style="height: 100%">
    <theAuthorization/>
  </v-container>
</template>
  
<style lang="scss" scoped>

</style>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import { authStore } from "../modules/auth/stores/auth";

import theLoading from "../modules/auth/components/condition/theLoading.vue";
import theError from "../modules/auth/components/condition/theError.vue";

  
export default {
  data: () => ({
    authStore: authStore(),
  }),
  components: {
    theAuthorization: defineAsyncComponent({
    loader: () => import("../modules/auth/components/theAuthorization.vue"),
    loadingComponent: theLoading,
    errorComponent: theError,
  }),
},
  mounted() {
    if(this.authStore.user.token) this.$router.push('/')
  },
  computed: {},
  methods: {},
};
</script>