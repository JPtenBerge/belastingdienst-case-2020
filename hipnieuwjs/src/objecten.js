'use strict';

let lambda = (id, name, city) => {
    console.log('name:', name);
};

let nameqqq = 'JP';
let suffix = 'dinges';

let myObj = {
    nameqqq,
    ['hallo' + suffix]: 'waarde', // computed property names
    ppp: 'qqq',
    ppp: 'www',
    func: function() {

    },
    kortefunc() {

    }
};
console.log(myObj);

// aantal nieuwe static methoden

console.log('4 is 4', Object.is(4, 4));
console.log('NaN is NaN', Object.is(NaN, NaN));
console.log('NaN == NaN', NaN == NaN);
console.log('0 is -0', Object.is(0, -0));

function Dinges() {

}
Dinges.prototype = null;

var myObj = { // __proto__
    func() {


        Object.setPrototypeOf(this, {});
        // Object.getPrototypeOf(this) // super
        super.doe(); // C# werkt met base
    }
};
// Object.getPrototypeOf();
// Object.setPrototypeOf()