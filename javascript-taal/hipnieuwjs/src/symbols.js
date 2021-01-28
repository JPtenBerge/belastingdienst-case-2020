

// een symbol is een nieuw, primitief type in JavaScript

// booleans, numbers, strings, regex, undefined/null

const ANGULARSYMBOLS = {
    OnInit: Symbol('oninit')
};

const mySymbol = Symbol('iets');
console.log(mySymbol); // unique identifier

// in JavaScript
// frameworks/libraries
let myComp = {
    onInit() {

    },
    [ANGULARSYMBOLS.OnInit]() { // abe8ae8abe8aea8ebababba8eef8f8eabefaef8eba8fb8be8abf8aedb8dab8

    }
};

let myObj = {
    x: 15,
    y: 23,
    toMyProjectString() {

    },
    [Symbol.toPrimitive]() {
        return 'haha 2!';
    }
};

console.log(`myObj is nu ${myObj}`);

const aanmaken = Symbol('s4'); // create
const getten = Symbol.for('s4'); // create

console.log(aanmaken === getten);

const sym1 = Symbol.for('s1'); // create // abcbd9e98fe897abbce08e80f0ef8be0b8be8
const sym2 = Symbol.for('s1'); // get // 849034bbbb3d8bfb832b903b8bf02bb0caa
console.log(sym1 === sym2);