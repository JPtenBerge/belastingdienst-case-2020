

class Ding {
    constructor() {
        console.log('q');   
    }
}

class Customer {
  name; // experimental
  static nrOfCustomers = 0;

  constructor(name) {
    this.name = name;

    Customer.nrOfCustomers++;
  }

  buy() {
    console.log(`me, ${this.name}, is gonna buy some useless stuff`);
  }
}

let jp = new Customer("JP");
let frank = new Customer("Frank");
jp.buy();
console.log(jp);
console.log("aantal customers:", Customer.nrOfCustomers);

// class Animal {
//     speak() {
//         console.log('raawwr', this.name);
//     }
// }

// React prefers functions. Other than that, classes all the way
// Angular prefers classes

function Animal() {
  this.speak = function () {
    console.log("speak vanuit animal function", this.name);
  };
}

// let Animal = function() {

// };
// let Dog = class {

// };

class Dog extends Animal {
  constructor(name) {
    super(); // Java
    this.name = name;
  }
}

let rex = new Dog("Rex");
rex.speak();

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw { message: "May not instantiate Shape" };
    }
  }
}

class Rectacle extends Shape {}

new Shape();
