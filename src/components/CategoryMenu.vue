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

import Pizza from './icons/Pizza.vue'
import Drinks from './icons/Smothie.vue';
import Sweets from './icons/Ice-cream.vue';
import Combo from './icons/French-fries.vue';
import Burger from './icons/Food.vue';

import axios from 'axios';

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
                { label: 'Doces', icon: 'Sweets', id: 'sweets'},
                { label: 'Combos', icon: 'Combo', id: 'combo'},
                { label: 'Burgers', icon: 'Burger', id: 'Burger'}
            ],
            activeCategory: "pizza", 
        }
    },
    methods: {
        isActive(categoryId){
            return categoryId === this.activeCategory;
        },
        changeActiveCategory(categoryId){
            this.activeCategory = categoryId;
        }
    },
}
</script>

<style lang="less">

.category-menu {
    width: 130px;
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

    @media @smartphone {

        width: 100%;
        height: fit-content;

        ul{
            display: flex;
            margin: 20px;
            overflow: scroll;

            li{
                min-width: 78px;
                border: 1px solid @light-grey;
                border-radius: 8px;
                margin-right: 10px;
            }
        }
    }
}
</style>