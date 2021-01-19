"use strict";

let lijstje = new Set();
lijstje.add(5);
lijstje.add(15);
lijstje.add(25);
// lijstje.add('qwertyuiop');
// lijstje.add(new Set());
// lijstje.add({});
lijstje.add(55);
lijstje.add(55);
lijstje.add(55);
lijstje.add(109);

console.log(lijstje);

// map
let myObj = {
  qwerty: "value",
  qwerty: "andere value",
  key: [1, 5],
};
console.log(myObj);

// Object.keys(myObj).length

let dict = new Map();
dict.set("qwerty", "value");
dict.set("123456", { x: 24 });
dict.set(".....", new Map());
dict.set(myObj, "valueeeeee");
dict.set("key", ["val1", "val2"]);

console.log(dict.has("123456"));
console.log(dict.size);


// garbage collection

// deze houden geen referentie vast naar objecten als er niemand anders naar wijst

// HTML-elementen

// WeakSet()
// WeakMap()