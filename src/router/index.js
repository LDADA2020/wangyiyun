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
            component: () => import('../views/mine/index.vue')
        },
        {
            path: '/mine/mylist',
            component: () => import('../views/mine/mylist/index.vue')
        },
        {
            path: '/find',
            component: () =>
                import('../views/find/index.vue')
        },
        {
            path: '/toplistsdetail',
            component: () => import("../views/find/toplistsdetail.vue")
        },
        {
            path: '/village',
            component: () => import('../views/village/index.vue'),
            redirect: '/village/square',
            children: [{
                path: 'square',
                name: 'Square',
                component: () => import("../views/village/square/index.vue")
            }, {
                path: 'concer',
                name: 'Concer',
                component: () => import("../views/village/concer/index.vue")
            }]
        },
        {
            path: '/video',
            component: () => import('../views/video/index.vue'),
            redirect: '/video/tui',
            children: [{
                    path: 'tui',
                    component: () => import('../views/video/tui/index.vue')
                },
                {
                    path: 'zhibo',
                    component: () => import('../views/video/zhibo/index.vue')
                }, {
                    path: 'music',
                    component: () => import('../views/video/music/index.vue')
                }, {
                    path: 'xian',
                    component: () => import('../views/video/xian/index.vue')
                }, {
                    path: 'fan',
                    component: () => import('../views/video/fan/index.vue')
                }
            ]
        },
        {
            path: '/search',
            component: () =>
                import('../views/search/index.vue')
        },
        {
            path: '/audio',
            component: () =>
                import('../views/audio/index.vue')
        },
        {
            path: '/login',
            component: () => import('../views/login/index.vue')
        },
        {
            path: '/deng',
            component: () => import('../views/login/deng.vue')
        },
        {
            path: '/register',
            component: () => import('../views/register/index.vue')
        },
        {
            path: 'audio/:id',
            component: () => import('../views/audio/index.vue'),
        },
    ],
    linkActiveClass: 'active'
})
export default router