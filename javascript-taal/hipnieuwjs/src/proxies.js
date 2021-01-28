

let obj = {
    x: 4,
    y: 23
};
let proxy = new Proxy(obj, {
    get(target, prop) {
        console.log('get op ' + prop);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`set op ${prop}: ${value}`);
        target[prop] = value;
    }
});

console.log(proxy.x);
proxy.y = 'iets anders';
console.log(proxy.y);


// via een omweg

// jij => proxy => doel (facebook.com)