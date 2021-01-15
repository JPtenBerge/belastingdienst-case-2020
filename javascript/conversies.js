/*
best practices:
- === om te vergelijken
- geen var-statement
- fat arrow ipv functies
*/
console.log(24 + "67");

var x = {};
if (x) {
  console.log("ja!", x);
} else {
  console.log("nope", x);
}

/* 7 waarden die zich naar false vertalen    "falsey" values
- 0
- -0
- null
- undefined
- NaN
- false
- ''
*/

var y = "42";
var z = 42;
if (y === z) {
  // strict comparison: best practices
  console.log("weer ja", y, z);
} else {
  console.log("weer nee", y, z);
}

var myObj = new Object();
myObj.toString = function() {
    return 'hoi';
};
console.log(myObj.toString());
var tekst = "hoi";

if (myObj === tekst) {
  console.log("ja obj is gelijk aan tekst");
} else {
  console.log("nee object niet gelijk aan tekst");
}

