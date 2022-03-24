<template>
    <div
        v-for="item in itemsList"
        :key="item.id"
        class="item"
    >
        <div class="item--image-tag">
            <span v-if="item.offer" class="item--offer">Oferta</span>
            <img src="../assets/images/burger.png" class="item--image"/>
        </div>
        <div class="content">
            <h2 class="item--name">{{item.name}}</h2>
            <p class="item--description">{{item.description}}</p>
            <p class="item--price">{{formatCurrency(item.price)}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            itemsList: []
        }
    },
    created(){
        axios.get("http://localhost:3000/burguers").then( response => {
            this.itemsList = response.data;
        })
    }, 
    methods: {
        formatCurrency(amount){
            return amount.toLocaleString('pt-br',  {style: 'currency', currency: 'BRL'});
        }
    }    

}
</script>
    
<style lang="less" scoped>
    .item{
        width: 216px;
        height: 292px;
        background: @neutral;
        border-radius: 8px;
        position: relative;
        margin: 16px;
        padding: 16px;

        &--offer{
            color: @neutral;
            font-weight: 600;
            background: @pink;
            border-radius: 16px;
            font-size: 12px;
            padding: 2px 8px;
            position: absolute;
            top: 12px;
            right: 8px;
        }

        &--name{
            font-size: 18px;
            font-weight: 600;

        }

        &--description{
            font-size: 12px;
            color: @dark-grey;
            margin: 0;
        }

        &--price{
            color: @yellow;
            font-size: 18px;
            font-weight: 600;
        }

        &--image{
            display: block;
            margin: 20px auto 0px;
        }

        @media @tablets {
            width: 90%;
            height: fit-content;

            display: flex;
            flex-direction: row;

            margin: 8px 16px;
            border: 1px solid @light-grey;
            padding: 0;

            &--image-tag{
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
            }

            &--name{
                margin: 8px;
            }

            &--offer{
                position: static;
                height: fit-content;
                order: 1;
                margin: 8px;
            }
            &--image{
                height: 59px;
                width: 86px;
                margin-right: 14px;
                order: 0;
            }

            &--description{
                margin: 8px;
            }

            &--price{
                text-align: right;
                padding-right: 12px;
                margin: 4px;
            }

        }
    }

    
</style>