

function test(param1 = 'dinges', param2 = 42) {
    console.log('test', param1, param2);
}
test();
test(28);
test(76, 99);
test(123, null); // null (wordt altijd bewust meegegeven) vs undefined
test(999, undefined);

function test2(param1 = function() { }, param2 = {}, param3 = []) {
    console.log(param1, param2, param3);
}
test2();

// temporal dead zone
// function funky(x = y, y) {
//     console.log('x/y:', x, y);
// }
// funky();

function test3() {
    // console.log(arguments);
    // 'use strict';

    for(var i = 0; i< arguments.length; i++) {
        console.log(arguments[i]);   
    }
}
test3(1,2,3,4,5,6,7);

function test4(param1, param2, ...params) {
    console.log(param1, param2, params);

    for(var i = 0; i< params.length; i++) {
        console.log(params[i]);   
    }
}
test4(1,2,3,4,5,6,7);

function bla(param1 = 42, param2 = 'hoi') {

}
bla(undefined, 'doei');
