exports.get = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write('<h1>404 - Page not found</h1><p><a href="/">Return to home</a></p>');
  res.end();
};
