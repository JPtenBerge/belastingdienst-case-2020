'use strict';

var myObj = new Object();
myObj.x = 14;

var myOtherObj = {
    x: 14,
    x: 99,
    y: 28
}; // shorthand notation: JSON   XML
myOtherObj.z = 49;

Object.defineProperty(myOtherObj, 'name', {
    value: 'iets'
});

Object.freeze(myOtherObj);

// myOtherObj.x = 84848;

console.log(myOtherObj);

var customer = {
    firstName: 'JP',
    surname: 'ten Berge',
    get name() {
        return this.firstName + ' ' + this.surname;
    },
    set name(value) {
        let splits = value.split(' ');
        this.firstName = splits[0];
        this.surname = splits[1];
    }
};

console.log(customer.name);
customer.name = 'Bryan Meeuwissen';
console.log(customer.name);


/*

*/