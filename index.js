


let http = require("http");

let fs = require("fs");


http.createServer((req,res)=>{

console.log(req.url);

if(req.url =="/")
req.url ="/index.html";

let url = "node"+req.url;
console.log(url);
//fs.readFile("node/index.html",(err,data)=>{
fs.readFile(url,(err,data)=>{
res.writeHead(200,{"Content-Type":"text/html"});
res.write(data);
res.end();

});



}).listen(2000);
