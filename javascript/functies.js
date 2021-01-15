// 'use strict';

// C# method
// function test(param1, param2) {
//   console.log("arguments:", arguments);

//   console.log("wauw", param1, param2);

//   return 108;
// }

// var result = test(4, 8);
// console.log(result);

// test();
// test(4555);
// test(1, 2, 3, 4, 5, 6, 7, 8, 9);

// het echte werk: this


// in een globale functie wijst "this" standaard naar de eigenaar van de functie
// => standaard is dat het globale object, window
// => maar met use strict aan wijst het naar undefined
// globale object

function Customer(name) { // soort van constructor
    console.log('this:', this);
    this.name = name;

    this.buy = function() {
        console.log('ik, ' + this.name +', ga even wat kopen!');
    };
}
Customer.bla = 'hoi'; // static

console.log(Customer.bla);

var jp = new Customer('JP');
jp.buy();

// nee.

function doe() {
    console.log(this);
}
doe();
doe.call({ name: 'Henk' });

// jQuery
// $('div').each(function() {
//     console.log(this);
// });