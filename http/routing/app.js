var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {

    if(request.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if(request.url === '/api'){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: "Vijay",
            lastName: "Deepak"
        }
        response.end(JSON.stringify(obj));
    } else {
        response.writeHead(404);
        response.end();
    }

}).listen(3000, '127.0.0.1');