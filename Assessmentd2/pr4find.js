// 4 Use .find() to get first number >50 from [10,25,60,40,80].

const num=[10,25,60,40,80];
const n=num.find((n1)=>{
    return (n1>50);
})
console.log(n);