<template>
    <div class="container">
        <TransitionGroup name="list" tag="ul">
            <v-alert
                v-for="item in storeToast.arrayToast"
                :key="item"
                class="toast"
                :color="item.type"
                :title="item.title"
                variant="tonal"
                closable
                >
            </v-alert>
        </TransitionGroup>
    </div>
</template>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;
}
.toast{
    margin-top: 10px;
    max-height: 100px;
    pointer-events: auto;
}
</style>
<script lang="ts">

import { storeToast } from "../stores/toast"
export default {
  data: () => ({
    storeToast: storeToast(),
  }),
};
</script>