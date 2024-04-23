<template>
    <div class="container mt-12">
        <v-skeleton-loader
          class="mx-auto border"
          width="264"
          type="image, article"
          v-for="a in 20" :key="a"
        ></v-skeleton-loader>
    </div>
</template>
<style lang="scss" scoped>
.container{
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 75px;
    grid-row-gap: 75px;
}
</style>