// 4. Create a multiplier factory function multiplyBy(x) that returns 
// functions like double(5), triple(5).

function multiplyBy(x){
    return function(y){
        return x*y;
    }
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5));
console.log(triple(5));