const log = console.log.bind(console)

const guaAsync = (fn, ts) => {
    setTimeout(function(){
        fn()
    }, 1000)
}

export {
    log,
    guaAsync,
}

export default {
    log,
    guaAsync,
}
