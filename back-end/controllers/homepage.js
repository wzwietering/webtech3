var http = require('http');
var fs = require('fs');


exports.get = function(require, response){
    fs.readFile('../front-end/index.html', function (err, html) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  });
};
