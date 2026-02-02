//Q1. Create a counter using closures that maintains its own count variable.

function createCounter() {
    let count=0;

    return function(){
        count++;
        console.log(count);
        return count;
    }
}
const counter1=createCounter();
let counter2=createCounter();
counter1();
counter1();
counter2();
counter2();



// Q2. Create a bank account using closures with show balance and withdraw methods

function bankBalance(){
    var balance = 5780;
    return {
        showBalance(){
            console.log(`My balance is ${balance}.`);
        },
        withdraw(amount){
        balance-=amount;
       console.log(`My balance after withdrawing the amount is ${balance}.`);
    }}
    

}

const show =bankBalance();
show.showBalance();
show.withdraw(500);
