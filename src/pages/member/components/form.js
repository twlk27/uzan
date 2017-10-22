import addressData from 'js/address.json'

export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue: -1,
            districtValue: -1,
            address: '',
            id: '',
            type: '',
            instance: '',
            provinces: addressData.list,
            citys: null,
            districts: null,
        }
    },
    created(){
        let q = this.$route.query
        this.type = q.type
        this.instance = q.instance

        let e = q.instance
        if (q.type == 'edit'){
            this.name = e.name
            this.tel = e.tel
            this.address = e.address
        }
    },
    watch: {
        provinceValue(val, oldVal){
            if (val == -1) return
            let i = this.provinces.findIndex(item => {
                return item.value == val
            })
            this.citys = this.provinces[i].children
            this.cityValue = -1
            this.districtValue = -1
        },
        cityValue(val, oldVal){
            if (val == -1) return
            let i = this.citys.findIndex(item => {
                return item.value == val
            })
            this.districts = this.citys[i].children
            this.districtValue = -1
        }
    }
}
