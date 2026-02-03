const http=require('http');
const path=require('path');
const nodemailer=require('nodemailer');

const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end("Students");
    }
})

const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"shristisinghastha@gmail.com",
        pass: "fkcc efnt uyic ejwh",        //Create App-password from your gmail
    }                        //Remember to revoke the password after use, for security purpose
})
transport.sendMail({
    from:"shristisinghastha@gmail.com",
    to:"asthapratap09@gmail.com",
    text:"this is the mailll",
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
