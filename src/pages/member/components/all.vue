<template lang="html">
    <div class="container " style="min-height: 597px;">
      <div class="block-list address-list section section-first js-no-webview-block">
        <a class="block-item js-address-item address-item "
          :class="{'address-item-default': e.isDefault}"
          :key="e.id"
          @click="toEdit()"
          v-for="e in addresses">
          <div class="address-title">{{e.name}} {{e.tel}}</div>
          <p>{{e.provinceName}}{{e.cityName}}{{e.districtName}}{{e.address}}</p>
          <a class="address-edit"></a>
        </a>
      </div>

      <div class="" v-if="addresses && !addresses.length">
          没有地址,请添加
      </div>

      <div class="block stick-bottom-row center">
        <router-link to="/address/form" class="btn btn-blue js-no-webview-block js-add-address-btn">
            新增地址
        </router-link>
      </div>
    </div>
</template>

<script>
import Address from 'js/addressService.js'

export default {
    data(){
        return {
            addresses: null,
        }
    },
    created(){
        Address.list().then(res => {
            this.addresses = res.data.list
        })
    },
    methods: {
        toEdit(){
            this.$router.push({path: '/address/form'})
        }
    }
}
</script>

<style lang="css">
</style>
