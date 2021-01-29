export class Customer {
    nrOfStuffBought = 0;

    constructor() {
        console.log('Hoi customer hier');
    }
    buy() {
        this.nrOfStuffBought++;
        console.log('aantal dingen gekocht nu:', this.nrOfStuffBought);
    }
}