import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.less'
import { createRouter, createWebHistory } from 'vue-router';
import CategoryMenu from './components/CategoryMenu.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: CategoryMenu}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
