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
            component: () =>
                import ('../views/mine/index.vue'),
        },
        {
            path: '/find',
            component: () =>
                import ('../views/find/index.vue')
        },
        {
            path: '/village',
            component: () =>
                import ('../views/village/index.vue'),
            redirect: '/village/square',
            children: [{
                path: 'square',
                name: 'Square',
                component: () =>
                    import ("../views/village/square/index.vue")
            }, {
                path: 'concer',
                name: 'Concer',
                component: () =>
                    import ("../views/village/concer/index.vue")
            }]
        },
        {
            path: '/video',
            component: () =>
                import ('../views/video/index.vue')
        },
        {
            path: '/search',
            component: () =>
                import ('../views/search/index.vue')
        },
        {
            path: '/audio',
            component: () =>
                import ('../views/audio/index.vue')
        },
        {
            path: '/login',
            component: () =>
                import ('../views/login/index.vue')
        }
    ],
    linkActiveClass: 'active'
})
export default router