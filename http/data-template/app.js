var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    var Content = fs.readFileSync(__dirname + '/index.html', 'utf8');
    response.end(Content);

}).listen(3000, '127.0.0.1');