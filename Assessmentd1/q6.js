// 6. Create a simple incremental ID generator using closure.

function iDGenerator() {
  let currentID = 0;
    return function() {
        currentID++;
        return currentID;
    };
}
const generateID = iDGenerator();
console.log(generateID());
console.log(generateID());