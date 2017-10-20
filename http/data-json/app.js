var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'application/json' });
    // var Content = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var obj = {
        firstname: "Vijay",
        lastName: "Deepak"
    }
    response.end(JSON.stringify(obj));

}).listen(3000, '127.0.0.1');