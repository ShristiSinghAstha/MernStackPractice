// 23. Using reduce(), find the product of numbers in [1,2,3,4]
const num=[1,2,3,4];
const n=num.reduce((n1, product)=>{
    return n1*product;
})
console.log(n);