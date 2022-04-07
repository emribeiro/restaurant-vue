<template>
    <div class="cart">
        <router-link to="/" class="cart--goback" v-if="isSmallScreen">
            ←️ Voltar
        </router-link>
        <h2 class="cart--item">
            Seu Pedido
        </h2>
        <p v-if="isEmptyCart"> Seu Carrinho ainda está vazio.</p>
        <TransitionGroup name="list" >
            <CartItem 
                v-for="item in cartList"
                :key="item.id"
                :item="item"
            />
        </TransitionGroup>

        <div class="cart--total" v-if="isNotEmptyCart">
            <h3 class="cart--total--title">Total:</h3>
            <span class="cart--total--amount">{{formatCurrency(getCartTotal())}}</span>
        </div>
    </div>
</template>

<script>

import CartItem from './CartItem.vue';
import { isSmallScreen } from '../composable/composable.js'
import { mapGetters } from 'vuex';

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data(){
        return {
            isSmallScreen: isSmallScreen()
        }
    },
    methods:{
        formatCurrency(amount){
            return amount.toLocaleString('pt-br',  {style: 'currency', currency: 'BRL'});
        },
        ...mapGetters([
            'getCartTotal'
        ])
    },
    computed: {
        cartList: {
            get(){
                return this.$store.state.cartList;
            }
        },
        isNotEmptyCart(){
            return this.cartList.length > 0;
        },
        isEmptyCart(){
            return this.cartList.length == 0;
        }
    }, 

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

        &--goback{
            font-weight: 600;
            font-size: 18px;
            color: black;
            text-decoration: none;
            margin: 12px 0;
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

        .list-enter-active,
        .list-leave-active {
        transition: all 0.5s ease;
        }
        .list-enter-from,
        .list-leave-to {
        opacity: 0;
        transform: translateX(-30px);
        }


        @media @tablets{
            min-width: unset;
            width: unset;
        }
    }

</style>