<template>
  <div class="modal" v-if="show">
      <div class="modal--content">
          <div 
            class="modal--content--closeIcon"
            v-html="closeIcon"
            @click="onCloseIconClick"
            >
          </div>
          <slot/>
      </div>
  </div>
</template>

<script>

import feather from 'feather-icons';

export default {
    name: "Modal",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        closeIcon(){
            return feather.icons.x.toSvg();
        }
    },
    methods: {
        onCloseIconClick(){
            this.$emit('on-modal-close')
        }
    }
}
</script>

<style lang="less" scoped>
    .modal{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);

        &--content{
            background: @neutral;
            border-radius: 8px;

            width: 600px;
            padding: 30px;
            
            position: absolute;
            top: 50%;
            right: 50%;

            transform: translate(50%, -50%);

            &--closeIcon{
                text-align: right;
            }
        }
    }
</style>