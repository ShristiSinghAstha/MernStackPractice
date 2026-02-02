// 2 Use .filter() to get even numbers from [1,2,3,4,5,6,7]

const num=[1,2,3,4,5,6,7];
const ne=num.filter((n1)=>{
    return (n1%2==0)
})
console.log(ne);