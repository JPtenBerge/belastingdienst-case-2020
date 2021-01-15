var myObj = {
  x: 14,
  y: 28,
};
console.log(myObj);

var lijstje = [4, 8, 15, 16, 23, 42];

function contains(array, item) {
  return array.indexOf(item) !== -1;
  //   for (var i = 0; i < array.length; i++) {
  //     if (array[i] === item) {
  //       return true;
  //     }
  //   }
  //   return false;
}

console.log(contains(lijstje, 4));
console.log(contains(lijstje, 108));

// returns true if the array contains the item
// returns false otherwise
function add(array, item) {
  if (!contains(array, item)) {
    array.push(item);
  }
}
add(lijstje, 108);
add(lijstje, 15);
add(lijstje, "bla");
add(lijstje, "bla");

console.log(lijstje);

// adds the item to the array, if it is not yet included
// does nothing, otherwise
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }

  //   for (var i = 0; i < array.length; i++) {
  //     if (array[i] === item) {
  //       array.splice(i, 1);
  //     }
  //   }
}
remove(lijstje, 16);
remove(lijstje, 15);
remove(lijstje, "blqqaaaqa");

console.log("verwijderd:", lijstje);

// removes the item from the array, if it is included
// does nothing, otherwise
function sum(array) {

    // return array.reduce(function(prev, curr) {
    //     return prev + curr;
    // });

  var total = 0;
  for (var item of array) {
    total += item;
  }
  return total;
}
console.log(sum(lijstje));
// returns the sum of all elements
