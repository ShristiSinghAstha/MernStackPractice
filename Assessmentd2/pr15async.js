// 15 Async function waits 2 seconds and logs 'Done'.
async function done(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Done');
        },2000);
    });
}

done().then((message) => {
    console.log(message);
});
