// Q2. Create a private bank account using closure with methods: deposit(amount), withdraw(amount),
// getBalance().

function createAccount(){
    let balance=10000;

    return{
        deposit: function(amount){
            balance += amount;
        },
        withdraw: function(amount){
            if(amount <= balance){
                balance -= amount;
            } else {
                console.log("Insufficient funds");
            }
        },
        getBalance: function(){
            return balance;
        }
    }
}
const myAccount = createAccount();
myAccount.deposit(5000);
myAccount.withdraw(2000);
console.log(myAccount.getBalance());
