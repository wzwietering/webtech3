var url = require('url');
var http  = require('http');
var fs = require('fs');

var types = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

exports.get = function(req, response) {
  req.requrl = url.parse(req.url, true);
  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");
  pathname = pathname.replace('/group6', '');
  if (pathname === "") {
    response.writeHead(302, {
      'Location': '/group6/index.html'
    });
    response.end();
  } else if (pathname == "/") {
    pathname = "/index.html";
  }
  var elements = pathname.split('.');
  var type = types[elements[elements.length - 1]] || 'text/plain';
  fs.readFile('../front-end' + pathname, function(error, data) {
    if(error){
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write('<h1>404 - Page not found</h1><p><a href="/group6/">Return to home</a></p>');
      response.end();
    } else {
      response.setHeader('Content-Type', type);
      response.write(data, 'utf8');
      response.end();
    }
  });
};
