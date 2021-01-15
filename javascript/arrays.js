var lijstjes = [4, 8, 15, 16, 23, 42];

lijstjes['33'] = 108;
lijstjes['-5'] = 'hoi';

lijstjes.push(474);
lijstjes.unshift(1234);
console.log(lijstjes.reverse());

for (var i = -8; i < lijstjes.length; i++) {
  console.log(lijstjes[i]);
}

// een array is geen array.
// een array is "gewoon" een JS-object met een .length-eigenschap 
// en nog wat methoden

var myObj = {
    x: 42
};
myObj['0'] = 'test';
console.log('myObj.x', myObj.x);
console.log('myObj[\'x\']', myObj['x']);

console.log(myObj[0]);
