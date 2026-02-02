/*Q1.  Convert this array using .map(): let nums = [1, 2, 3, 4]; 
Output should be [2, 4, 6, 8] */

const number=[1,2,3,4]
number.map((num)=>{
console.log(num+num)
})

// Q2. Use .filter() to get only even numbers: let nums = [10, 15, 20, 25, 30];

const num=[10,15,20,25,30]
const even=num.filter((num) => num%2==0);
console.log(even)


//Q3. Use .reduce() to find the sum: let nums = [5, 10, 15, 20];

const val = [5, 10, 15, 20]
const sum=val.reduce((sum, amount) => {
    return sum+amount
})
console.log(sum)

// Q4. Use .reduce() to find the maximum number: let nums = [12, 45, 2, 89, 34];

const nums=[12, 45, 2, 89, 34]
const max = nums.reduce((max, current) =>
    Math.max(max, current)
);
console.log(max)
   

/* Q5. Convert this array of objects into an array of names using .map(): let users =
 [{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}]; */

 let usrs = [
    {id:1, name:'A'},
    {id:2, name:'B'},
    {id:3, name:'C'}
 ]
 const name1=usrs.map((usrs)=>usrs.name)
 console.log(name1)
 

//  Q6. Use .filter() to get users who are older than 18.
const users=[15,17,63,34,51,31,10]
const maxAge=users.filter(val=>val>18)
console.log(maxAge)

/* Q7. Use .reduce() to count how many times each number appears: 
let nums = [1,2,2,3,3,3,4];*/

let numb = [1,2,2,3,3,3,4]
const freq = numb.reduce((acc,curr) => {
    if(acc[curr]){
        acc[curr]++
    }
    else{
        acc[curr]=1
    }
    return acc;
    }, {}) 
console.log(freq)

/* Q8. Chain .filter() and .map(): From [1,2,3,4,5,6] get even numbers 
and multiply them by 10.*/

const numbe=[1,2,3,4,5,6];
const evenNumbers = numbe.filter(val=>val%2==0)
console.log(evenNumbers)

const multi=evenNumbers.map((evenNumbers)=>evenNumbers*10)
console.log(multi)


//Q9.Use .reduce() to calculate total price from cart items.
const items = [
    {name:"Keyboard", price:1500},
    {name:"Charger", price:1200},
    {name: "headphones", price:300}
]
const totalPrice = items.reduce((amountt,total)=>{
    return amountt+total.price;
},0)

console.log(totalPrice)



