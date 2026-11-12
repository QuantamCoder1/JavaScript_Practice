/**Interface with Methods
- Create an interface BankAccount.
- Properties: accountNumber, balance.
- Methods: deposit() and withdraw().
- Implement the interface in a class.
- Create an object and perform transactions */

interface BankAccount{
    accountnumber :number,
    balance : number,
    deposit(amount : number):void;
    withdraw(amount : number):void
}
 class Account implements BankAccount{
    accountnumber :number;
    balance: number;

    constructor(accountnumber:number,balance:number){
        this.accountnumber = accountnumber;
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance = this.balance +amount;
        console.log("Deposit : "+amount+" "+ "balance : "+ this.balance);
    }
    withdraw(amount: number): void {
        if(amount>this.balance){
            console.log("Insufficient balance");
        }
        else{
            this.balance = this.balance - amount;
            console.log("Withdrawn :  "+ amount+ " balance : "+this.balance);
        }
    }
 }
 const acc1 = new Account(12345, 70000000);
 acc1.withdraw(5000);
 acc1.deposit(20000);