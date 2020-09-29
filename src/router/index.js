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
                import ('../views/village/index.vue')
        },
        {
            path: '/video',
            component: () =>
                import ('../views/video/index.vue'),
            redirect: '/video/tui',
            children: [{
                    path: 'tui',
                    component: () =>
                        import ('../views/video/tui/index.vue'),
                },
                {
                    path: 'zhibo',
                    component: () =>
                        import ('../views/video/zhibo/index.vue'),
                },
                {
                    path: 'fan',
                    component: () =>
                        import ('../views/video/fan/index.vue'),
                },
                {
                    path: 'xian',
                    component: () =>
                        import ('../views/video/xian/index.vue'),
                },
                {
                    path: 'music',
                    component: () =>
                        import ('../views/video/music/index.vue'),
                }
            ]
        },
        {
            path: '/search',
            component: () =>
                import ('../views/search/index.vue')
        }
    ],
    linkActiveClass: 'active'
})
export default router