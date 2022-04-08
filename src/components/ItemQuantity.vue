<template>
    <div class="item-quantity">
        <button class="buttons" @click="onDecreaseButtonClick" :disabled="item.quantity == 0">-</button>
        <span class="item-quantity--quantity">{{item.quantity}}</span>
        <button class="buttons" @click="onIncreaseButtonClick">+</button>
        <Modal :show="showModal" @on-modal-close="onCancelButtonClick">
            <div class="modal-content">
                <h2>Deseja remover este item do Carrinho?</h2>

                <button class="secondary-button" @click="onCancelButtonClick">Cancelar</button>
                <button class="primary-button" @click="onRemoveButtonClick">Sim, Remover</button>
            </div>
        </Modal>
    </div>  
</template>

<script>

import { mapActions } from "vuex";
import Modal from "./Modal.vue";


export default {
    name: 'ItemQuantity',
    components: {
        Modal,
    },
    props: {
        item: {},
        useStore: {
            type: Boolean,
            default: true,
        }
    },
    data(){
        return {
            showModal: false
        }
    },
    methods: {
        ...mapActions([
            'incrementQuantity',
            'decrementQuantity'
        ]),
        onDecreaseButtonClick(){
            if(this.useStore){
                this.decrementQuantity(this.item.id);
            }else{
                --this.item.quantity;
            }

            if(this.item.quantity == 0){
                this.showModal = true;
            }

        },
        onIncreaseButtonClick(){
            if(this.useStore){
                this.incrementQuantity(this.item.id);
            }else{
                ++this.item.quantity;
            }

        },
        onCancelButtonClick(){
            this.incrementQuantity(this.item.id);
            this.showModal = false;
        },
        onRemoveButtonClick(){
            this.showModal = false;

            this.$nextTick(() => {
                this.$store.dispatch('removeFromCart', this.item.id);
            })
        }
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

.modal-content{
    text-align: center;

    button{
        margin: 20px 10px;
    }
}
</style>   