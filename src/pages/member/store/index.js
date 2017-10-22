// 使用 vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Address from 'js/addressService.js'

// 创建Store实例
const store = new Vuex.Store({
    state: {
        list: null
    },
    mutations: {
        init(state, list){
            state.list = list
        }
    },
    actions: {
        requestAddresses(context) {
            Address.list().then(res => {
                context.commit('init', res.data.list)
            })
        }
    }

})

export default store
