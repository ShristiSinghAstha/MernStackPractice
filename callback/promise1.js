// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(dataId)
//             // resolve("Success")
//             reject("Error Occured")

//     if (getNextData)
//         getNextData()
//         }, 2000);
//     })
// }


function getData(dataId){
    setTimeout(()=>{
        console.log(dataId)
    },2000)
}
async function fetchData(){
    await getData(1)
    await getData(2)
    await getData(3)
}
fetchData()

