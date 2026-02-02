// 3. Create a function once(fn) that allows a function to run only one time.

// function once(fun){
//     let execute=false;
//     return function(){
//         if(!execute){
//             execute=true;
//             fun();
//         }
//     }
// }
// const init=once(function(){
//     console.log("Done");
// })
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
