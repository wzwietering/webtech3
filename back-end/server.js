var http_port = 8086;
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  require('./router').get(req, res);
});
server.listen(http_port);
