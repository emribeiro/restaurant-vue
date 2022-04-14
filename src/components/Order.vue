<template>
  <div class="order">
      <form>
          <h3>Seus Dados</h3>
          <div class="order--input-group">
            <label for="name">{{formData.name.label}}</label>
            <input type="text" 
                    name="name" 
                    id="name" 
                    v-model="formData.name.value"
                    :placeholder="formData.name.placeholder" 
                    :class="{'error': !formData.name.valid }"
                    @blur="formData.name.isValid">
            <p class="message-error" v-if="!formData.name.valid">{{formData.name.errorMessage}}</p>
          </div>
          <div class="order--input-group">
            <label for="cellphone">{{formData.cellphone.label}}</label>
            <input type="text" 
                    name="cellphone" 
                    id="cellphone" 
                    v-model="formData.cellphone.value"
                    :placeholder="formData.cellphone.placeholder" 
                    v-maska="formData.cellphone.mask"
                    :class="{'error': !formData.cellphone.valid }"
                    @blur="formData.cellphone.isValid">
            <p class="message-error" v-if="!formData.cellphone.valid">{{formData.cellphone.errorMessage}}</p>
          </div>
      </form>
     <button class="primary-button" @click="placeOrder()">Confirmar Pedido</button>
  </div>
</template>

<script>
export default {
    name: 'Order',
    data(){
        return {
            formData: {
                name: {
                    value: '',
                    label: 'Nome*',
                    placeholder: 'Digite o seu nome',
                    valid: true,
                    errorMessage: 'O nome é Obrigatório',
                    isValid: () => {
                        this.formData.name.valid = this.formData.name.value.trim().length > 0
                    }

                },
                cellphone: {
                    value: '',
                    label: 'Telefone*',
                    placeholder: 'Digite o seu Telefone',
                    valid: true,
                    errorMessage: 'O telefone é obrigatório',
                    mask: '(##) # ####-####',
                    isValid: () => {
                        this.formData.cellphone.valid = this.formData.cellphone.value.trim().length > 0 
                    }

                },
            }
        }
    },
    methods: {

        placeOrder(){
            this.validateFields();
        },validateFields(){
            this.formData.name.isValid();
            this.formData.cellphone.isValid();
        }
    }
}
</script>

<style lang="less" scoped>

    .order {

        width: 762px;
        margin: 32px auto;
        padding: 32px;
        background: @neutral;

        h3{
            font-weight: 600;
            font-size: 22px;
        }
        form{
            display: flex;
            flex-direction: column;

            label{
                font-weight: 500;
            }

            .message-error{
                font-size: 12px;
                color: @pink;
            }

            input{
                &.error{
                    border: 1px solid @pink;
                }
            }
        }
    }

</style>