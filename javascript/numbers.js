// JavaScript syntax van C/Java
// JavaScript == Java voor zover Carpet == Car

console.log('hoi!');

var x = 14;
console.log('x:', x);
x++;
console.log('x weer:', x);
x += 10;
console.log('x nog een keer:', x);

console.log('0.1 + 0.2', 0.1 + 0.2);
console.log('0.3 - 0.2', 0.3 - 0.2);
console.log('0.3 - 0.2 afronden', (0.3 - 0.2).toFixed(3));

console.log('12.1 * iets', 12.1 * 9);

console.log('7 / 0', 7 / 0);
console.log('0 / 7', 0 / 7);
console.log('0 / 0', 0 / 0);
console.log('7 / \'bla\'', 7 / 'bla');

console.log(typeof NaN);
console.log(NaN == NaN);

console.log(isNaN(7 / 'bla'));

var getal = 123456789;
console.log(getal.toString(16));

// IEEE 754