<template>
  <div class="category-menu">
      <ul>
          <li 
             v-for="category in categoriesList" 
             v-bind:key="category.id"
             :class="{ 'active' : isActive(category.id)}"   
             @click="changeActiveCategory(category.id)"
          >
              <component :is="category.icon"/>
              <p>
                  {{ category.label }}
              </p>
          </li>
      </ul>

  </div>
</template>

<script>

import Pizza from '../assets/icons/pizza.svg';
import Drinks from '../assets/icons/smothie.svg';
import Sweets from '../assets/icons/ice-cream.svg';
import Combo from '../assets/icons/french-fries.svg';
import Burger from '../assets/icons/food.svg';

export default {
    name: 'CategoryMenu',
    components: {
        Pizza,
        Drinks,
        Sweets,
        Combo,
        Burger,
    },
    data(){
        return {
            categoriesList: [
                { label: 'Pizza', icon: 'Pizza', id: 'pizza'},
                { label: 'Bebidas', icon: 'Drinks', id: 'drinks'},
                { label: 'Doces', icon: 'Sweets', id: 'deserts'},
                { label: 'Combos', icon: 'Combo', id: 'combo'},
                { label: 'Burgers', icon: 'Burger', id: 'burguers'}
            ],
            activeCategory: '', 
        }
    },
    mounted(){
        this.changeActiveCategory('pizza');
    },
    methods: {
        isActive(categoryId){
            return categoryId === this.activeCategory;
        },
        changeActiveCategory(categoryId){
            this.activeCategory = categoryId;
            this.$store.dispatch('changeCategory', categoryId);
        }
    },
}
</script>

<style lang="less">

.category-menu {
    width: 130px;
    min-width: 130px;
    height: 100vh;
    display: flex;
    align-items: center;
    background: white;

    ul{
        list-style: none;
        width: 100%;
        padding: 0;

        li{
            display: flex; 
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100px;

            p {
                font-weight: 500;
                font-size: 14px;
                margin-bottom: 0;
                color: @light-grey;
            }

            svg{

                path{
                    fill: @light-grey;
                }
            }

            &.active{
                background: @yellow;
                border-radius: 8px;
                p{
                      color: @dark-grey;
                }

                svg{
                    path{
                        fill: @dark-grey;
                    }
                }
            }
        }
    }

    @media @small-desktops {

        width: 100%;
        max-width: 800px;
        height: fit-content;
        margin: 0 auto;

        ul{
            display: flex;
            margin: 20px;
            overflow: scroll;
            justify-content: space-between;

            li{
                min-width: 78px;
                border: 1px solid @light-grey;
                border-radius: 8px;
                margin-right: 10px;
            }
        }
    }

    @media @tablets{
        ul{
            justify-content: unset;
        }
    }
}
</style>