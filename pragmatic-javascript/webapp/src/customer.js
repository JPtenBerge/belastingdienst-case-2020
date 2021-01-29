export class Customer {
    // webpack doesn't support this yet
    // nrOfStuffBought = 0;

    constructor() {
        console.log('Hoi customer hier');
        this.nrOfStuffBought = 0;
    }
    buy() {
        this.nrOfStuffBought++;
        console.log('aantal dingen gekocht nu:', this.nrOfStuffBought);
    }
}