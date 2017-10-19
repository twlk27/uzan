import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

// ui
// import { InfiniteScroll } from 'mint-ui'
// Vue.use(InfiniteScroll)

// component
import Foot from 'components/Foot.vue'

// utils
const log = console.log.bind(console)

new Vue({
    el: '#app',
    data: {
        categorys1: null,

    },
    created() {
        this.requestCategorys()
    },
    methods: {
        requestCategorys(){
            axios.get(url.banners)
            .then(res => {
                this.categorys1 = res.data.lists
            })
        }
    },
    components: {
        Foot,
    }
})
