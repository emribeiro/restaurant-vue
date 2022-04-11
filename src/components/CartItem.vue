<template>
    <div class="cart-item">
        <ItemQuantity :item="item" />
        <div class="cart-item--img-content">
            <img :src="imagePath(item.id)" class="cart-item--image"/>
        </div>
        <div class="content">
            <h3 class="cart-item--name">{{item.name}}</h3>
            <a class="cart-item--observation" @click="onOpenObservationModal">Adicionar Observação</a>
            <p class="cart-item--observation-text">{{item.observation}}</p>
        </div>
        <p class="cart-item--price">{{formatCurrency(item.price)}}</p>
        <Modal :show="showObservationModal" @on-modal-close="onCloseObservationModal">
            <div class="observation-modal">
                <h1>Adicionar Observação</h1>
                <textarea rows="10" v-model="item.observation"></textarea>
                <button class="secondary-button" @click="onCloseObservationModal">Cancelar</button>
                <button class="primary-button" @click="onSaveObservation">Salvar</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import ItemQuantity from "./ItemQuantity.vue";
import Modal from "./Modal.vue";
export default {
    name: 'CartItem',
    components: {
        ItemQuantity,
        Modal
    },
    props: {
        item: {}
    },
    data(){
        return {
            showObservationModal: false,
        }
    },
    methods: {
        imagePath(id){
            return `/src/assets/images/${id}.png`;
        },
        formatCurrency(amount){
            return amount.toLocaleString('pt-br',  {style: 'currency', currency: 'BRL'});
        },
        onOpenObservationModal(){
            this.showObservationModal = true;
        },
        onCloseObservationModal(){
            this.showObservationModal = false;
        },
        onSaveObservation(){
            this.$store.dispatch('addObservation', this.item);
            this.showObservationModal = false;
        }
    }
}
</script>

<style lang="less" scoped>

    .cart-item{
        display: flex;
        padding: 20px 0;
        border-bottom: 1px solid @light-grey;
        align-items: center;

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
            cursor: pointer;
        }

        &--observation-text{
            font-size: 12px;
            color: @dark-grey;
        }

        &--price{
            font-size: 18px;
            font-weight: 600;
            color: @yellow;
        }

        .observation-modal{
            text-align: center;

            textarea{
                width: 90%;
                border: 1px solid @light-grey;
                border-radius: 8px;
                margin-bottom: 12px;

                &:focus{
                    outline: 0;
                }
            }

            button + button {
                margin-left: 16px;
            }
        }

        @media @tablets{
            flex-wrap: wrap;
            padding-bottom: 0;
           
            &--quantity-content{
                order: 3;
                margin: 12px 16px;
            }

            &--img-content{
                order: 1;
            }
            .content{
                order:2;
            }

            &--price{
                order: 4;
                margin-left: 24px;
            }

            .observation-modal{
                h1{
                    font-size: 20px;
                }
            }
        }
    }
</style>