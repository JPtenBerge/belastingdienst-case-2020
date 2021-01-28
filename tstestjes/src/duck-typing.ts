

// if it's looks like a duck and talks like a duck, i'm gonna assume... it's a duck.

class A {
    getal: number = 5;
    doe() {
        console.log('doe A');
    }
}
class B {
    getal: number = 9;
    doe() {
        console.log('doe B');
    }
}

function iets(dingetje: A) {
    dingetje.doe();
}
iets(new B());


// JSON.parse(jsonText); // [{ x: 24 }, {x: 98}]

// new Car()
// new Car()
// new Car()
// new Car()
// new Car()
// new Car()

// class Car {
//     drive() {

//     }
// }



/* Angular */
// AJAX
// let cars = this.http.get<Car[]>('api/car');
// cars[0].drive();

// highcharts

// als je nooit "any" gebruikt: respect++;

(window as any).Highcharts.config = {

};