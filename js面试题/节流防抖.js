防抖
function debounce(fn,delay){
    let timer = null;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.call(this,...args);
            timer = null
        },delay)
    }
}
节流
function throttle(fn,delay){
    let preTime = 0;
    return function(...args){
        const nowTime = Data.now();
        if(nowTime - preTime > delay){
            fn.call(this,...args);
            preTime = nowTime
        }
    }
}