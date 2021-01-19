// 'use strict';

let shortfatarrow = () => 14; // immediate return value
console.log(shortfatarrow());


let fatarrow = (...rest) => {
    console.log('hey kijk dit werkt', rest);
};
fatarrow(14, 28);
// new fatarrow();

// het is korter
// zonder haakjes meteen de returnwaarde
// arguments bestaat niet
// geen new keyword
// this is een stuk minder wispelturig

function test() {
    console.log('this in test:', this);
}
test.call({ x: 14 });


!function() {
    let arrow = () => {
        console.log('this in arrow:', this);
    };

    console.log('hier wijst hij naar', this);
    arrow.call({ x: 299 });
}();

// IIFE
// IIAFE

(() => {
    console.log('hoi vanuit IIAFE');
})();

function Customer() { // constructor function

}