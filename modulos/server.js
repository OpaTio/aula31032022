var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Olá, Terceiro B mais querido!');
}).listen(8080); 