// 9 Apply callback to each element of an array.
function apply(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
function square(num) {
    return num * num;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = apply(numbers, square);
console.log(squaredNumbers);
