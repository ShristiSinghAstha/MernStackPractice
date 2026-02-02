class bankAmount{
    #balance=1000;          //Private variables

    constructor(name, acctnum){
        this.name=name
        this.acctnum=acctnum;
    }

    deposit(amount){
        this.#balance += amount          //Ways to declare a private variable
        console.log(`My balance is ${this.#balance}`)
    }

    withdraw(amount){
        this.#balance-=amount
        console.log(`My balance is ${this.#balance}`)
    }
}
const acc1=new bankAmount("Astha",22346);
console.log(acc1);
// acc1.deposit(1000);
acc1.withdraw(500);
