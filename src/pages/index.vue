<template>
  <v-main style="height: 100%;">
    <layoutsIndex>
      <v-main style="height: calc(100% - 64px);">
        <TheContent/>
      </v-main>
    </layoutsIndex>
  </v-main>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import theLoadingIndex from "../layouts/condition/theLoadingIndex.vue";
import theErrorIndex from "../layouts/condition/theErrorIndex.vue";
import theLoadingContent from "../modules/contents/components/condition/theLoading.vue";
import theErrorContent from "../modules/contents/components/condition/theLoading.vue";

export default {
  data: () => ({
  }),
  components: {
    layoutsIndex: defineAsyncComponent({
    loader: () => import("../layouts/index.vue"),
    loadingComponent: theLoadingIndex,
    errorComponent: theErrorIndex,
    }),
    TheContent: defineAsyncComponent({
    loader: () => import("../modules/contents/components/theContent.vue"),
    loadingComponent: theLoadingContent,
    errorComponent: theErrorContent,
    }),
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>