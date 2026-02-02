// 25. Count numbers greater than 50 in [20,60,80,40,90].

const num=[20,60,80,40,90];
const n=num.filter((n1)=>{
    return (n1>50);
})
console.log(n);