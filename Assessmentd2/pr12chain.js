// 12 Chain then(): multiply by 2, subtract 3, log result.

const promise=new Promise((resolve,reject) => {
    resolve(5);

})
promise.then((value) => {
    return value*2;


}).then ((value) => {
    return value -3;
})
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err);
})
