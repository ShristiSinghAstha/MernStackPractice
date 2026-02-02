// 10 Promise that resolves 'Success' after 3 seconds

const myP = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 3000);
});

myP.then((message) => {
    console.log(message);
});
