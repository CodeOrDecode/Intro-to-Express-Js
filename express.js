const express = require("express");
const fs = require("fs")

const server = express();
const port = 3008;
server.use(express.json());

server.get("/prtfileexpress", (req, res) => {
    res.send("expressprofile data");
})


server.get("/about", (req, res) => {
    res.send("about data");
})


server.post("/adddata", (req, res) => {
    fs.appendFileSync("1.txt",`\n${JSON.stringify(req.body)}`);
    let data  = fs.readFileSync("1.txt","utf-8");
    console.log(req.body);
    res.send(data);
})


server.post("/adddata2", (req, res) => {
    fs.appendFileSync("./test/2.txt",`\n${JSON.stringify(req.body)}`);
    let data  = fs.readFileSync("./test/2.txt","utf-8");
    console.log(req.body);
    res.send(data);
})




server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})