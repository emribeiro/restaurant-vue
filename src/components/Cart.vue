<template>
    <div class="cart">
        <h2 class="cart--item">
            Seu Pedido
        </h2>
        <CartItem 
            v-for="item in cartList"
            :key="item.id"
            :item="item"
        />

        <div class="cart--total" v-if="this.total > 0">
            <h3 class="cart--total--title">Total</h3>
            <span class="cart--total--amount">{{formatCurrency(this.total)}}</span>
        </div>
    </div>
</template>

<script>

import CartItem from './CartItem.vue';

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data(){
        return {
            total: 9.90,
        }
    },
    methods:{
        formatCurrency(amount){
            return amount.toLocaleString('pt-br',  {style: 'currency', currency: 'BRL'});
        }
    },
    computed: {
        cartList: {
            get(){
                return this.$store.state.cartList;
            }
        }
    }
}
</script>

<style lang="less" scoped>

    .cart{
        background: @neutral;
        width: 643px;
        min-width: 643px;
        padding: 20px 40px;

        &--item{
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
        }

        &--total{
            display: flex;
            align-items: center;
            text-align: right;
            justify-content: right;
            
            &--title{
                font-size: 18px;
                font-weight: 600;
                margin-right: 20px;
            }

            &--amount{
                font-size: 18px;
                font-weight: 600;
                color: @yellow;
            }
        }
    }

</style>