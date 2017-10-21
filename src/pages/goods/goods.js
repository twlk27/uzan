import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'

import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import utils, {log} from 'js/utils.js'
import Swipe from 'components/Swipe.vue'

let {id} = qs.parse(location.search.substr(1))

new Vue({
    el: '#app',
    data:{
        details: null,
        sales: null,
        detailTab:["商品详情", "本店成交"],
        tabIndex: 0,
        banners: null,
    },
    created(){
        this.requestGoodsDtls()
    },
    methods: {
        requestGoodsDtls(){
            axios.post(url.goodsDtls, {id})
            .then(res=>{
                this.details = res.data.data
                this.banners = res.data.data.images.map((e)=>{
                    return {
                        clickURL: '',
                        image: e,
                    }
                })
            })
        },
        requestDeals(){
            axios.post(url.goodsSales, {id})
            .then(res=>{
                this.sales = res.data.list
            })
        },
        switchTab(i){
            this.tabIndex = i
            if (i==1){
                this.requestDeals()
            }
        }
    },
    components: {
        Swipe,
    },
    filters: {
        timeFormat(ts){
            return ts.substr(0, 16)
        }
    },
    mixins: [mixin],
})
