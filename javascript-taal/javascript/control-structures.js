"use strict"; // backwards compatibility: ES5  IE6 => ES3

// undefined = 'hoi'; // ES3

if ("hoi" == undefined) {
  // 'hoi'
}

if (2 == 2) {
}

// lexical scope

console.log("i voor de for:", i);
for (var i = 0; i < 5; i++) {
  console.log("i is nu:", i);
}
console.log("i onder de for:", i);

// C#/Java: block scope

var index = 0;
while (index < 100) {
  console.log(index);

  index += 20;
}

var text = "hoi";
switch (text) {
  case 42:
    console.log(42);
    break;
  case "doei":
    console.log("aha");
    break;
  case "hoi":
    console.log("hij is hoi");
    break;
  default:
    console.log("alles");
}

var obj = {
  x: 14,
  y: "hoi",
  z: "doei",
  getal: 42,
};
obj.nogEenProperty = 'djkhffd';
for (var prop in obj) {
    console.log(prop);
}
