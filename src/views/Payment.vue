<template>
  <div class="payment">
    <div class="payment--content">
      <router-link to="/" class="payment--content--goback">
          ←️ Voltar
      </router-link>

    </div>
    <Cart v-if="isDesktop"/>
  </div>
</template>

<script>

import Cart from "../components/Cart.vue"
import { isDesktop } from "../composable/composable"

export default {
    name: "Payment",
    components: {
      Cart
    }, 
    data(){
      return {
        isDesktop: isDesktop(),
      }
    }
}
</script>

<style lang="less" scoped>
  .payment{
    display: flex;

    &--content{
      flex-grow: 1;
      padding: 48px;

      &--goback{
            font-weight: 600;
            font-size: 18px;
            color: black;
            text-decoration: none;
            margin: 12px 0;
        }
    }
  }
</style>