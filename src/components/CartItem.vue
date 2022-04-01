<template>
    <div class="cart-item">
        <div class="cart-item--quantity-content">
            <span class="buttons" @click="decrementQuantity(item.id)">-</span>
            <span class="cart-item--quantity">{{item.quantity}}</span>
            <span class="buttons" @click="incrementQuantity(item.id)">+</span>
        </div>
        <div class="cart-item--img-content">
            <img :src="imagePath(item.id)" class="cart-item--image"/>
        </div>
        <div class="content">
            <h3 class="cart-item--name">{{item.name}}</h3>
            <a class="cart-item--observation">Adicionar Observação</a>
        </div>
        <p class="cart-item--price">{{formatCurrency(item.price)}}</p>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'CartItem',
    props: {
        item: {}
    },
    methods: {
        imagePath(id){
            return `/src/assets/images/${id}.png`;
        },
        formatCurrency(amount){
            return amount.toLocaleString('pt-br',  {style: 'currency', currency: 'BRL'});
        },
        ...mapActions([
            'incrementQuantity',
            'decrementQuantity'
        ])
    }
}
</script>

<style lang="less" scoped>

    .cart-item{
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid @light-grey;
        align-items: center;
        
        &--quantity--content{
            display: flex;
            align-items: center;
        }

        &--quantity{
            font-size: 18px;
            font-weight: 500;
            color: @yellow;
            padding: 0 10px;
        }
        .buttons{
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
        }

        &--image{
            width: 100%;
        }
        &--img-content{
            display: flex;
            align-items: center;
            background: @light-yellow;
            border-radius: 8px;
            width: 81px;
            height: 66px;
            margin: 0 20px
        }

        .content{
            flex-grow: 1;
        }

        &--name{
            font-weight: 600;
            font-size: 18px;
            margin: 0;
        }

        &--observation{
            font-size: 12px;
            color: @dark-grey;
            text-decoration: underline;
            margin: 0;
        }

        &--price{
            font-size: 18px;
            font-weight: 600;
            color: @yellow;
        }
    }
</style>