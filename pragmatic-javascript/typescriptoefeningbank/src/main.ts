import { Bank } from "./bank";
import { CheckingAccount } from "./checking-account";
import { SavingsAccount } from "./savings-account";

function main() {
    let ing = new Bank();

    let donald = new CheckingAccount('Donald', 5000000);
    let willekeurigeStudent = new CheckingAccount('Frank', 15.50);
    let hardeWerker = new SavingsAccount('Tim', 4000);

    ing.accounts.push(donald);
    ing.accounts.push(willekeurigeStudent);
    ing.accounts.push(hardeWerker);

    ing.printAccounts();

    ing.transferMoney(donald, willekeurigeStudent, 20000);

    ing.printAccounts();
}
main();