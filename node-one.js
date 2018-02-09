var http = require('http');
var dt   = require('./node-mod-1.js');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("The date an time are currently: " + dt.myDateTime());
	res.end("\nHello World!");

}).listen(8080);