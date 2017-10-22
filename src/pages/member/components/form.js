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
    }
}
