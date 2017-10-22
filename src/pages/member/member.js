import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import url from 'js/api.js'
import utils, {log} from 'js/utils.js'
Vue.use(Router)

// route.vue
import MemberX from './components/member.vue'
import Address from './components/address.vue'

let routes = [{
    path: '/',
    component: MemberX
},{
    path: '/address',
    component: Address
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
