// 16 Merge [1,2] and [3,4] using spread.

//First Method
const arr1=[1,2];
const arr2=[...arr1,3,4];
console.log(arr2);


//Second Method
const arr3=[4,5,6,];
const arr4=[7,8,9];
const merge=[...arr3,...arr4];
console.log(merge);
