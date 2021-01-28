import { BankAccount } from "./bank-account";

export class CheckingAccount implements BankAccount {
  number: number;

  constructor(public owner: string, public balance: number) {
    this.number = Math.round(Math.random() * 1000); // geen database dus fuck it
  }

  withdraw(amount: number): void {
    this.balance -= amount;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
}
