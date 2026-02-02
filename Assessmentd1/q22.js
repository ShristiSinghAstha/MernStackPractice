// 22. Using filter(), extract only strings from ['a',1,'b',2,'c'].

const str= ['a',1,'b',2,'c'];
const n=str.filter((num)=>{
    return (typeof num === 'string');
})
console.log(n);