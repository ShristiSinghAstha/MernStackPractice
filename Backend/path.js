const http=require('http');
const path=require('path');

const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end("Students");
    }
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
