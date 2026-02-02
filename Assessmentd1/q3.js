// 3. Create a function that limits an action to run only a fixed number of times.

function limitAction(action, limit) {
  let count = 0; 
    return function(...args) {
        if (count < limit) {
            count++;
            return action(...args);
        }   
        else {
            console.log("Action limit reached");
        }
    };
}
const limitedLog = limitAction(function(message) {
  console.log(message);
}, 3);

limitedLog("Yes");
limitedLog("Yess");
limitedLog("Yesss");

