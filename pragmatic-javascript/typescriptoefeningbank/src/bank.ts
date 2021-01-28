import { BankAccount } from "./bank-account";

export class Bank {
  accounts: BankAccount[] = [];

  transferMoney(from: BankAccount, to: BankAccount, amount: number) {
    from.withdraw(amount);
    to.deposit(amount);
  }

  printAccounts() {
    for (let account of this.accounts) {
      console.log(
        `${account.owner} heeft nog € ${account.balance} op zijn/haar/iet/wat/yen rekening staan`
      );
    }
    console.log("===========================");
  }
}
