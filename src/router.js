import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/list',
            name: 'list',
            component: ()=> import('./pages/ListPages.vue')
        },
        {
            path: '/',
            name: 'create',
            component: ()=> import('./pages/Create.vue')
        },
        {
            path: '/task/:id',
            name: 'task',
            component: ()=> import('./pages/TaskPages.vue')
        }
    ]
})