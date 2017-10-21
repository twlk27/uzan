const mode = 'dev' // ['dev', 'prd']

const host = {
    'dev': 'http://dev.zcat.cc:8001',
    'prd': 'http://dev.zcat.cc:8001',
}

let url = {
    hotSales: '/api/4',
    banners: '/api/5',
    categorys1: '/api/6',
    categorys2: '/api/7',
    rank: '/api/8',
    goods: '/api/9',
    goodsDtls: '/api/10',
    goodsSales: '/api/11',
    addCart: '/api/13',
    cartGoods: '/api/14',
}

for (var u in url) {
    if (url.hasOwnProperty(u)) {
        url[u] = host[mode] + url[u]
    }
}

export default url
