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
                      <input type="radio" name="delivery-type" value="store" v-model="deliveryType">
                      <label for="store">Retirada</label>
                  </div>
                  <div class="radio-option">
                      <input type="radio" name="delivery-type" value="delivery" v-model="deliveryType">
                      <label for="store">Delivery</label>
                  </div>                  
              </div>
          </div>

          <div class="order--delivery-address-group">
              <div class="delivery-address" v-if="showDeliveryAddress">
                  <p>{{formData.address.value}}, {{formData.number.value}}</p>
                  <p>{{formData.city.value}} - {{formData.state.value}}</p>
                  <p>{{formData.complement.value}}</p>
              </div>
          </div>          

          <div class="add-delivery-address">
              <a @click="openAddressModal" v-if="isDelivery">{{isAddressDataValid ? "Editar" : "Adicionar"}} Endereço</a>
          </div>

          <div class="payment">
              <h2>Pagamento</h2>
              <h3>Método de Pagamento:</h3>
              <div class="radio-container">
                  <div class="radio-option">
                      <input type="radio" name="payment-type" value="card" v-model="paymentType">
                      <label for="payment-type">Cartão</label>
                  </div>
                  <div class="radio-option">
                      <input type="radio" name="payment-type" value="money" v-model="paymentType">
                      <label for="payment-type">Dinheiro</label>
                  </div>   
              </div>
          </div>
      </form>
     <button class="primary-button" @click="placeOrder()">Confirmar Pedido</button>
     <Modal :show="showAddressModal" @on-modal-close="closeAddressModal">
         <div class="address-container">
            <h3>Adicionar Endereço</h3>
            <div class="address-container--group">
                <div class="input-group">
                    <label for="zipcode">{{formData.zipcode.label}}</label>
                    <input type="text" 
                            name="zipcode" 
                            id="zipcode" 
                            v-model="formData.zipcode.value"
                            :placeholder="formData.zipcode.placeholder" 
                            v-maska="formData.zipcode.mask"
                            :class="{'error': !formData.zipcode.valid }"
                            @blur="formData.zipcode.isValid; getAddressData();">
                    <p class="message-error" v-if="!formData.zipcode.valid">{{formData.zipcode.errorMessage}}</p>
                </div>
            </div>
            <div class="input-group">
                <label for="bairro">{{formData.bairro.label}}</label>
                <input type="text" 
                        name="bairro" 
                        id="bairro" 
                        v-model="formData.bairro.value"
                        :placeholder="formData.bairro.placeholder" 
                        :class="{'error': !formData.bairro.valid }"
                        @blur="formData.bairro.isValid">
                <p class="message-error" v-if="!formData.bairro.valid">{{formData.bairro.errorMessage}}</p>
            </div>
            <div class="address-container--group">
                <div class="input-group">
                    <label for="address">{{formData.address.label}}</label>
                    <input type="text" 
                            name="address" 
                            id="address" 
                            v-model="formData.address.value"
                            :placeholder="formData.address.placeholder" 
                            :class="{'error': !formData.address.valid }"
                            @blur="formData.address.isValid">
                    <p class="message-error" v-if="!formData.address.valid">{{formData.address.errorMessage}}</p>
                </div>
                <div class="input-group">
                    <label for="number">{{formData.number.label}}</label>
                    <input type="text" 
                            name="number" 
                            id="number" 
                            ref="number"
                            v-model="formData.number.value"
                            :placeholder="formData.number.placeholder" 
                            :class="{'error': !formData.number.valid }"
                            @blur="formData.number.isValid">
                    <p class="message-error" v-if="!formData.number.valid">{{formData.number.errorMessage}}</p>
                </div>
            </div>
            <div class="address-container--group">
                <div class="input-group">
                    <label for="city">{{formData.city.label}}</label>
                    <input type="text" 
                            name="city" 
                            id="city" 
                            v-model="formData.city.value"
                            :placeholder="formData.city.placeholder" 
                            :class="{'error': !formData.city.valid }"
                            @blur="formData.city.isValid">
                    <p class="message-error" v-if="!formData.city.valid">{{formData.city.errorMessage}}</p>
                </div>
                <div class="input-group">
                    <label for="state">{{formData.state.label}}</label>
                    <input type="text" 
                            name="state" 
                            id="state" 
                            v-model="formData.state.value"
                            :placeholder="formData.state.placeholder" 
                            :class="{'error': !formData.state.valid }"
                            @blur="formData.state.isValid">
                    <p class="message-error" v-if="!formData.state.valid">{{formData.state.errorMessage}}</p>
                </div>
            </div>
            <div class="input-group">
                <label for="complement">{{formData.complement.label}}</label>
                <input type="text" 
                        name="complement" 
                        id="complement" 
                        v-model="formData.complement.value"
                        :placeholder="formData.complement.placeholder" 
                        :class="{'error': !formData.complement.valid }"
                        @blur="formData.complement.isValid">
                <p class="message-error" v-if="!formData.complement.valid">{{formData.complement.errorMessage}}</p>
            </div>
            <div class="address-container--button-group">
                <button class="secondary-button" @click="closeAddressModal">Cancelar</button>
                <button class="primary-button" @click="addAddress">Incluir</button>
            </div>
         </div>
     </Modal>
     <Modal :show="showInvalidAddressModal" @on-modal-close="closeInvalidAddressModal">
        <div class="invalidAddressModal">
            <span class="icon" v-html="alertIcon()" ></span>
            <p>Necessário informar endereço válido para entrega.</p>
        </div>
     </Modal>
     <Modal :show="showSuccessOrderModal" @on-modal-close="closeSuccessOrderModal">
        <div class="invalidAddressModal">
            <span class="icon success" v-html="successIcon()" ></span>
            <p>Pedido Realizado com sucesso!</p>
        </div>
     </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import axios from "axios";
