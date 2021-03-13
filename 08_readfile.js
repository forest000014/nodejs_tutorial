var http = require('http');
var fs = require('fs');

console.log("okok");

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); // 가능
    fs.readFile('demofile1.html', function(err, data){
        res.write(data);
        res.end();
        return;
    });   
}).listen(8080);

/*
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); // 가능
    fs.readFile('demofile1.html', function(err, data){
        res.write(data);
        
        return;
    });
    res.end(); // unhandled 'error' event 라고 나오면서, 실행 안 됨.   
}).listen(8080);
*/

/* ====== original version ======
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });   
}).listen(8080);
*/