<template>
    <div class="item-quantity">
        <button class="buttons" @click="decrementQuantity(item.id)" :disabled="item.quantity <= 1">-</button>
        <span class="item-quantity--quantity">{{item.quantity}}</span>
        <button class="buttons" @click="incrementQuantity(item.id)">+</button>
    </div>  
</template>

<script>

import { mapActions } from "vuex";


export default {
    name: 'ItemQuantity',
    props: {
        item: {}
    },
    methods: {
        ...mapActions([
            'incrementQuantity',
            'decrementQuantity'
        ])
    }
}
</script>

<style lang="less" scoped>

.item-quantity{
    display: flex;
    align-items: center;

    &--quantity{
        font-size: 18px;
        font-weight: 500;
        color: @yellow;
        padding: 0 10px;
    }
}

.buttons{
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border: 0;
    background: none;

    &:focus{
        outline: 0;
    }
}
</style>   