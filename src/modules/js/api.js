const mode = 'dev' // ['dev', 'prd']

const host = {
    'dev': 'http://zcat.cc:8001',
    'prd': 'http://zcat.cc:8001',
}

let url = {
    hotSales: '/api/21',
}

for (var u in url) {
    if (url.hasOwnProperty(u)) {
        url[u] = host[mode] + url[u]
    }
}

export default url
