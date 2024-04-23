<template>
    <v-main style="height: 100%;">
        <div class="container">
            <div class="container-back">
                <button class="button" type="button" @click="this.$router.push({ path: '/' })">
                    <img src="../../../assets/images/arrow.svg" alt="arrow">
                    Back
                </button>
            </div>
            <div class="container-item">
                <div class="container-item-block">
                    <div class="item-image">
                        <v-responsive :aspect-ratio="16 / 9">
                                <img :src="item?.flag" :alt="item?.name">
                        </v-responsive>
                </div>
                </div>
                <div class="container-item-block">
                    <div class="container-item-block_top">
                        <div class="container-item-block_top-title">
                            {{ item?.name }}
                        </div>
                        <div class="container-item-block_top-content">
                            <div class="container-item-block_top-content-cols">
                                <div class="text" v-if="item?.nativeName"><span>Native Name: &nbsp;</span> <p>{{ item?.nativeName }}</p></div>
                                <div class="text" v-if="item?.population"><span>Population: &nbsp;</span> <p>{{ item?.population }}</p></div>
                                <div class="text" v-if="item?.region"><span>Region: &nbsp;</span> <p>{{ item?.region }}</p></div>
                                <div class="text" v-if="item?.subregion"><span>Sub Region: &nbsp;</span> <p>{{ item?.subregion }}</p></div>
                                <div class="text" v-if="item?.capital"><span>Capital: &nbsp;</span> <p>{{ item?.capital }}</p></div>
                            </div>
                            <div class="container-item-block_top-content-cols text">
                                <div class="text" v-if="item?.topLevelDomain">
                                    <span>Top Level Domain: &nbsp;</span>
                                    {{ item?.topLevelDomain.join(', ') }}
                                </div>
                                <div class="text" v-if="item?.currencies">
                                    <span>Currencies: &nbsp;</span>
                                    {{ textCurrencies(item?.currencies) }}
                                </div>
                                <div class="text" v-if="item?.languages">
                                    <span>Languages: &nbsp;</span>
                                    {{ textLanguages(item?.languages) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-item-block_bottom">
                        <div class="text" v-if="item?.borders">
                            <span>Countries: &nbsp;</span> 
                            <div class="container-tags">
                                <div class="tags" v-for="text in item?.borders" :key="text">
                                    {{ text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-main>
</template>
  
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-item{
        width: 100%;
        display: flex;
        gap: 115px;

        &-block{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            &:nth-child(1){
                align-items: flex-end;
            }
        }
        .item-image{
            width: 560px;
            height: fit-content;
            border-radius: 10px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-block_top{
            width: 100%;
            display: flex;
            flex-direction: column;

            &-title{
                display: flex;
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 40px;
            }
            &-content{
                display: flex;
                &-cols{
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
        &-block_bottom{
            width: 100%;
            display: flex;
            margin-top: 70px;
        }
    }
    &-back{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 80px;

        .button{
            font-size: 16px;
            font-weight: 300;
            padding: 10px 30px;
            border-radius: 6px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            transition: all 0.25s ease;
            cursor: pointer;
            img{
                margin-right: 10px;
            }

            @media (hover: hover) {
                &:hover{
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                }
            }
            &:active{
                transform: scale(0.9);
            }
        }
    }
}
.text{
    display: flex;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 4px;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }
    p{
        display: flex;
        font-size: 16px;
        font-weight: 300;
    }
}
.container-tags{
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    margin-left: 10px;
    .tags{
        padding: 4px 30px;
        font-size: 14px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        margin-right: 10px;

        &:last-child(){
            margin-right: 0px;
        }
    }
}

@media screen and (max-width: 1320px) {
  .container-item{
    gap: 50px;
  }
}
@media screen and (max-width: 1050px) {
  .container-item{
    flex-direction: column;
    gap: 50px;

    .item-image{
        width: 100%;
    }

    &-block_top-title{
        font-size: 22px;
    }
    &-block{
        width: 100%;

        &:nth-child(1){
            align-items: center;
        }

        &_top-content{
            flex-direction: column;

            &-cols{
                width: 100%;
                margin-bottom: 40px;
            }
        }
    }
    &-block_bottom{
        margin-top: unset;

        .text{
            font-size: 16px;
        }
        .container-tags{
            .tags{
                padding: 2px 15px;
                font-size: 12px;
            }
        }
    }
  }
  .container-back{
    margin-top: 0px;
    margin-bottom: 60px;
    .button{
        font-size: 14px;
        font-weight: 300;
        padding: 4px 15px;
    }
  } 
  .text{
    width: 100%;
    font-size: 14px;
  }
}
</style>

<script lang="ts">
export default {
props:{
    item: Object,
},
data: () => ({
}),
components: {
},
mounted() {},
computed: {},
methods: {
    textCurrencies(array){
        let arr = [];
        for (const item of array) {
            arr.push(item?.code)
        }
        return arr.join(', ');
    },
    textLanguages(array){
        let arr = [];
        for (const item of array) {
            arr.push(item?.name)
        }
        return arr.join(', ');
    },
},
};
</script>