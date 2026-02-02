// 14 Convert fetch .then() to async/await.
async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log('Error fetching data:', error);
    }   
}

fetchData();

