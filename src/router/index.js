import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/mine'
        },
        {
            path: '/mine',
            component: () => import('../views/mine/index.vue'),
        },
        {
            path: '/find',
            component: () => import('../views/find/index.vue')
        },
        {
            path: '/toplistsdetail',
            component: () => import("../views/find/toplistsdetail.vue")
        },
        {
            path: '/village',
            component: () => import('../views/village/index.vue')
        },
        {
            path: '/video',
            component: () => import('../views/video/index.vue')
        },
        {
            path: '/search',
            component: () => import('../views/search/index.vue')
        },
        {
            path: '/audio',
            component: () => import('../views/audio/index.vue')
        },
        {
            path: '/login',
            component: () => import('../views/login/index.vue')
        }
    ],
    linkActiveClass: 'active'
})
export default router