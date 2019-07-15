var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
    	fs.readFile('./index.html', function(err, data) {
    		response.writeHead(200, {'Content-Type': 'text/html'});
        	response.write(data);
            return response.end();
        });  	
    } else {
        response.statusCode = 404;
        fs.readFile('./404error.jpg', function(err, data) {
    		response.writeHead(200, {'Content-Type': 'image/jpeg'});
        	response.write(data);
            return response.end();
        });  	
    }
});

server.listen(8080);