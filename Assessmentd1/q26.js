// 26. Extract email addresses from an array of user objects.

const usrs=[
    {name:"Astha", email:"astha@gmail.com"},
    {name:"Aadi", email:"aadi@gmail.com"},
    {name:"nisan", email:"nisan@gmail.com"},
    {name:"siksha", email:"siksha@gmail.com"},
]
const em=usrs.map((n)=>{
    return (n.email);
    
})
console.log(em);