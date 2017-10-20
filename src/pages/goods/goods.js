import './goods_common.css'
import './goods_custom.css'
import './goods.css'
import './goods_theme.css'
import './goods_mars.css'
import './goods_sku.css'

import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
import api from 'js/api.js'
import mixin from 'js/mixin.js'

new Vue({
    el: '#app',
    mixins: [mixin],
})
