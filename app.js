var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();

app.get('/', function(request, response) {
  response.sendfile(__dirname + 'build/index.html');
}).listen(port);

console.log('listening on port: ', port);
