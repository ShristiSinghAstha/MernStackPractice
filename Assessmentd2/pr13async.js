// 13 Async function returning 'Hello Student' after 2 seconds
async function greetStudent(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Hello Student!');
        },2000);
    });
}

greetStudent().then((message) => {
    console.log(message);
});

