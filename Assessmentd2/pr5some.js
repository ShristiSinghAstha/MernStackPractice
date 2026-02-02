// 5 Use .some() to check if any number is negative in [3,5,-2,9].

const num=[3,5,-2,9];
const n=num.some((n1)=>{
    return (n1<0);
})
console.log(n);