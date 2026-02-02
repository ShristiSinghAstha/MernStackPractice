// 6 Use .every() to check if all numbers are positive in [2,4,6,8].

const num=[2,4,6,8];
const n=num.every((n1)=>{
    return (n1>0);
})
console.log(n);