// 30. From an array of users, return names of users who are active.
const users=[
    {name:"Astha", isActive:true},
    {name:"Aadi", isActive:false},      
    {name:"nisan", isActive:true},
    {name:"siksha", isActive:false},
]
const aUsers=users.filter((n)=>{
    return (n.isActive===true)
});
const names=aUsers.map((n)=>{
return (n.name)
});
console.log(names);

