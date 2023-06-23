import { createRouter, createWebHistory } from 'vue-router'
import Activities from '../components/Activities.vue'
import MainPage from '../components/MainPage.vue'
import Labs from '../components/Labs.vue'
import Cloud from '../components/Cloud.vue'
import Login from '../components/Login.vue'
import Index from '../components/index.vue'
//路由数组
const routes =
    [
        {
        path: '/activities',
        name: 'activities',
        component: Activities
    },
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Index
    },
    {
        path: '/innovation',
        name: 'innovation',
        component: Labs
    },
    {
        path: '/cloud',
        name: 'cloud',
        component: Cloud
    },
    ]
const router = createRouter({
    history: createWebHistory(),
    routes //上面的路由数组
})
export default router