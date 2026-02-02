function sum(a,b){
    return a+b;
}

function sumAll(a,b,sumCallback){
    setTimeout(()=>{
        console.log(sumCallback(a,b));
    },3000)
}

sumAll(1,2,sum);


