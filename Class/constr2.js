// Constructor without a class.

function bankHolders(name,age,acctNum){
    this.name=name;
    this.age=age;
    this.acctNum=acctNum;
}

bankHolders.prototype.greet = function(){
    console.log(`Hello! ${this.name}`)
}

const acc1=new bankHolders("Astha",19,23456);
console.log(acc1);
acc1.greet();

