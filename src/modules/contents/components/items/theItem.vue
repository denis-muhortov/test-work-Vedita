<template>
    <v-card class="item" @click="openProductCard(item.name)">
        <v-responsive style="max-height: 160px;" :aspect-ratio="16 / 9">
            <div class="item-image">
                <img :src="item?.flag" :alt="item?.name">
            </div>
        </v-responsive>
        <div class="item-content">
            <div class="item-content_name mb-4">
                {{ item?.name }}
            </div>
            <div class="item-content_description">
                <div class="item-content_description__text mb-1">
                    <span>Population: </span> {{ item?.population }}
                </div>
                <div class="item-content_description__text mb-1">
                    <span>Region: </span> {{ item?.region }}
                </div>
                <div class="item-content_description__text mb-1" v-if="item?.capital">
                    <span>Capital: </span> {{ item?.capital }}
                </div>
            </div>
        </div>
    </v-card>
</template>

<style lang="scss" scoped>
.item{
    position: relative;
    width: 264px;
    height: 334px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.25s ease;

    @media (hover: hover) {
        &:hover{
            transform: scale(1.1);
        }
    }
    &:active{
        transform: scale(0.9);
    }

    &-image{
        width: 100%;
        height: 160px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
        }
    }

    &-content{
        padding: 15px 25px 25px 25px;

        &_name{
            font-size: 16px;
            font-weight: 800;
        }

        &_description{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            &__text{
                font-size: 14px;
                font-weight: 300;
                span{
                    font-weight: 600;
                }
            }
        }
    }
}
@media screen and (max-width: 450px) {
  .item{
    width: 100%;
    height: fit-content;
  }
}
</style>

<script lang="ts">
import router from '../../../../router';

export default {
    props:{
        item: Object,
    },
    data: () => ({
        
    }),
    methods:{
        openProductCard(nameFlag){
            router.push({ path: '/product', query: { flag: nameFlag } })
        }
    },
}
</script>