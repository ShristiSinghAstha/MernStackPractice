// Q1. Create a counter using closure with methods: increment(), decrement(), reset().

function createCounter(){
    let count=0;

    return {
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        reset: function(){
            count=0;
            return count;
        }
    }
}
    const counter = createCounter();
    counter.increment();
    // counter.decrement();
    // counter.reset();