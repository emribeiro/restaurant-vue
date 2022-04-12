<template>
  <div class="payment">
    <div class="payment--content">
      <router-link to="/" class="payment--content--goback">
          ←️ Voltar
      </router-link>

      <Order></Order>
    </div>
    <Cart v-if="isDesktop"/>
  </div>
</template>

<script>

import Cart from "../components/Cart.vue"
import Order from "../components/Order.vue"
import { isDesktop } from "../composable/composable"

export default {
    name: "Payment",
    components: {
      Cart,
      Order
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