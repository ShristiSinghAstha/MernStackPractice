// 28. Find the average of numbers in [10,20,30,40].

const num=[10,20,30,40];

const avg=num.reduce((acc,curr) => {
    return acc+curr;
},0) / num.length;

console.log(avg);