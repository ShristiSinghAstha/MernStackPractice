//Q1. Make a function and do increment and decrement operations using closures.

function myFunction(){
    let initialV=3;

    return{
        increment(){
            initialV++;
            console.log(initialV)
        },
        decrement(){
            initialV--;
            console.log(initialV);
        }
    }
}
let count = myFunction();
//count.increment();
count.decrement();


// Q2. Create a Rate Limiter using closures.

function rateLimiter(maxCalls){
    return function myFunc() {
        if (maxCalls<0){
            maxCalls++;
            console.log(`Rate limit exceeded ${maxCalls} calls remaining.`);
        }
        else{
            maxCalls--;
            console.log(`Call successful. ${maxCalls} calls remaining.`);
        }
    }
}
let myRate=rateLimiter(-1);
myRate();

// Q3. Create a function that runs only once.

function once(fn) {
    let executed = false;

    return function () {
        if (!executed) {
            executed = true;
            fn();
        }
    };
}
const init = once(function () {
    console.log("Initialized.");
});

init();
init();
