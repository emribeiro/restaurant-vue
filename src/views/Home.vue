<template>
    <div class="container">
        <CategoryMenu />
        <ItemsList />
    </div>
</template>

<script>

import CategoryMenu from "../components/CategoryMenu.vue"
import ItemsList from "../components/ItemsList.vue"

export default {
    name: 'Home', 
    components: {
        CategoryMenu,
        ItemsList
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