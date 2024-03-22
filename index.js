const http = require("http");
const fs = require("fs");
const port = 3002;

const server = http.createServer((req,res)=>{
    if(req.url == "/profile"){
        // let data = fs.readFileSync("1.txt","utf-8");

        res.setHeader("Content-Type","text/html");
        res.write("<h2>read file added</h2>");
        res.end("profile data");
    }
    else if(req.url == "/userdata"){
        res.setHeader("Content-Type","text/html");
        res.write("<h2>User data added</h2>");
        res.end();
    }
    else{
        res.end("Invalid request ....");
    }
})


server.listen(port,()=>{
    console.log("server is running");
})