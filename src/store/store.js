import { createStore } from "vuex";

export const store = createStore({
    state(){
        return {
            selectedCategory: 'teste'
        }
    },
    mutations: {
        changeCategory(state, id){
            state.selectedCategory = id;
        }
    },
    actions:{
        changeCategory(context, id){
            context.commit('changeCategory', id);
        }
    }
})


