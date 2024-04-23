<template>
  <v-app>
    <layoutsToast>
      <theToast />
    </layoutsToast>
    <v-main style="height: 100%;">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </Transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
export default {
  components: {
    layoutsToast: defineAsyncComponent({
    loader: () => import("./toast.vue")
  }),
    theToast: defineAsyncComponent({
    loader: () => import("../modules/toast/components/theToast.vue")
  }),
},
};
</script>
