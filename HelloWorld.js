var http=require('http');
var url=require('url');
var fs=require('fs');
fs.readFile('../Index.html', function (err, data) {
    if (err) {
        throw err;
    }

http.createServer(function (req, res) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    }).listen(8080);

    });
