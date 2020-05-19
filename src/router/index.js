import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home'
import Search from '../views/search/Search'
import Shopping from '../views/shopping/Shopping'
import User from '../views/user/User'

//1.安装vue-router
Vue.use(VueRouter)

//2.配置组件组件的映射
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: Shopping
    },
    {
        path: '/user',
        name: 'user',
        component: User
    }
];

//3.创建VueRouter对象
const router = new VueRouter({
    mode: 'history',
    routes
})

//4.导出VueRouter对象，并在main.js中new Vue中加载
export default router;