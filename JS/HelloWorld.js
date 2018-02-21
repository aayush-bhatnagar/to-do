var http=require('http');
var url=require('url');
var fs=require('fs');
var file="C:\Users\c184401\Desktop\Work\UI-UX\NODE Practice/index.html";

http.createServer(function (req, res) {
    fs.readFile(file,function(data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
    }).listen(8080);