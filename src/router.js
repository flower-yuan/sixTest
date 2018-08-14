import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/view/login.vue'
import Home from '@/view/home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {name:'login', path: '/login', component: Login },
        {name:'home', path: '/', component: Home}
    ]
})

export default router;
