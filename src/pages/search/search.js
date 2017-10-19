import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import url from 'js/api.js'

// ui
// import { InfiniteScroll } from 'mint-ui'
// Vue.use(InfiniteScroll)

// component
// import Foot from 'components/Foot.vue'
import mixin from 'js/mixin.js'

// utils
const log = console.log.bind(console)

let {keywork, id} = qs.parse(location.search.substr(1))

new Vue({
    el: '.container',
    data: {
        goods: null,
        // banners: null,
        // pageNum: 1,
        // pageSize: 6,
        // loading: false,
        // allLoaded: false,
    },
    created() {
        this.requestGoods()
    },
    methods: {
        requestGoods(){
            // if (this.allLoaded){
            //     return
            // }
            // this.loading = true
            axios.post(url.goods, {keywork, id})
            .then(res=>{
                let goods = res.data.list
                this.goods = goods
                // if (goods.length < this.pageSize){
                //     this.allLoaded = true
                // }
                // this.lists = this.lists? this.lists.concat(goods) : goods
                // this.loading = false
                // this.pageNum += 1
            })
        }
    },
    components: {

    },
    mixins: [mixin],
})
