var url = require('url');
var fs = require('fs');

exports.get = function(req, response) {
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
  if (/.(css)$/.test(path)) {
    response.writeHead(200, {
      'Content-Type': 'text/css'
    });
    fs.readFile(__dirname + path, 'utf8', function(err, data) {
      if (err){
        throw err;
      }
      response.write(data, 'utf8');
      response.end();
    });
  } else {
    if (path === '/') {
      require('./controllers/homepage.js').get(require, response);
    } else {
      require('./controllers/404.js').get(require, response);
    }
  }
};
