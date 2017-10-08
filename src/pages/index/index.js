import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
// import log from 'js/utils.js'

const log = console.log.bind(console)

new Vue({
    el: '#app',
    data: {
        lists: null,
    },
    mounted() {
        // fetchHotLists()
        axios.post(url.hotSales, {
            pageNum: 1,
            pageSize: 50,
        }).then(res=>{
            this.lists = res.data.lists
        })
    },
})
