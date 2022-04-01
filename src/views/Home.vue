<template>
    <div class="container">
        <CategoryMenu />
        <ItemsList />
        <Cart />
    </div>
</template>

<script>

import CategoryMenu from "../components/CategoryMenu.vue"
import ItemsList from "../components/ItemsList.vue"
import Cart from "../components/Cart.vue"

export default {
    name: 'Home', 
    components: {
    CategoryMenu,
    ItemsList,
    Cart
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
    }
</style>