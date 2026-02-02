// Constructor in a class and using super keyword.

class cars{
    constructor(name, year, brand){
        this.name=name;
        this.year=year;
        this.brand=brand;
    }
    info(){
        console.log(`Hello! You are currently viewing ${this.name} car of ${this.brand} brand`);
    }
}
class customer extends cars{
    constructor(name, year, brand, owner) {
        super(name, year, brand);
        this.owner=owner;
    }
    display(){
        console.log(`Hey, I ${this.owner} is the owner of ${this.name}`);
    }
}
const car1=new cars("WRV",2023,"Honda");
console.log(car1)
car1.info()

const owner1=new customer("Innova",2019,"Toyota","Astha");
console.log(owner1)
owner1.display();
