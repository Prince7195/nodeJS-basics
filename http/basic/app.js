var http = require('http');

http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Welcome to Node');

}).listen(3000, '127.0.0.1');