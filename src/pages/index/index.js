import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
// import log from 'js/utils.js'

// ui
import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

// component
import Foot from 'components/Foot.vue'

// utils
const log = console.log.bind(console)

new Vue({
    el: '#app',
    data: {
        lists: null,
        pageNum: 1,
        pageSize: 12,
        loading: false,
        allLoaded: false,
    },
    mounted() {
        this.requestHotSales()
    },
    methods: {
        requestHotSales(){
            if (this.allLoaded){
                return
            }
            this.loading = true
            axios.post(url.hotSales, {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
            }).then(res=>{
                let hotSales = res.data.lists
                if (hotSales.length < this.pageSize){
                    this.allLoaded = true
                }
                this.lists = this.lists? this.lists.concat(hotSales) : hotSales
                this.loading = false
                this.pageNum += 1
            })
        }
    },
    components: {
        Foot,
    }
})
