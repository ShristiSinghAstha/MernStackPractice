// 7 Create calculate(a,b,callback) for addition using callback

function cal(a,b,callback){
    return callback(a,b);
}
function add(a,b){
    return a+b;
}
const cal1=cal(1,2,add);
console.log(cal1);
