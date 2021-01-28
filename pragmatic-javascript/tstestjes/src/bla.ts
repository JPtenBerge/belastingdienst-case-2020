
// hip nieuw JS => ES5
// let x: number = 14;
// let text: string = 'hoi';

// function telop(x: number, y: number): number {

//     return 18;
// }
// telop(42, 99);


// let fatarrow = () => {
//     console.log(this);
// };

// class LivingBeing {

// }

// class Human extends LivingBeing {
//     constructor() {
//         super();
//         console.log('hallo vanaf constructor');
//     }

//     speak() {
//         console.log('poep');
//     }
// }

interface Test { // alleen tijdens development
    bla(): number;
}
class Ding implements Test {
    bla() {
        return 18;
    }
}


// function bla() {
//     yield 4;
//     yield 'hoi';
//     yield 'bladiebla';
// }