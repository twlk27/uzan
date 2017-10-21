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

let {id} = qs.parse(location.search.substr(1))

new Vue({
    el: '#app',
    data:{
        details: null
    },
    created(){
        this.requestGoodsDtls()
    },
    methods: {
        requestGoodsDtls(){
            axios.post(url.goodsDtls, {id})
            .then(res=>{
                this.details = res.data.data
            })
        }
    },
    mixins: [mixin],
})
