export interface BankAccount {
    number: number;

    owner: string;

    balance: number;

    withdraw(amount: number): void;

    deposit(amount: number): void;
}