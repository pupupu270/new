
let http = require("http");
let fs = require("fs");


const  {Client} = require("pg");
const sql_client = new Client({
  user: "first001",
  host: "postgresql://first001:EGFUOhbUkGwWrWsXTKYC3gITDiCbxCa1@dpg-crhtgndumphs73c92kh0-a/trial001",
  database: "trial001",
  password: "EGFUOhbUkGwWrWsXTKYC3gITDiCbxCa1"
});
sql_client.connect();




http.createServer((req, res) => {

    console.log(req.url);
    if (req.url == "/")
        req.url = "/index.html";

    fs.readFile(__dirname + "/html" + req.url, (err, data) => {

        if (err == null)
        {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });

}).listen(2000);

