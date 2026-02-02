// 29. Separate even and odd numbers from [1,2,3,4,5,6]

const num=[1,2,3,4,5,6];
const evenN=num.filter((n)=>{
    return (n%2==0);
});
const oddN=num.filter((n1)=>{
    return (n1%2!=0);
});

console.log("Even Numbers: ",evenN);
console.log("Odd Numbers: ",oddN);