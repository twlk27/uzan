import './member_base.css'
import './member.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
// import log from 'js/utils.js'

// ui
// import { InfiniteScroll } from 'mint-ui'
// Vue.use(InfiniteScroll)

// component
import Foot from 'components/Foot.vue'
// import Swipe from 'components/Swipe.vue'

// utils
const log = console.log.bind(console)

// new Vue({
//     el: '#app',
//     data: {
//         lists: null,
//         banners: null,
//         pageNum: 1,
//         pageSize: 6,
//         loading: false,
//         allLoaded: false,
//     },
//     created() {
//         this.requestHotSales()
//         this.requestBanners()
//     },
//     methods: {
//         requestHotSales(){
//             if (this.allLoaded){
//                 return
//             }
//             this.loading = true
//             axios.post(url.hotSales, {
//                 pageNum: this.pageNum,
//                 pageSize: this.pageSize,
//             }).then(res=>{
//                 let hotSales = res.data.lists
//                 if (hotSales.length < this.pageSize){
//                     this.allLoaded = true
//                 }
//                 this.lists = this.lists? this.lists.concat(hotSales) : hotSales
//                 this.loading = false
//                 this.pageNum += 1
//             })
//         },
//         requestBanners(){
//             axios.get(url.banners)
//             .then(res => {
//                 this.banners = res.data.lists
//             })
//         }
//     },
//     components: {
//         Foot,
//         Swipe,
//     }
// })
