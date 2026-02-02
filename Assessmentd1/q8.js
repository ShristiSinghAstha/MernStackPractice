// 8. Create a counter using closure that increments by a custom step value.

function counter(init){
    let count=init;
    return{
        increment: function(){
            count++;
            return count;
        }
    }
}
const ne=counter(0);
console.log(ne.increment());
console.log(ne.increment());
console.log(ne.increment());