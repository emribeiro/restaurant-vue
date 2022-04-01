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
            state.cartList.push({... el, quantity: 1});
        },
        incrementQuantity(state, index){
            ++state.cartList[index].quantity;
        },
        decrementQuantity(state, index){
            --state.cartList[index].quantity;
        }
    },
    actions:{
        changeCategory(context, id){
            context.commit('changeCategory', id);
        },
        addToCart({state, commit}, el){
            const index = state.cartList.findIndex(item => item.id === el.id);
            (index >= 0) ? commit('incrementQuantity', index) : commit('addToCart', el);
        },
        incrementQuantity({ state, commit}, id){
            const index = state.cartList.findIndex(item => item.id === id);
            commit('incrementQuantity', index);
        },
        decrementQuantity({ state, commit}, id){
            const index = state.cartList.findIndex(item => item.id === id);
            commit('decrementQuantity', index);
        },
    }
});


