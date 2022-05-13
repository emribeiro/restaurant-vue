<template>
    <div class="cart">
        <router-link to="/" class="cart--goback" v-if="!isDesktop">
            ←️ Voltar
        </router-link>
        <div class="cart--content">
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
        </div>

        <div class="cart--total" v-if="isNotEmptyCart">
            <h3 class="cart--total--title">Total:</h3>
            <span class="cart--total--amount">{{formatCurrency(getCartTotal())}}</span>
        </div>

        <button class="primary-button finalizarCompra-button" @click="goToPayment" v-if="cartList.length > 0 && !isPaymentPage">Finalizar Compra</button>
    </div>
</template>

<script>

import CartItem from './CartItem.vue';
import { isSmallScreen, isDesktop } from '../composable/composable.js'
import { mapGetters } from 'vuex';


export default {
    name: 'Cart',
    components: {
        CartItem,
    },
    data(){
        return {
            isSmallScreen: isSmallScreen(),
            isDesktop: isDesktop()
        }
    },
    methods:{
        formatCurrency(amount){
            return amount.toLocaleString('pt-br',  {style: 'currency', currency: 'BRL'});
        },
        ...mapGetters([
            'getCartTotal'
        ]),
        goToPayment(){
            this.$router.push({ name: 'Payment' });
        }
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
        },
        isPaymentPage(){
            return this.$route.name == 'Payment';
        }
    }, 

}
</script>

<style lang="less" scoped>

    .cart{
        background: @neutral;
        width: 522px;
        min-width: 522px;
        height: 100vh;
        padding: 30px;
        display: flex;
        flex-direction: column;

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

        &--content{
            flex-grow: 1;
            overflow: auto;
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

        .finalizarCompra-button{
            width: 397px;
            margin: 0 auto;
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
            .finalizarCompra-button{
                width: 100%;
            }
        }
    }

</style>