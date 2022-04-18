<template>
  <div class="order">
      <form>
          <div class="order--personal-data">
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
          </div>
          <div class="order--delivery-options">
              <h3>Entrega</h3>
              <div class="delivery-type">
                  <div class="radio-option">
                      <input type="radio" id="store">
                      <label for="store">Retirada</label>
                  </div>
                  <div class="radio-option">
                      <input type="radio" id="delivery">
                      <label for="store">Delivery</label>
                  </div>                  
              </div>
          </div>
          <div class="delivery-address">
              <a>Adicionar Endereço</a>
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

            .delivery-type{
                display: flex;
            }

            .radio-option{
                display: flex;
                align-items: center;
                &+.radio-option{
                    margin-left: 24px;
                }

                input{
                    margin: 0;
                }

                label{
                    padding-left: 12px;
                    font-weight: 400;
                    color: @dark-grey;
                }
            }

            .delivery-address{
                a{
                   color: @pink;
                   font-size: 12px;
                   text-decoration: underline; 
                }
            }
        }
    }

</style>