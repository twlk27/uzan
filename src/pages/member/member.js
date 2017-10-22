import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import url from 'js/api.js'
import utils, {log} from 'js/utils.js'
Vue.use(Router)

// route.vue
import rMember from './components/member.vue'
import rAddress from './components/address.vue'
import rAll from './components/all.vue'
import rForm from './components/form.vue'

let routes = [{
    path: '/',
    component: rMember
},{
    path: '/address',
    component: rAddress,
    children: [{
        path: '',
        // component: rAll, // -> /address
        redirect: 'all', // -> /address/all
    },{
        path: 'all',
        component: rAll,
    },{
        path: 'form',
        component: rForm,
    }]
}]

// 创建router实例
let router = new Router({
    routes
})

// 跟组件注入
new Vue({
    el: "#app",
    router
})