import feather from "feather-icons";

export default {
    name: 'Order',
    components: {
        Modal
    },
    data(){
        return {
            showAddressModal: false,
            deliveryType: 'store',
            showSavedAddress: false,
            showInvalidAddressModal: false,
            showSuccessOrderModal: false,
            paymentType: 'card',
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
                zipcode: {
                    value: '',
                    label: 'CEP*',
                    placeholder: 'Digite o seu CEP',
                    valid: true,
                    errorMessage: 'O CEP é obrigatório',
                    mask: '#####-###',
                    isValid: () => {
                        this.formData.zipcode.valid = this.formData.zipcode.value.trim().length > 0 
                    }

                },
                address: {
                    value: '',
                    label: 'Endereço*',
                    placeholder: 'Digite o seu Endereço',
                    valid: true,
                    errorMessage: 'O Endereço é obrigatório',
                    isValid: () => {
                        this.formData.address.valid = this.formData.address.value.trim().length > 0 
                    }

                },
                city: {
                    value: '',
                    label: 'Cidade*',
                    placeholder: 'Digite o sua Cidade',
                    valid: true,
                    errorMessage: 'A Cidade é Obrigatória',
                    isValid: () => {
                        this.formData.city.valid = this.formData.city.value.trim().length > 0 
                    }

                },
                number: {
                    value: '',
                    label: 'Número*',
                    placeholder: 'Digite o número',
                    valid: true,
                    errorMessage: 'O Número é Obrigatório',
                    isValid: () => {
                        this.formData.number.valid = this.formData.number.value.trim().length > 0 
                    }

                },
                state: {
                    value: '',
                    label: 'UF*',
                    placeholder: 'UF',
                    valid: true,
                    errorMessage: 'A UF é obrigatória',
                    isValid: () => {
                        this.formData.state.valid = this.formData.state.value.trim().length > 0 
                    }

                },
                bairro: {
                    value: '',
                    label: 'Bairro*',
                    placeholder: 'Digite o bairro',
                    valid: true,
                    errorMessage: 'O Bairro é Obrigatório',
                    isValid: () => {
                        this.formData.bairro.valid = this.formData.bairro.value.trim().length > 0 
                    }

                },
                complement: {
                    value: '',
                    label: 'Complemento',
                    placeholder: 'Digite o Complemento',
                    valid: true,
                    errorMessage: '',
                    isValid: () => {
                        return true;
                    }

                },
                
            }
        }
    },
    methods: {

        placeOrder(){
            this.validateFields();

            if(this.isUserDataValid() && this.isAddressDataValid()){
                this.showSuccessOrderModal = true;
            }
        },
        validateFields(){
            this.formData.name.isValid();
            this.formData.cellphone.isValid();
            if(this.deliveryType == 'delivery'){
                this.validateAddressFields();
                if(!this.isAddressDataValid()){
                    this.showInvalidAddressModal = true;
                }
            }
        },
        openAddressModal(){
            this.showAddressModal = true;
        },
        closeAddressModal(){
            this.showAddressModal = false;
        },
        validateAddressFields(){
            this.formData.zipcode.isValid();
            this.formData.city.isValid();
            this.formData.address.isValid();
            this.formData.number.isValid();
            this.formData.state.isValid();
            this.formData.bairro.isValid();
        },
        isUserDataValid(){
            let valid = true;

            valid &= this.formData.name.valid;
            valid &= this.formData.cellphone.valid;

            return valid;
        },
        isAddressDataValid(){
            let valid = true;

            valid &= this.formData.zipcode.valid;
            valid &= this.formData.city.valid;
            valid &= this.formData.address.valid;
            valid &= this.formData.number.valid;
            valid &= this.formData.state.valid;
            valid &= this.formData.bairro.valid;

            return valid

        },
        addAddress(){
            this.validateAddressFields();
            if(!this.isAddressDataValid()) return;

            this.showSavedAddress = true;
            this.closeAddressModal();
        },
        getAddressData(){
            axios.get(`https://viacep.com.br/ws/${this.formData.zipcode.value}/json/`)
                .then((response) => {
                    this.formData.city.value = response.data.localidade;
                    this.formData.address.value = response.data.logradouro;
                    this.formData.state.value = response.data.uf;
                    this.formData.bairro.value = response.data.bairro;
                    this.$refs.number.focus();
                })
        },
        closeInvalidAddressModal(){
            this.showInvalidAddressModal = false;
        },
        closeSuccessOrderModal(){
            this.showSuccessOrderModal = false;
            this.$router.push("/");
        },
        alertIcon(){
            return feather.icons["alert-triangle"].toSvg();
        },
        successIcon(){
            return feather.icons["check-circle"].toSvg();
        }
    },
    computed:{
        isDelivery(){
            return this.deliveryType === 'delivery';
        },
        showDeliveryAddress(){
            return this.deliveryType === 'delivery' && this.isAddressDataValid && this.showSavedAddress
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
                margin-bottom: 16px;
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

            .add-delivery-address{
                a{
                   color: @pink;
                   font-size: 12px;
                   text-decoration: underline; 
                   cursor: pointer;
                   display: block;
                   margin-bottom: 16px;
                }
            }
        }
        @media @tablets{
            button{
                width: 100%;
                text-align: center;
            }
        }


        &--delivery-address-group{
            display: flex;

            .delivery-address{
                border: 1px solid @light-grey;
                border-radius: 8px;
                padding: 16px 22px;
                margin: 16px 0;
                width: 274px;

                p{
                    color: @dark-grey;
                    margin: 0;
                }

                a{
                    color: @pink;
                    font-size: 12px;
                    text-decoration: underline;
                }
            }

        }

        .payment{
            margin-bottom: 16px;

            h2{
                font-size: 22px;
                font-weight: 600;
            }

            h3{
                font-size: 16px;
            }

            .radio-container{
                display: flex;
            }
        }
    }

    .address-container{
        .input-group{
            label{
                font-weight: 500;
            }

            .message-error{
                font-size: 12px;
                color: @pink;
            }
            input.error{
                    border: 1px solid @pink;
            }
        }

        &--group{
            display: flex;
            margin-top: 16px;

            .input-group{
                margin: 0;
                width: 100%;

                & + .input-group{
                    width: 40%;
                    margin-left: 14px;
                }
            }
        }

        &--button-group{
            display: flex;
            justify-content: space-between;
            margin-top: 48px;
        }

        .zipcode-button{
            width: 10px;
        }

    }

    .zipcode-group{
        display: flex;
        flex-direction:column;
        margin-bottom: 16px;
        input{
            width: 40%;
        }
    }

    .invalidAddressModal{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-bottom: 12px;

        .icon{
            padding: 12px;
            background: @yellow;
            color: white;
            width: 48px;
            height: 48px;
            border-radius: 24px;
        }

        .success{
            background: @green;
        }
    }
</style>