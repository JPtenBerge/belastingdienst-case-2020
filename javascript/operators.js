var x = "12345";
var getalx = +x;

console.log(getalx);

if (4 > 8) {
  console.log("4 groter dan 8");
} else {
  console.log("4 kleiner dan 8");
}

if ("qhhahahahahhahahaa" > "muhahahaha") {
  console.log("hahahahahhahahaa groter dan muhahaha");
} else {
  console.log("hahahahahhahahaa kleiner dan muhahaha");
}

var getal = 4 > 8 ? 'hoi' : 326 > 29 ? 'misschien' : 'doei'; // don't nest these things
console.log('getal:', getal);

var iets = -4 || 28;
console.log('iets:', iets);

// function getLocation(options) {
//     var city = options.city || 'Amsterdam';
// }

var anders = undefined && 28;
console.log('anders:', anders);

var loc = new Object();
// loc.address = new Object();
// loc.address.housenumber = 122;
// window.location.href= 'http://www.google.nl'; // redirect

console.log(loc && loc.address && loc.address.housenumber);