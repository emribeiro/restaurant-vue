import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.less'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'
import Cart from './components/Cart.vue';
import AddToCart from './components/AddToCart.vue';
import Payment from './views/Payment.vue';
import { store } from './store/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home},
        { path: '/cart', component: Cart},
        { name: 'AddToCart', path: '/addtocart/:id', component: AddToCart, props: true},
        { name: 'Payment', path: '/payment', component: Payment}
    ]
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
