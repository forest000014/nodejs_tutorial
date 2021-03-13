var http = require('http');
var dt = require('./04_myfirstmodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are ... : " + dt.myDateTime());
    res.end();
}).listen(6670);