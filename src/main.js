import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.less'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'
import { store } from './store/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home}
    ]
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
