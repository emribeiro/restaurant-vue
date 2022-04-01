import { createStore } from "vuex";

export const store = createStore({
    state(){
        return {
            selectedCategory: 'teste',
            cartList: []
        }
    },
    mutations: {
        changeCategory(state, id){
            state.selectedCategory = id;
        },
        addToCart(state, el){
            state.cartList.push(el);
        }
    },
    actions:{
        changeCategory(context, id){
            context.commit('changeCategory', id);
        },
        addToCart(context, el){
            context.commit('addToCart', el);
        }
    }
});


