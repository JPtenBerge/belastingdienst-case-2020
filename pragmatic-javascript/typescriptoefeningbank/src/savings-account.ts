import { BankAccount } from "./bank-account";

export class SavingsAccount implements BankAccount {
  number: number;

  constructor(public owner: string, public balance: number) {
    this.number = Math.round(Math.random() * 1000); // geen database dus fuck it
  }

  withdraw (amount: number): void {    
            if (this.balance - amount < 0){



      throw { message: "Spaarrekening mag niet in het rood staan" };
    }

    this.balance -= amount;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
}
