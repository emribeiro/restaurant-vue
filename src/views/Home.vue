<template>
    <div class="container">
        <router-link to="/cart" class="cart-icon">
            <CartIcon />
        </router-link>
        <CategoryMenu />
        <ItemsList />
        <Cart class="cart"/>
    </div>
</template>

<script>

import CategoryMenu from "../components/CategoryMenu.vue"
import ItemsList from "../components/ItemsList.vue"
import Cart from "../components/Cart.vue"
import CartIcon from "../assets/icons/cart.svg";
import { isSmallScreen, isDesktop } from "../composable/composable.js";

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
            isSmallScreen: isSmallScreen(),
            isDesktop: isDesktop()
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        display: flex;
        margin:0;
        padding:0;

        .cart-icon{
            display: none;
        }

        @media @small-desktops{
            flex-direction: column;
            .cart{
                display: none;
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
    }
</style>