// iterator == C# IEnumerable
// generator  C# "yield return"

// iterators

// arrays. Set. Map.
// ... (spread)

// let lijstje = [4, 8, 15]; // iterator
// for (let item of lijstje) {
//   console.log(item);
// }

let myObj = {
  chips: ["Wokkels", "Nibbit", "Heart Breakers", "Lay's naturel", "Doritos"],
  [Symbol.iterator]() {
    // iterator pattern
    let index = -1;
    let chips = this.chips;
    return {
      next() {
        console.log("next");
        index++;
        return {
          value: chips[index],
          done: index >= chips.length,
        };
      },
    };
  },
};

let itje = myObj[Symbol.iterator]();
console.log(itje.next());
console.log(itje.next());
console.log(itje.next());
console.log(itje.next());

// for (let item of myObj) {
//   console.log(item);
// }

// function* traverseTree(node) {
//     yield* traverseTree(node.left);
//     yield* node.value;
//     yield* traverseTree(node.right);
// }

function* gen() {
    let currentValue = 4;

    yield currentValue;
    console.log('en nu naar de volgende');
    currentValue *= 3;
    yield currentValue;
    console.log('en nu naar de volgende');
    yield 15;
    console.log('en nu naar de volgende');
    yield 16;
    console.log('en nu naar de volgende');
    yield 23;
    console.log('en nu naar de volgende');
    yield 42;
}
for(let item of gen()) {
    console.log(item);

}
