<template>
  <div class="add-cart">
    <router-link to="/" class="cart--goback">
        ←️ Voltar
    </router-link>  
      Hello {{id}}
  </div>
</template>

<script>
export default {
    name: "AddToCart",
    props: ['id'],
}
</script>

<style>

</style>