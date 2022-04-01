<template>
    <div class="container">
        <div class="cart-icon" v-if="isSmallScreen">
            <CartIcon />
        </div>
        <CategoryMenu />
        <ItemsList />
        <Cart />
    </div>
</template>

<script>

import CategoryMenu from "../components/CategoryMenu.vue"
import ItemsList from "../components/ItemsList.vue"
import Cart from "../components/Cart.vue"
import CartIcon from "../assets/icons/cart.svg";
import { isSmallScreen } from "../composable/composable.js";

export default {
    name: 'Home', 
    components: {
        CategoryMenu,
        ItemsList,
        Cart,
        CartIcon
    },
    data(){
        return{
            isSmallScreen: isSmallScreen()
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        display: flex;
        margin:0;
        padding:0;

        @media @tablets{
            flex-direction: column;
        }

        .cart-icon{
            width: 42px;
            height: 42px;
            background: @pink;
            display: flex;
            border-radius: 50%;


            justify-content: center;
            align-items: center;

            margin: 20px 20px 20px auto;

        }
    }
</style>