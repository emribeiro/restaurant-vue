<template>
    <div class="itemsList">
        <Loading v-if="isLoading"/>
        <Item v-for="item in itemsList" :key="item.id" :item="item" />
        
    </div>
</template>

<script>
import axios from 'axios';
import Loading from './Loading.vue';
import Item from './Item.vue';

export default {
    name: "ItemsList",
    components: {
        Loading,
        Item
    },
    data(){
        return {
            itemsList: [],
            isLoading: false
        }
    },
    created(){
        this.getItensList();
    }, 
    methods: {
        getItensList(){
            this.isLoading =  true;
            this.itemsList = [];

            axios.get(`http://localhost:3000/${this.selectedCategory}`).then( response => {
                this.itemsList = response.data;
                this.isLoading = false
            })
        }
    },
    computed: {
        selectedCategory: {
            get() {
                return this.$store.state.selectedCategory;
            }
        }
        
    },
    watch: {
        selectedCategory(){
            this.getItensList();
        }
    }    

}
</script>
    
<style lang="less" scoped>

    .itemsList{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-content: flex-start;

        @media @small-desktops{
            width: 100%;
            max-width: 800px;
            margin: 48px auto;
        }
    } 
</style>