// 11 Promise that rejects if number <5.
const myP = new Promise((resolve, reject) => {
    const num = 3;
    if (num < 5) {
        reject('Number is less than 5');
    }
    else {
        resolve('Number is 5 or greater');
    }
});

myP.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
