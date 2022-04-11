<template>
  <div class="add-cart">
    <router-link to="/" class="add-cart--goback">
        ←️ Voltar
    </router-link>  
    <Item :item="item" />
    <div class="add-cart--quantity-container">
      <span class="add-cart--quantity-container--title">Quantidade</span>
      <ItemQuantity :item="item" :useStore="false"/>
    </div>
    <div class="add-cart--observation-container">
      <p class="add-cart--observation-container--observation">Observações:</p>
      <textarea class="add-cart--observation-container--textarea" rows="10" v-model="item.observation"></textarea>
    </div>
    <button class="primary-button add-cart--button" @click="addItemToCart">Adicionar ao Carrinho</button>
  </div>
</template>

<script>
import Item from './Item.vue';
import ItemQuantity from './ItemQuantity.vue';
import axios from 'axios';

export default {
    name: "AddToCart",
    components: {
      Item,
      ItemQuantity
    },
    props: ['id'],
    data() {
      return {
        item: {},
      }
    },
    created(){
      axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`).then( response => {
        this.item = { quantity: 1, observation:  '', ...response.data };
      });
    },
    computed: {
        selectedCategory: {
            get() {
                return this.$store.state.selectedCategory;
            }
        }
    },
    methods: {
      addItemToCart(){
        this.$store.dispatch('addToCart', this.item);
        this.$router.push('/');
      }
    }
}

</script>

<style lang="less" scoped>
  .add-cart{
    padding: 50px 20px; 

    &--goback{
        font-weight: 600;
        font-size: 18px;
        color: black;
        text-decoration: none;
        margin: 12px 0 32px 0;
    }

    &--quantity-container{
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16px;
      border: 1px solid @light-grey;
      border-radius: 8px;
      padding: 12px;

      &--title{
        font-weight: 600;
      }
    }

    &--observation-container{
      width: 90%;
      margin: 16px;

      &--observation{
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 8px;
      }

      &--textarea{
        width: 100%;
        border: 1px solid @light-grey;
        border-radius: 8px;

        &:focus{
          outline: 0;
        }
      }
    }

    &--button{
      position: fixed;
      bottom: 36px;
      left: 36px;
      right: 36px;
      width: calc(100% - 72px);
    }
  }
</style>